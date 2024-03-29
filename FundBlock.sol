// Sources flattened with hardhat v2.18.1 https://hardhat.org

// SPDX-License-Identifier: MIT

// File @openzeppelin/contracts/security/ReentrancyGuard.sol@v4.9.3

// Original license: SPDX_License_Identifier: MIT
// OpenZeppelin Contracts (last updated v4.9.0) (security/ReentrancyGuard.sol)

pragma solidity ^0.8.17;

/**
 * @dev Contract module that helps prevent reentrant calls to a function.
 *
 * Inheriting from `ReentrancyGuard` will make the {nonReentrant} modifier
 * available, which can be applied to functions to make sure there are no nested
 * (reentrant) calls to them.
 *
 * Note that because there is a single `nonReentrant` guard, functions marked as
 * `nonReentrant` may not call one another. This can be worked around by making
 * those functions `private`, and then adding `external` `nonReentrant` entry
 * points to them.
 *
 * TIP: If you would like to learn more about reentrancy and alternative ways
 * to protect against it, check out our blog post
 * https://blog.openzeppelin.com/reentrancy-after-istanbul/[Reentrancy After Istanbul].
 */
abstract contract ReentrancyGuard {
    // Booleans are more expensive than uint256 or any type that takes up a full
    // word because each write operation emits an extra SLOAD to first read the
    // slot's contents, replace the bits taken up by the boolean, and then write
    // back. This is the compiler's defense against contract upgrades and
    // pointer aliasing, and it cannot be disabled.

    // The values being non-zero value makes deployment a bit more expensive,
    // but in exchange the refund on every call to nonReentrant will be lower in
    // amount. Since refunds are capped to a percentage of the total
    // transaction's gas, it is best to keep them low in cases like this one, to
    // increase the likelihood of the full refund coming into effect.
    uint256 private constant _NOT_ENTERED = 1;
    uint256 private constant _ENTERED = 2;

    uint256 private _status;

    constructor() {
        _status = _NOT_ENTERED;
    }

    /**
     * @dev Prevents a contract from calling itself, directly or indirectly.
     * Calling a `nonReentrant` function from another `nonReentrant`
     * function is not supported. It is possible to prevent this from happening
     * by making the `nonReentrant` function external, and making it call a
     * `private` function that does the actual work.
     */
    modifier nonReentrant() {
        _nonReentrantBefore();
        _;
        _nonReentrantAfter();
    }

    function _nonReentrantBefore() private {
        // On the first call to nonReentrant, _status will be _NOT_ENTERED
        require(_status != _ENTERED, "ReentrancyGuard: reentrant call");

        // Any calls to nonReentrant after this point will fail
        _status = _ENTERED;
    }

    function _nonReentrantAfter() private {
        // By storing the original value once again, a refund is triggered (see
        // https://eips.ethereum.org/EIPS/eip-2200)
        _status = _NOT_ENTERED;
    }

    /**
     * @dev Returns true if the reentrancy guard is currently set to "entered", which indicates there is a
     * `nonReentrant` function in the call stack.
     */
    function _reentrancyGuardEntered() internal view returns (bool) {
        return _status == _ENTERED;
    }
}


// File contracts/FundBlock.sol

// Original license: SPDX_License_Identifier: MIT
pragma solidity ^0.8.17;
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
