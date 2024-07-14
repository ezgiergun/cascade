"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/app/lib/utils";
import { GlareCardAssets } from "./GlareCardAssets";
import { getAsset, getAssetBatch, getAssetProof, getAssetProofBatch, getAssetsByAuthority, getAssetsByCreator, getAssetsByGroup, getAssetsByOwner } from "../data/getAssets";
import { AssetData, AssetResponse } from "../lib/types";

export function AssetsForm() {
  const [assetIdFields, setAssetIdFields] = useState<string[]>([""]);
  const [ownerIdField, setOwnerIdField] = useState<string>("");
  const [authorityIdField, setAuthorityIdField] = useState<string>("");
  const [creatorIdField, setCreatorIdField] = useState<string>("");
  const [groupKeyField, setGroupKeyField] = useState<string>("collection");
  const [groupValueField, setGroupValueField] = useState<string>("");
  const [proofIdFields, setProofIdFields] = useState<string[]>([""]);

  const [showAssetIdDemo, setShowAssetIdDemo] = useState(false);
  const [showOwnerIdDemo, setShowOwnerIdDemo] = useState(false);
  const [showAuthorityIdDemo, setShowAuthorityIdDemo] = useState(false);
  const [showCreatorIdDemo, setShowCreatorIdDemo] = useState(false);
  const [showGroupIdDemo, setShowGroupIdDemo] = useState(false);
  const [showProofIdDemo, setShowProofIdDemo] = useState(false);

  const [assets, setAssets] = useState<AssetData[]>([]);

  
  const handleSubmitAsset = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");

    const validIds = assetIdFields.filter(id => id.trim() !== "");
    if (validIds.length >= 1) {
      let data;
      if (validIds.length === 1) {
        const response = await getAsset(validIds[0]);
        setAssets([response.result]);
      } else {
        const response = await getAssetBatch(validIds);
        setAssets(response.result); // Ensure `response.result` is the array of assets
      }
      setShowAssetIdDemo(true);
    }
  };
  const handleSubmitOwner = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");

    if (ownerIdField.trim() !== "") {
      await getAssetsByOwner(ownerIdField);
      setShowOwnerIdDemo(true);
    }
  };

  const handleSubmitAuthority = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");

    if (authorityIdField.trim() !== "") {
      await getAssetsByAuthority(authorityIdField);
      setShowAuthorityIdDemo(true);
    }
  };

  const handleSubmitCreator = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");

    if (creatorIdField.trim() !== "") {
      await getAssetsByCreator(creatorIdField);
      setShowCreatorIdDemo(true);
    }
  };

  const handleSubmitGroup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");

    if (groupKeyField.trim() !== "" && groupValueField.trim() !== "") {
      await getAssetsByGroup(groupKeyField, groupValueField);
      setShowGroupIdDemo(true);
    }
  };

  const handleSubmitProof = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");

    const validIds = proofIdFields.filter(id => id.trim() !== "");
    if (validIds.length >= 1) {
      if (validIds.length === 1) {
        await getAssetProof(validIds[0]);
      } else {
        await getAssetProofBatch(validIds);
        
      }
      setShowProofIdDemo(true);
    }
  };

  const handleAddInput = (fields: string[], setFields: React.Dispatch<React.SetStateAction<string[]>>) => {
    if (fields.length < 10) {
      setFields([...fields, ""]);
    }
  };

  return (
    <div className="max-w-[100rem] w-full mx-auto rounded-none md:rounded-3xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      {/* Asset Id Form */}
      <form className="my-8" onSubmit={handleSubmitAsset}>
        {assetIdFields.map((input, index) => (
          <LabelInputContainer className="mb-4" key={index}>
            <Label htmlFor={`assetId-${index}`}>Asset Id</Label>
            <Input
              id={`assetId-${index}`}
              value={input}
              onChange={(e) => {
                const newFields = [...assetIdFields];
                newFields[index] = e.target.value;
                setAssetIdFields(newFields);
              }}
              placeholder="F9Lw3ki3hJ7PF9HQXsBzoY8GyE6sPoEZZdXJBsTTD2rk"
              type="text"
            />
          </LabelInputContainer>
        ))}
        {assetIdFields.length < 10 && (
          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-1/3 text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] text-xs mb-1"
            type="button"
            onClick={() => handleAddInput(assetIdFields, setAssetIdFields)}
          >
            + Add more Ids
          </button>
        )}
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] text-xs"
          type="submit"
        >
          Query &rarr;
          <BottomGradient />
        </button>
        {showAssetIdDemo && assets.length > 0 && (
          <div className="grid grid-cols-1  gap-4">
            {assets.map((asset, index) => (
              <GlareCardAssets key={index} asset={asset} />
            ))}
          </div>
        )}
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>

      {/* Owner Id Form */}
      <form className="my-8" onSubmit={handleSubmitOwner}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="ownerId">Owner Id</Label>
          <Input
            id="ownerId"
            value={ownerIdField}
            onChange={(e) => setOwnerIdField(e.target.value)}
            placeholder="86xCnPeV69n6t3DnyGvkKobf9FdN2H9oiVDdaMpo2MMY"
            type="text"
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] text-xs"
          type="submit"
        >
          Query &rarr;
          <BottomGradient />
        </button>
        {showOwnerIdDemo && <GlareCardAssets asset={null} />}
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>

      {/* Authority Id Form */}
      <form className="my-8" onSubmit={handleSubmitAuthority}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="authorityId">Authority Id</Label>
          <Input
            id="authorityId"
            value={authorityIdField}
            onChange={(e) => setAuthorityIdField(e.target.value)}
            placeholder="86xCnPeV69n6t3DnyGvkKobf9FdN2H9oiVDdaMpo2MMY"
            type="text"
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] text-xs"
          type="submit"
        >
          Query &rarr;
          <BottomGradient />
        </button>
        {showAuthorityIdDemo && <GlareCardAssets asset={null} />}
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>

      {/* Creator Id Form */}
      <form className="my-8" onSubmit={handleSubmitCreator}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="creatorId">Creator Id</Label>
          <Input
            id="creatorId"
            value={creatorIdField}
            onChange={(e) => setCreatorIdField(e.target.value)}
            placeholder="D3XrkNZz6wx6cofot7Zohsf2KSsu2ArngNk8VqU9cTY3"
            type="text"
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] text-xs"
          type="submit"
        >
          Query &rarr;
          <BottomGradient />
        </button>
        {showCreatorIdDemo && <GlareCardAssets asset={null} />}
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>

      {/* Group Id Form */}
      <form className="my-8" onSubmit={handleSubmitGroup}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="groupKey">Group Key</Label>
          <Input
            id="groupKey"
            value={groupKeyField}
            onChange={(e) => setGroupKeyField(e.target.value)}
            placeholder="collection"
            type="text"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="groupValue">Group Value</Label>
          <Input
            id="groupValue"
            value={groupValueField}
            onChange={(e) => setGroupValueField(e.target.value)}
            placeholder="J1S9H3QjnRtBbbuD4HjPV6RpRhwuk4zKbxsnCHuTgh9w"
            type="text"
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] text-xs"
          type="submit"
        >
          Query &rarr;
          <BottomGradient />
        </button>
        {showGroupIdDemo && <GlareCardAssets asset={null} />}
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>

      {/* Proof Id Form */}
      <form className="my-8" onSubmit={handleSubmitProof}>
        {proofIdFields.map((input, index) => (
          <LabelInputContainer className="mb-4" key={index}>
            <Label htmlFor={`proofId-${index}`}>Asset Id (Get Proof)</Label>
            <Input
              id={`proofId-${index}`}
              value={input}
              onChange={(e) => {
                const newFields = [...proofIdFields];
                newFields[index] = e.target.value;
                setProofIdFields(newFields);
              }}
              placeholder="Bu1DEKeawy7txbnCEJE4BU3BKLXaNAKCYcHR4XhndGss"
              type="text"
            />
          </LabelInputContainer>
        ))}
        {proofIdFields.length < 10 && (
          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-1/3 text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] text-xs mb-1"
            type="button"
            onClick={() => handleAddInput(proofIdFields, setProofIdFields)}
          >
            + Add more Ids
          </button>
        )}
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] text-xs"
          type="submit"
        >
          Query &rarr;
          <BottomGradient />
        </button>
        {showProofIdDemo && <GlareCardAssets asset={null} />}
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
