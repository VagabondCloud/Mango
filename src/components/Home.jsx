import { ethers } from "ethers";
import WalletBalance from "./WalletBalance";
import Nft from "../hardhat/artifacts/contracts/LipToken.sol/LipToken.json";
import { useEffect } from "react";
import { useState } from "react";
import Button from "./mintbutton";
import img1 from "./img/1.png";
import img2 from "./img/2.png";
import img3 from "./img/3.png";
import img4 from "./img/4.jpg";

const contractAddress = "0x4990D55C46fF0BBf7c39e26f7c85990c3f475D86";

const provider = new ethers.providers.Web3Provider(window.ethereum);

const signer = provider.getSigner();

const contract = new ethers.Contract(contractAddress, Nft.abi, signer);


// Global variables
let nextId = 3;


function Home() {

    const [library, setLibrary] = useState(false)
    const [acc, setAccount] = useState();
    const [data, setData] = useState([]);
    const [rarity, setRarity] = useState([]);
    const [img, setImg] = useState("");



    async function connectWallet() {
        if (window.ethereum) {
            // setLibrary(true);
            const [account] = await window.ethereum.request({ method: "eth_requestAccounts", });
            setAccount(account)
        } else {
            console.log("make a little message to install meta")
        }
        // console.log(`connected ${library}`)
    }

    // function pagina() {
    //     if() {
    //         setLibrary(true)
    //     } 
    // }
   
    useEffect(() => {   
        const fetchData = async () => {
            const [account] = await window.ethereum.request({ method: "eth_requestAccounts", });
            const yourData = await contract.getOwnerLips(account)
            setData(yourData)
        }
        fetchData();
    }, [library])
    
    useEffect(() => {
        const fetchRarity = async () => {
            const newRarity = [];
            const [account] = await window.ethereum.request({ method: "eth_requestAccounts", });
            const yourData = await contract.getOwnerLips(account);
            for(let i = 0; i < yourData.length; i++) {
              if(data.length > rarity.length) {
              newRarity.push(yourData[i][4])
            }}
            setRarity(newRarity)
        }
        fetchRarity()
        
    }, [data])

    console.log(data);
    console.log(rarity)
    // console.log(counter)
    // console.log(newRarity)
    




// function showNfts(){ 

//     let num;

    // function imgSetter(x) {
    //     if(x == 0) {
    //         setImg(img1)
    //     } else if(x == 1) {
    //         setImg(img2)
    //     } else if(x == 2) {
    //         setImg(img3)
    //     } else if(x !== 1 && x !== 0 && x !== 2) {
    //         setImg(img4)
    //     }
    // }

//     function simpleLoop() {
//         for(let i = 0; i < rarity.length; i++) {
//             let num = rarity[i]
//             console.log(num)
//         }
//         imgSetter(num)
//     }
//     simpleLoop()
// }

    return (
        <div>
           
          Chucuchiwillo
          <button onClick={connectWallet}>Your Nfts</button>
          <WalletBalance/>
          <h5>{acc}</h5>
          <h5>{rarity}</h5>
          <Button />
          
          {rarity.map((item, index) => {
            if(item == 1) {
            return (
            <img key={index} src={img1} >
            </img>)
            } else if (item == 2) {
                return (
                    <img key={index} src={img2}>
                    </img>)
            } else if (item == 0) {
                return (
                    <img key={index} src={img3}>
                    </img>)
            } else {
                return (
                    <img key={index} src={img4}>
                    </img>)
            }
          })}
          <>
      <h1>Your collection:</h1>
      {Array(rarity.length)
      .fill(0)
      .map((_, i) => (
        <div key={i}>
            {img}
        </div>
      ))
      
      }
    </>

        </div>
      )
}

// function newFunc(y) {

//         let num;
    
//         function imgSetter(x) {
//             if(x == 0) {
//                 setImg(img1)
//             } else if(x == 1) {
//                 setImg(img2)
//             } else if(x == 2) {
//                 setImg(img3)
//             } else if(x !== 1 && x !== 0 && x !== 2) {
//                 setImg(img4)
//             }
//         }
    
//         const images = y.map()

//         function simpleLoop(y) {
//             for(let i = 0; i < y.length; i++) {
//                 let num = y[i]
//                 console.log(num)
//             }
//         }

//         simpleLoop()
    

// }



export default Home;
