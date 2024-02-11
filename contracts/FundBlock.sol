// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract FundBlock is ReentrancyGuard{

    constructor(){
        
    }
    uint256 public id; // Make the campaign ID publicly accessible

    event Donation(
        uint256 _amount,
        address indexed _donor,
        uint256 indexed _campaignId
    ); // Add campaign ID to the Donation event
    event Withdrawal(
        address indexed _owner,
        uint256 indexed _campaignId,
        uint256 _amount
    ); // Add campaign ID to the Withdrawal event
    event Now(uint256 _thisTime);

    enum CampaignStatus {
        Active,
        Expired,
        GoalReached
    }

    struct Campaign {
        address owner;
        string title;
        string description;
        uint256 targetAmount;
        uint256 deadline;
        uint256 amountRealised;
        uint256 campaignId;
        CampaignStatus status;
    }

    Campaign[] public campaigns;

    mapping(uint256 => mapping(address => bool)) public contributedToCampaign;
    mapping(uint256 => address[]) public donors;

    receive() external payable {
        emit Donation(msg.value, msg.sender, 0); // Add a default campaign ID (0) for fallback donations
    }

    modifier campaignExist(uint256 _id) {
        require(_id < campaigns.length, "Campaign does not exist"); // Check if the campaign ID is valid
        _;
    }

    modifier campaignActive(uint256 _id) {
        require(
            campaigns[_id].deadline > block.timestamp,
            "Campaign no longer active"
        );
        _;
    }

    modifier campaignHasDonations(uint256 _id) {
        require(campaigns[_id].amountRealised > 0, "No donations to withdraw");
        _;
    }
    function logCurrentTimestamp() public view returns   (uint256){
        uint256 currentTimestamp = block.timestamp +1;
        return  currentTimestamp;
    }

    function createCampaign(
        string memory _title,
        string memory _description,
        uint256 _target,
        uint256 _deadline
    ) public returns (uint256) {
        require(msg.sender != address(0), "Invalid address");
      

        uint256 _id = id++;
        campaigns.push(
            Campaign({
                owner: msg.sender,
                campaignId: _id,
                title: _title,
                description: _description,
                targetAmount: _target,
                deadline: _deadline,
                amountRealised: 0,
                status: CampaignStatus.Active
            })
        );

        return _id;
    }

    function donateToCampaign(uint256 _id)
        public
        payable
        campaignExist(_id)
        campaignActive(_id)
    {
        require(msg.value > 0, "You cannot donate anything less than zero");
        campaigns[_id].amountRealised += msg.value;
        contributedToCampaign[_id][msg.sender] = true;
        donors[_id].push(msg.sender);

        emit Donation(msg.value, msg.sender, _id); // Emit the campaign ID
    }

    function getAllDonors(uint256 _id)
        public
        view
        campaignExist(_id)
        returns (address[] memory)
    {
        return donors[_id];
    }

    function getAllCampaigns() public view returns (Campaign[] memory) {
        return campaigns;
    }

    function getAParticularCampaign(uint256 _id)
        public
        view
        campaignExist(_id)
        returns (Campaign memory)
    {
        return campaigns[_id];
    }

    function getDonors(uint256 _id)
        public
        view
        campaignActive(_id)
        returns (address[] memory)
    {
        return donors[_id];
    }

    function withdrawDonationsForACampaign(uint256 _id)nonReentrant
        public
        campaignExist(_id)
        campaignHasDonations(_id)
    {
        uint256 totalAmountDonated = campaigns[_id].amountRealised;
        campaigns[_id].amountRealised = 0;

        (bool success, ) = payable(campaigns[_id].owner).call{
            value: totalAmountDonated
        }("");
        require(success, "Withdrawal failed");

        emit Withdrawal(campaigns[_id].owner, _id, totalAmountDonated); // Include owner address and campaign ID
    }
}