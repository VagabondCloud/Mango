import { ethers } from 'ethers';
import Nft from '../hardhat/artifacts/contracts/LipToken.sol/LipToken.json';



const contractAddress = '0x4990D55C46fF0BBf7c39e26f7c85990c3f475D86';

const provider = new ethers.providers.Web3Provider(window.ethereum);

// get the end user
const signer = provider.getSigner();

//get the smart contract
const contract = new ethers.Contract(contractAddress, Nft.abi, signer);

function Button () {




    async function btn () {
        const mint = await contract.createRandomLip("ludo");

    await mint.wait()
    console.log(mint);
}
    async function withdraw() {
        const cashout = await contract.withdraw()

        await cashout.wait();
    }


    return (
        <div>
            <h5>
                <button onClick={btn}>MINT ME!</button>
                <button onClick={withdraw}>Script ME!</button>
            </h5>
        </div>
    )
}

export default Button;