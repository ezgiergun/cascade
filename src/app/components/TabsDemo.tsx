"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";
import { AssetsForm } from "./AssetsForm";

export function TabsDemo() {
  const tabs = [
    {
      title: "Assets",
      value: "Assets",
      content: (
        <div className="w-full relative h-full rounded-2xl p-10 space-y-10 text-xl md:text-4xl text-white bg-gradient-to-br from-stone-300 to-violet-900">
          <p>Get information about your assets</p>
          <GetAssetsContent />
        </div>
      ),
    },
    {
      title: "Search Assets",
      value: "Search Assets",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl  text-white bg-gradient-to-br from-stone-300 to-violet-900">
          <p>Search Assets</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Signatures For Assets",
      value: "Signatures For Assets",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl  text-white bg-gradient-to-br from-stone-300 to-violet-900">
          <p>Signatures For Assets</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Token Account",
      value: "Token Account",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl  text-white bg-gradient-to-br from-stone-300 to-violet-900">
          <p>Token Account</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "NFT Editions",
      value: "NFT Editions",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl  text-white bg-gradient-to-br from-stone-300 to-violet-900">
          <p>NFT Editions</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-[100rem] mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image
      src="/linear.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
const GetAssetsContent = () => {
    return (
      <AssetsForm/>
    );
  };

