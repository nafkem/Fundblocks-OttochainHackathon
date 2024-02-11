import { ethers } from "ethers";
import abi from "../contract/fundblock.json";


const contractAddr = "0x3a713416811728E7Ab977C6A3E3DC20F5aC9d1c7";

const getContract = async () => {
  if (window.ethereum) {
    const provider = new ethers.BrowserProvider(window.ethereum); // A connection to the Ethereum network
    var signer = await provider.getSigner(); // Holds your private key and can sign things
    const Contract = new ethers.Contract(contractAddr, abi, signer);
    console.log(Contract)
    return Contract;
  } else {
    alert("No wallet detected");
  }
};

export async function addCampaign(title, description, target, deadline) {
    const fundContract = await getContract();
    try {
        var tx = await fundContract.createCampaign(
            title,
            description,
            target,
            deadline
          );
          await tx.wait();
          console.log(tx.hash)
    } catch (error) {
        console.log(error);
    }
  }

export async function getAllCampaigns(owner) {
    const fundContract = await getContract();
    try {
        var project = await fundContract.getAllCampaigns(owner);
        return project;
      } catch (error) {
        console.log(error);
      }
}

export async function donateToCampaign(owner) {
    const fundContract = await getContract();
    try {
        var tx = await fundContract.donateToCampaign(owner);
        await tx.wait();
      } catch (error) {
        console.log(error);
      }
}

export async function getAParticularCampaign() {
    const fundContract = await getContract();
    try {
        var campaigns = await fundContract.getAParticularCampaign();
        const structuredFundBlockCampaign = campaigns.map((campaign) => ({
            owner: campaign.owner,
            title: campaign.title,
            description: campaign.description,
            amount: campaign.targetAmount,
            deadline: campaign.deadline,
            amountRealised: campaign.amountRealised,
            status: campaign.inProgress
        }));

        return structuredFundBlockCampaign;
      } catch (error) {
        console.log(error);
      }
}


