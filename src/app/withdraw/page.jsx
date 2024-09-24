"use client";
import Click from "@/components/click";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import { ChevronLeft } from "lucide-react";
import WithdrawModal from "@/components/modal";
import { Input } from "antd";
import axios from "axios";

const Page = () => {
  const [coins, setCoins] = useState(null); // Initially set to null
  const [loading, setLoading] = useState(false); // Loading state

  const [paypal, setPaypal] = useState(4000);
  const [paypal2, setPaypal2] = useState(12000);
  const [paypal3, setPaypal3] = useState(20000);
  const [paypal4, setPaypal4] = useState(30000);

  const [cashapp, setCashapp] = useState(4000);
  const [cashapp2, setCashapp2] = useState(12000);
  const [cashapp3, setCashapp3] = useState(20000);
  const [cashapp4, setCashapp4] = useState(30000);

  const [freefire, setFreefire] = useState(1000);
  const [freefire2, setFreefire2] = useState(2000);
  const [freefire3, setFreefire3] = useState(4000);
  const [freefire4, setFreefire4] = useState(8000);

  const [efootball, setEfootball] = useState(1000);
  const [efootball2, setEfootball2] = useState(4000);
  const [efootball3, setEfootball3] = useState(10000);
  const [efootball4, setEfootball4] = useState(20000);

  const [robux, setRobux] = useState(3000);
  const [robux2, setRobux2] = useState(5000);
  const [robux3, setRobux3] = useState(13000);
  const [robux4, setRobux4] = useState(25000);

  const [monopoly, setMonopoly] = useState(30000);

  const [pubg, setPubg] = useState(2000);
  const [pubg2, setPubg2] = useState(4000);
  const [pubg3, setPubg3] = useState(10000);
  const [pubg4, setPubg4] = useState(20000);

  const getCoins = async () => {
    const token = localStorage.getItem("authToken");
    setLoading(true);
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URI}api/coins`,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      console.log(response.data);
      setCoins(response.data);
      setLoading(false); // Set loading to false after fetching
    } catch (error) {
      console.log(error);
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000) {
      return `${num / 1000}K`;
    }
    return num;
  };

  const error = () => {
    toast("Not Enough Coins", {
      icon: "❌",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  const errorTwo = () => {
    toast("No Withdraw History Found", {
      icon: "❌",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  const checkCoin = (item) => {
    if (coins < item) {
      error();
    }
  };

  const paypalClick = (
    <Click>
      <button
        onClick={() => checkCoin(paypal)}
        className="bg-[#084599] flex items-center gap-2 px-4 py-2 text-sm rounded-lg text-white"
      >
        {formatNumber(paypal)}{" "}
        <Image src="/coin.png" width={20} height={20} alt="coin" />
      </button>
    </Click>
  );
  const paypal2Click = (
    <Click>
      <button
        onClick={() => checkCoin(paypal2)}
        className="bg-[#084599] flex items-center gap-2 px-4 py-2 text-sm rounded-lg text-white"
      >
        {formatNumber(paypal2)}{" "}
        <Image src="/coin.png" width={20} height={20} alt="coin" />
      </button>
    </Click>
  );
  const paypal3Click = (
    <Click>
      <button
        onClick={() => checkCoin(paypal3)}
        className="bg-[#084599] flex items-center gap-2 px-4 py-2 text-sm rounded-lg text-white"
      >
        {formatNumber(paypal3)}{" "}
        <Image src="/coin.png" width={20} height={20} alt="coin" />
      </button>
    </Click>
  );
  const paypal4Click = (
    <Click>
      <button
        onClick={() => checkCoin(paypal4)}
        className="bg-[#084599] flex items-center gap-2 px-4 py-2 text-sm rounded-lg text-white"
      >
        {formatNumber(paypal4)}{" "}
        <Image src="/coin.png" width={20} height={20} alt="coin" />
      </button>
    </Click>
  );

  const cashClick = (
    <Click>
      <button
        onClick={() => checkCoin(cashapp)}
        className="bg-[#084599] flex items-center gap-2 px-4 py-2 text-sm rounded-lg text-white"
      >
        {formatNumber(cashapp)}{" "}
        <Image src="/coin.png" width={20} height={20} alt="coin" />
      </button>
    </Click>
  );
  const cash2Click = (
    <Click>
      <button
        onClick={() => checkCoin(cashapp2)}
        className="bg-[#084599] flex items-center gap-2 px-4 py-2 text-sm rounded-lg text-white"
      >
        {formatNumber(cashapp2)}{" "}
        <Image src="/coin.png" width={20} height={20} alt="coin" />
      </button>
    </Click>
  );
  const cash3Click = (
    <Click>
      <button
        onClick={() => checkCoin(cashapp3)}
        className="bg-[#084599] flex items-center gap-2 px-4 py-2 text-sm rounded-lg text-white"
      >
        {formatNumber(cashapp3)}{" "}
        <Image src="/coin.png" width={20} height={20} alt="coin" />
      </button>
    </Click>
  );
  const cash4Click = (
    <Click>
      <button
        onClick={() => checkCoin(cashapp4)}
        className="bg-[#084599] flex items-center gap-2 px-4 py-2 text-sm rounded-lg text-white"
      >
        {formatNumber(cashapp4)}{" "}
        <Image src="/coin.png" width={20} height={20} alt="coin" />
      </button>
    </Click>
  );

  const robuxClick = (
    <Click>
      <button
        onClick={() => checkCoin(robux)}
        className="bg-[#084599] flex items-center gap-2 px-4 py-2 text-sm rounded-lg text-white"
      >
        {formatNumber(robux)}{" "}
        <Image src="/coin.png" width={20} height={20} alt="coin" />
      </button>
    </Click>
  );
  const robux2Click = (
    <Click>
      <button
        onClick={() => checkCoin(robux2)}
        className="bg-[#084599] flex items-center gap-2 px-4 py-2 text-sm rounded-lg text-white"
      >
        {formatNumber(robux2)}{" "}
        <Image src="/coin.png" width={20} height={20} alt="coin" />
      </button>
    </Click>
  );
  const robux3Click = (
    <Click>
      <button
        onClick={() => checkCoin(robux3)}
        className="bg-[#084599] flex items-center gap-2 px-4 py-2 text-sm rounded-lg text-white"
      >
        {formatNumber(robux3)}{" "}
        <Image src="/coin.png" width={20} height={20} alt="coin" />
      </button>
    </Click>
  );
  const robux4Click = (
    <Click>
      <button
        onClick={() => checkCoin(robux4)}
        className="bg-[#084599] flex items-center gap-2 px-4 py-2 text-sm rounded-lg text-white"
      >
        {formatNumber(robux4)}{" "}
        <Image src="/coin.png" width={20} height={20} alt="coin" />
      </button>
    </Click>
  );

  const efootballClick = (
    <Click>
      <button
        onClick={() => checkCoin(efootball)}
        className="bg-[#084599] flex items-center gap-2 px-4 py-2 text-sm rounded-lg text-white"
      >
        {formatNumber(efootball)}{" "}
        <Image src="/coin.png" width={20} height={20} alt="coin" />
      </button>
    </Click>
  );
  const efootball2Click = (
    <Click>
      <button
        onClick={() => checkCoin(efootball2)}
        className="bg-[#084599] flex items-center gap-2 px-4 py-2 text-sm rounded-lg text-white"
      >
        {formatNumber(efootball2)}{" "}
        <Image src="/coin.png" width={20} height={20} alt="coin" />
      </button>
    </Click>
  );
  const efootball3Click = (
    <Click>
      <button
        onClick={() => checkCoin(efootball3)}
        className="bg-[#084599] flex items-center gap-2 px-4 py-2 text-sm rounded-lg text-white"
      >
        {formatNumber(efootball3)}{" "}
        <Image src="/coin.png" width={20} height={20} alt="coin" />
      </button>
    </Click>
  );
  const efootball4Click = (
    <Click>
      <button
        onClick={() => checkCoin(efootball4)}
        className="bg-[#084599] flex items-center gap-2 px-4 py-2 text-sm rounded-lg text-white"
      >
        {formatNumber(efootball4)}{" "}
        <Image src="/coin.png" width={20} height={20} alt="coin" />
      </button>
    </Click>
  );

  const freefireClick = (
    <Click>
      <button
        onClick={() => checkCoin(freefire)}
        className="bg-[#084599] flex items-center gap-2 px-4 py-2 text-sm rounded-lg text-white"
      >
        {formatNumber(freefire)}{" "}
        <Image src="/coin.png" width={20} height={20} alt="coin" />
      </button>
    </Click>
  );
  const freefire2Click = (
    <Click>
      <button
        onClick={() => checkCoin(freefire2)}
        className="bg-[#084599] flex items-center gap-2 px-4 py-2 text-sm rounded-lg text-white"
      >
        {formatNumber(freefire2)}{" "}
        <Image src="/coin.png" width={20} height={20} alt="coin" />
      </button>
    </Click>
  );
  const freefire3Click = (
    <Click>
      <button
        onClick={() => checkCoin(freefire3)}
        className="bg-[#084599] flex items-center gap-2 px-4 py-2 text-sm rounded-lg text-white"
      >
        {formatNumber(freefire3)}{" "}
        <Image src="/coin.png" width={20} height={20} alt="coin" />
      </button>
    </Click>
  );
  const freefire4Click = (
    <Click>
      <button
        onClick={() => checkCoin(freefire4)}
        className="bg-[#084599] flex items-center gap-2 px-4 py-2 text-sm rounded-lg text-white"
      >
        {formatNumber(freefire4)}{" "}
        <Image src="/coin.png" width={20} height={20} alt="coin" />
      </button>
    </Click>
  );

  const monopolyClick = (
    <Click>
      <button
        onClick={() => checkCoin(monopoly)}
        className="bg-[#084599] flex items-center gap-2 px-4 py-2 text-sm rounded-lg text-white"
      >
        {formatNumber(monopoly)}{" "}
        <Image src="/coin.png" width={20} height={20} alt="coin" />
      </button>
    </Click>
  );

  const pubgClick = (
    <Click>
      <button
        onClick={() => checkCoin(pubg)}
        className="bg-[#084599] flex items-center gap-2 px-4 py-2 text-sm rounded-lg text-white"
      >
        {formatNumber(pubg)}{" "}
        <Image src="/coin.png" width={20} height={20} alt="coin" />
      </button>
    </Click>
  );
  const pubg2Click = (
    <Click>
      <button
        onClick={() => checkCoin(pubg2)}
        className="bg-[#084599] flex items-center gap-2 px-4 py-2 text-sm rounded-lg text-white"
      >
        {formatNumber(pubg2)}{" "}
        <Image src="/coin.png" width={20} height={20} alt="coin" />
      </button>
    </Click>
  );
  const pubg3Click = (
    <Click>
      <button
        onClick={() => checkCoin(pubg3)}
        className="bg-[#084599] flex items-center gap-2 px-4 py-2 text-sm rounded-lg text-white"
      >
        {formatNumber(pubg3)}{" "}
        <Image src="/coin.png" width={20} height={20} alt="coin" />
      </button>
    </Click>
  );
  const pubg4Click = (
    <Click>
      <button
        onClick={() => checkCoin(pubg4)}
        className="bg-[#084599] flex items-center gap-2 px-4 py-2 text-sm rounded-lg text-white"
      >
        {formatNumber(pubg4)}{" "}
        <Image src="/coin.png" width={20} height={20} alt="coin" />
      </button>
    </Click>
  );

  useEffect(() => {
    getCoins();
  }, []);
  return (
    <main className="max-w-[96%] px-4 mx-auto">
      <div className="flex justify-between items-center mt-8">
        <Link
          href={"/"}
          className="flex gap-1 items-center  text-white hover:underline text-sm"
        >
          <ChevronLeft /> Back To Home
        </Link>
        <div className="flex justify-end ">
          <h2
            className=" bg-[#04073B] text-white shadow rounded-lg p-4 cursor-pointer"
            onClick={errorTwo}
          >
            Check History
          </h2>
        </div>
      </div>
      <span className="w-full mt-8 inline-block h-1 bg-[#04073B]"></span>
      <div className="inline-block bg-[#04073B] text-white shadow rounded-lg mt-4 p-4">
        <h2 className="text-xl">PayPal:</h2>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2 justify-between items-center bg-[#04073B] text-white shadow rounded-lg mt-8 p-4">
          <Image src={"/paypal.webp"} alt="paypal" width={300} height={300} />

          <span>10$</span>
          <WithdrawModal
            click={paypalClick}
            shouldModal={coins >= paypal}
            title={"Please Enter Your Paypal Email"}
          >
            <Input placeholder="Email" />
          </WithdrawModal>
        </div>
        <div className="flex flex-col gap-2 justify-between items-center bg-[#04073B] text-white shadow rounded-lg mt-8 p-4">
          <Image src={"/paypal.webp"} alt="paypal" width={300} height={300} />

          <span>30$</span>
          <WithdrawModal
            click={paypal2Click}
            shouldModal={coins >= paypal}
            title={"Please Enter Your Paypal Email"}
          >
            <Input placeholder="Email" />
          </WithdrawModal>
        </div>
        <div className="flex flex-col gap-2 justify-between items-center bg-[#04073B] text-white shadow rounded-lg mt-8 p-4">
          <Image src={"/paypal.webp"} alt="paypal" width={300} height={300} />

          <span>60$</span>
          <WithdrawModal
            click={paypal3Click}
            shouldModal={coins >= paypal}
            title={"Please Enter Your Paypal Email"}
          >
            <Input placeholder="Email" />
          </WithdrawModal>
        </div>
        <div className="flex flex-col gap-2 justify-between items-center bg-[#04073B] text-white shadow rounded-lg mt-8 p-4">
          <Image src={"/paypal.webp"} alt="paypal" width={300} height={300} />

          <span>100$</span>
          <WithdrawModal
            click={paypal4Click}
            shouldModal={coins >= paypal}
            title={"Please Enter Your Paypal Email"}
          >
            <Input placeholder="Email" />
          </WithdrawModal>
        </div>
      </div>
      <div className="inline-block bg-[#04073B] text-white shadow rounded-lg mt-4 p-4">
        <h2 className="text-xl">Cashapp:</h2>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-10">
        <div className="flex flex-col gap-2 justify-between items-center bg-[#04073B] text-white shadow rounded-lg mt-8 p-4">
          <Image src={"/cashapp.png"} alt="cash app" width={300} height={300} />

          <span>10$</span>
          <WithdrawModal
            click={cashClick}
            shouldModal={coins >= cashapp}
            title={"Please Enter Your Cash Tag"}
          >
            <Input placeholder="Cash Tag" />
          </WithdrawModal>
        </div>
        <div className="flex flex-col gap-2 justify-between items-center bg-[#04073B] text-white shadow rounded-lg mt-8 p-4">
          <Image src={"/cashapp.png"} alt="cash app" width={300} height={300} />

          <span>30$</span>
          <WithdrawModal
            click={cash2Click}
            shouldModal={coins >= cashapp}
            title={"Please Enter Your Cash Tag"}
          >
            <Input placeholder="Cash Tag" />
          </WithdrawModal>
        </div>
        <div className="flex flex-col gap-2 justify-between items-center bg-[#04073B] text-white shadow rounded-lg mt-8 p-4">
          <Image src={"/cashapp.png"} alt="cash app" width={300} height={300} />

          <span>60$</span>
          <WithdrawModal
            click={cash3Click}
            shouldModal={coins >= cashapp}
            title={"Please Enter Your Cash Tag"}
          >
            <Input placeholder="Cash Tag" />
          </WithdrawModal>
        </div>
        <div className="flex flex-col gap-2 justify-between items-center bg-[#04073B] text-white shadow rounded-lg mt-8 p-4">
          <Image src={"/cashapp.png"} alt="cash app" width={300} height={300} />

          <span>100$</span>
          <WithdrawModal
            click={cash4Click}
            shouldModal={coins >= cashapp}
            title={"Please Enter Your Cash Tag"}
          >
            <Input placeholder="Cash Tag" />
          </WithdrawModal>
        </div>
      </div>
      <div className="inline-block bg-[#04073B] text-white shadow rounded-lg mt-4 p-4">
        <h2 className="text-xl">Roblox:</h2>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-10">
        <div className="flex flex-col gap-2 justify-between items-center bg-[#04073B] text-white shadow rounded-lg mt-8 p-4">
          <Image
            src={"/roblox.png"}
            className="rounded-3xl"
            alt="Roblox"
            width={300}
            height={300}
          />
          <div className="flex items-center gap-1">
            <span>780</span>
            <Image src={"/robux.webp"} alt="Robux" width={20} height={20} />
          </div>

          <WithdrawModal
            click={robuxClick}
            shouldModal={coins >= cashapp}
            title={"Please Enter Your Cash Tag"}
          >
            <Input placeholder="Cash Tag" />
          </WithdrawModal>
        </div>
        <div className="flex flex-col gap-2 justify-between items-center bg-[#04073B] text-white shadow rounded-lg mt-8 p-4">
          <Image
            src={"/roblox.png"}
            className="rounded-3xl"
            alt="Roblox"
            width={300}
            height={300}
          />
          <div className="flex items-center gap-1">
            <span>1720</span>
            <Image src={"/robux.webp"} alt="Robux" width={20} height={20} />
          </div>

          <WithdrawModal
            click={robux2Click}
            shouldModal={coins >= cashapp}
            title={"Please Enter Your Cash Tag"}
          >
            <Input placeholder="Cash Tag" />
          </WithdrawModal>
        </div>
        <div className="flex flex-col gap-2 justify-between items-center bg-[#04073B] text-white shadow rounded-lg mt-8 p-4">
          <Image
            src={"/roblox.png"}
            className="rounded-3xl"
            alt="Roblox"
            width={300}
            height={300}
          />
          <div className="flex items-center gap-1">
            <span>4700</span>
            <Image src={"/robux.webp"} alt="Robux" width={20} height={20} />
          </div>

          <WithdrawModal
            click={robux3Click}
            shouldModal={coins >= cashapp}
            title={"Please Enter Your Cash Tag"}
          >
            <Input placeholder="Cash Tag" />
          </WithdrawModal>
        </div>
        <div className="flex flex-col gap-2 justify-between items-center bg-[#04073B] text-white shadow rounded-lg mt-8 p-4">
          <Image
            src={"/roblox.png"}
            className="rounded-3xl"
            alt="Roblox"
            width={300}
            height={300}
          />
          <div className="flex items-center gap-1">
            <span>10500</span>
            <Image src={"/robux.webp"} alt="Robux" width={20} height={20} />
          </div>

          <WithdrawModal
            click={robux4Click}
            shouldModal={coins >= cashapp}
            title={"Please Enter Your Cash Tag"}
          >
            <Input placeholder="Cash Tag" />
          </WithdrawModal>
        </div>
      </div>

      <div className="inline-block bg-[#04073B] text-white shadow rounded-lg mt-8 p-4">
        <h2 className="text-xl">PUBG:</h2>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-10">
        <div className="flex flex-col pb-4 gap-3 items-center bg-[#04073B] text-white shadow rounded-lg mt-8 p-4">
          <Image
            src={"/pubg.jpg"}
            className="rounded-3xl"
            alt="pubg"
            width={300}
            height={300}
          />

          <span>325 UC</span>
          <WithdrawModal
            click={pubgClick}
            shouldModal={coins >= pubg}
            title={"Please Enter Your Pubg game Tag"}
          >
            <Input placeholder="Tag" />
          </WithdrawModal>
        </div>
        <div className="flex flex-col pb-4 gap-3 items-center bg-[#04073B] text-white shadow rounded-lg mt-8 p-4">
          <Image
            src={"/pubg.jpg"}
            className="rounded-3xl"
            alt="pubg"
            width={300}
            height={300}
          />

          <span>660 UC</span>
          <WithdrawModal
            click={pubg2Click}
            shouldModal={coins >= pubg}
            title={"Please Enter Your Pubg game Tag"}
          >
            <Input placeholder="Tag" />
          </WithdrawModal>
        </div>
        <div className="flex flex-col pb-4 gap-3 items-center bg-[#04073B] text-white shadow rounded-lg mt-8 p-4">
          <Image
            src={"/pubg.jpg"}
            className="rounded-3xl"
            alt="pubg"
            width={300}
            height={300}
          />

          <span>1700 UC</span>
          <WithdrawModal
            click={pubg3Click}
            shouldModal={coins >= pubg}
            title={"Please Enter Your Pubg game Tag"}
          >
            <Input placeholder="Tag" />
          </WithdrawModal>
        </div>
        <div className="flex flex-col pb-4 gap-3 items-center bg-[#04073B] text-white shadow rounded-lg mt-8 p-4">
          <Image
            src={"/pubg.jpg"}
            className="rounded-3xl"
            alt="pubg"
            width={300}
            height={300}
          />

          <span>3850 UC</span>
          <WithdrawModal
            click={pubg4Click}
            shouldModal={coins >= pubg}
            title={"Please Enter Your Pubg game Tag"}
          >
            <Input placeholder="Tag" />
          </WithdrawModal>
        </div>
      </div>
      <div className="inline-block bg-[#04073B] text-white shadow rounded-lg mt-8 p-4">
        <h2 className="text-xl">Free Fire:</h2>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-10">
        <div className="flex flex-col pb-4 gap-3 items-center bg-[#04073B] text-white shadow rounded-lg mt-8 p-4">
          <Image
            src={"/free-fire.jpg"}
            alt="free fire diamonds"
            className="rounded-3xl"
            width={300}
            height={300}
          />
          <div className="flex items-center gap-1">
            <span>231</span>
            <Image
              src={"/diamond.png"}
              alt="free fire diamonds"
              width={20}
              height={20}
            />
          </div>

          <WithdrawModal
            click={freefireClick}
            shouldModal={coins >= freefire}
            title={"Please Enter Your FreeFire game Tag"}
          >
            <Input placeholder="Tag" />
          </WithdrawModal>
        </div>
        <div className="flex flex-col pb-4 gap-3 items-center bg-[#04073B] text-white shadow rounded-lg mt-8 p-4">
          <Image
            src={"/free-fire.jpg"}
            alt="free fire diamonds"
            className="rounded-3xl"
            width={300}
            height={300}
          />
          <div className="flex items-center gap-1">
            <span>583</span>
            <Image
              src={"/diamond.png"}
              alt="free fire diamonds"
              width={20}
              height={20}
            />
          </div>

          <WithdrawModal
            click={freefire2Click}
            shouldModal={coins >= freefire}
            title={"Please Enter Your FreeFire game Tag"}
          >
            <Input placeholder="Tag" />
          </WithdrawModal>
        </div>
        <div className="flex flex-col pb-4 gap-3 items-center bg-[#04073B] text-white shadow rounded-lg mt-8 p-4">
          <Image
            src={"/free-fire.jpg"}
            alt="free fire diamonds"
            className="rounded-3xl"
            width={300}
            height={300}
          />
          <div className="flex items-center gap-1">
            <span>1188</span>
            <Image
              src={"/diamond.png"}
              alt="free fire diamonds"
              width={20}
              height={20}
            />
          </div>

          <WithdrawModal
            click={freefire3Click}
            shouldModal={coins >= freefire}
            title={"Please Enter Your FreeFire game Tag"}
          >
            <Input placeholder="Tag" />
          </WithdrawModal>
        </div>
        <div className="flex flex-col pb-4 gap-3 items-center bg-[#04073B] text-white shadow rounded-lg mt-8 p-4">
          <Image
            src={"/free-fire.jpg"}
            alt="free fire diamonds"
            className="rounded-3xl"
            width={300}
            height={300}
          />
          <div className="flex items-center gap-1">
            <span>2420</span>
            <Image
              src={"/diamond.png"}
              alt="free fire diamonds"
              width={20}
              height={20}
            />
          </div>

          <WithdrawModal
            click={freefire4Click}
            shouldModal={coins >= freefire}
            title={"Please Enter Your FreeFire game Tag"}
          >
            <Input placeholder="Tag" />
          </WithdrawModal>
        </div>
      </div>
      <div className="inline-block bg-[#04073B] text-white shadow rounded-lg mt-8 p-4">
        <h2 className="text-xl">eFootball:</h2>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-10">
        <div className="flex flex-col pb-4 gap-3 items-center bg-[#04073B] text-white shadow rounded-lg mt-8 p-4">
          <Image
            src={"/efootball.png"}
            alt="efootball C"
            className="rounded-3xl"
            width={300}
            height={300}
          />

          <span>330 C</span>
          <WithdrawModal
            click={efootballClick}
            shouldModal={coins >= freefire}
            title={"Please Enter Your FreeFire game Tag"}
          >
            <Input placeholder="Tag" />
          </WithdrawModal>
        </div>

        <div className="flex flex-col pb-4 gap-3 items-center bg-[#04073B] text-white shadow rounded-lg mt-8 p-4">
          <Image
            src={"/efootball.png"}
            alt="efootball C"
            className="rounded-3xl"
            width={300}
            height={300}
          />

          <span>1040 C</span>
          <WithdrawModal
            click={efootball2Click}
            shouldModal={coins >= freefire}
            title={"Please Enter Your FreeFire game Tag"}
          >
            <Input placeholder="Tag" />
          </WithdrawModal>
        </div>

        <div className="flex flex-col pb-4 gap-3 items-center bg-[#04073B] text-white shadow rounded-lg mt-8 p-4">
          <Image
            src={"/efootball.png"}
            alt="efootball C"
            className="rounded-3xl"
            width={300}
            height={300}
          />

          <span>3250 C</span>
          <WithdrawModal
            click={efootball3Click}
            shouldModal={coins >= freefire}
            title={"Please Enter Your FreeFire game Tag"}
          >
            <Input placeholder="Tag" />
          </WithdrawModal>
        </div>

        <div className="flex flex-col pb-4 gap-3 items-center bg-[#04073B] text-white shadow rounded-lg mt-8 p-4">
          <Image
            src={"/efootball.png"}
            alt="efootball C"
            className="rounded-3xl"
            width={300}
            height={300}
          />

          <span>5700 C</span>
          <WithdrawModal
            click={efootball4Click}
            shouldModal={coins >= freefire}
            title={"Please Enter Your FreeFire game Tag"}
          >
            <Input placeholder="Tag" />
          </WithdrawModal>
        </div>

        {/* <div className="flex flex-col pb-4 gap-3 items-center bg-[#04073B] text-white shadow rounded-lg mt-8">
          <Image
            src={"/images.jpg"}
            className="max-h-32 sm:max-h-max object-cover"
            alt="Monopoly Dice"
            width={500}
            height={400}
          />
          <h2 className="text-md">Monopoly Dice</h2>
          <span>900 Dice</span>
          <WithdrawModal
            click={monopolyClick}
            shouldModal={coins >= monopoly}
            title={"Please Enter Your Monopoly game Tag"}
          >
            <Input placeholder="Tag" />
          </WithdrawModal>
        </div> */}
      </div>
      <Toaster position="top-right" />
    </main>
  );
};

export default Page;
