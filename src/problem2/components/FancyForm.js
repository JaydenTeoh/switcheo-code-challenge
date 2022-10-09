import { useEffect, useState } from "react";
import ErrorMessage from "./ErrorMessage";
import { ethers } from "ethers";
import { useNotification } from "web3uikit";
import axios from "axios";
import { SingleCoin } from "../pages/api/api";

const startPayment = async ({ setError, dispatch, ether, addr }) => {
  try {
    if (!window.ethereum)
      throw new Error("No crypto wallet found. Please install it.");

    await window.ethereum.send("eth_requestAccounts");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    ethers.utils.getAddress(addr);
    const tx = await signer.sendTransaction({
      to: addr,
      value: ethers.utils.parseEther(ether),
    });
    console.log({ ether, addr });
    dispatch({
      type: "success",
      message: "ETH sent",
      title: "ETH sent successfully",
      position: "topR",
    });
  } catch (err) {
    setError(err.message);
    dispatch({
      type: "success",
      message: "Error: " + err.message,
      title: "Unable to send ETH",
      position: "topR",
    });
  }
};

export default function FancyForm({ handleClose }) {
  const [error, setError] = useState();
  const dispatch = useNotification();
  const [ethInfo, setEthInfo] = useState();
  const [ethAmount, setEthAmount] = useState(0);
  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin);
    setEthInfo(data);
  };

  useEffect(() => {
    fetchCoin();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    setError();
    await startPayment({
      setError,
      dispatch,
      ether: data.get("ether"),
      addr: data.get("addr"),
    });
  };
  return (
    <div className="m-auto h-full w-full rounded-md bg-[#d7ef9c]">
      <button onClick={handleClose} className="m-auto flex mt-2 mr-4">
        <div className="text-red-500 font-semibold">Close</div>
      </button>
      <form className="m-auto items-center" onSubmit={handleSubmit}>
        <div>
          <main className="p-4">
            <h1 className="text-2xl font-bold text-gray-700 text-center mb-14">
              Send ETH Payment
            </h1>
            <div className="">
              <div className="my-3">
                <input
                  type="text"
                  name="addr"
                  className="w-full rounded-md p-2"
                  placeholder="Recipient Address"
                />
              </div>
              <div className="my-3">
                <input
                  name="ether"
                  type="text"
                  className="w-full rounded-md p-2"
                  placeholder="Amount in ETH"
                  onChange={(e) => setEthAmount(e.target.value)}
                />
              </div>
              <div className="text-slate-500 text-md font-semibold">
                {ethAmount.toString() + " ETH ="}
                {" $SGD " +
                  (ethAmount * ethInfo?.market_data.current_price["sgd"])
                    .toString()
                    .slice(0, 8)}
              </div>
            </div>
          </main>
          <footer className="p-4">
            <button
              type="submit"
              className="btn btn-primary text-white font-semibold p-3 mt-10 w-full rounded-md bg-[rgb(5,57,76)]"
            >
              Pay Now
            </button>
            <ErrorMessage message={error} />
          </footer>
        </div>
      </form>
    </div>
  );
}
