

const ConnectWallet = async () => {
    if (window.ethereum) { //check if Metamask is installed
          try {
            const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
            console.log(account);
              const status = true;
                  return status;
               
          } catch (error) {
              return {
                  connectedStatus: false,
                  status: "🦊 Connect to Metamask using the button on the top right."
              }
          }
          
    } else {
          return {
              connectedStatus: false,
              status: "🦊 You must install Metamask into your browser: https://metamask.io/download.html"
          }
        } 
  };

  export default ConnectWallet;