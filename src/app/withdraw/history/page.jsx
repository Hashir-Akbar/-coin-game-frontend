import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <main className="max-w-[96%] px-4 mx-auto text-white">
      <div className="flex justify-between items-center mt-8">
        <Link
          href={"/"}
          className="flex gap-1 items-center  text-white hover:underline text-sm"
        >
          <ChevronLeft /> Back To Withdraw
        </Link>
      </div>

      <div className="mt-8 grid gap-3">
        <div className="flex justify-between items-center shadow border border-gray-800 p-2 ">
          <div className="flex gap-2 items-center">
            <Image
              src="/paypal.webp"
              width={40}
              height={40}
              alt="withdraw history"
            />
            <span>2000$</span>
          </div>
          <button className="bg-gray-700 py-2 px-4 rounded-lg">
            In Review
          </button>
        </div>
        <div className="flex justify-between items-center shadow border border-gray-800 p-2 ">
          <div className="flex gap-2 items-center">
            <Image
              src="/uc.png"
              width={40}
              height={40}
              alt="withdraw history"
            />
            <span>7000UC</span>
          </div>
          <button className="bg-green-700 py-2 px-4 rounded-lg">Paid</button>
        </div>
        <div className="flex justify-between items-center shadow border border-gray-800 p-2 ">
          <div className="flex gap-2 items-center">
            <Image
              src="/uc.png"
              width={40}
              height={40}
              alt="withdraw history"
            />
            <span>4000UC</span>
          </div>
          <button className="bg-green-700 py-2 px-4 rounded-lg">Paid</button>
        </div>
      </div>
    </main>
  );
};

export default Page;
