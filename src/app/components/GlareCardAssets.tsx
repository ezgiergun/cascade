import React from "react";
import { GlareCard } from "./ui/glare-card";
import { AssetData } from "../lib/types";

interface GlareCardAssetsProps {
  asset: AssetData;
}

export function GlareCardAssets({ asset }: GlareCardAssetsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 my-10">
      {/* First Card - Asset Image */}
      <GlareCard className="flex flex-col items-center justify-center relative w-full ">
        {asset?.content?.links?.image ? (
          <img
            className="h-full w-full absolute inset-0 object-cover"
            src={asset.content.links.image}
            alt={asset.content.metadata.name}
          />
        ) : (
          <div className="h-full w-full absolute inset-0 flex items-center justify-center bg-gray-300 text-gray-500">
            No Image
          </div>
        )}
      </GlareCard>

      {/* Second Card - Asset Metadata */}
      <GlareCard className="flex flex-col items-start justify-start p-6 text-xs w-full ">
        <h2 className="text-white my-2">{asset?.content?.metadata?.name || "Unknown Name"}</h2>
        <p className="font-normal text-base text-neutral-200 my-2">
          {asset?.content?.metadata?.description || "No Description"}
        </p>
        <div className="flex flex-col text-neutral-200">
          <span className="my-1">Symbol: {asset?.content?.metadata?.symbol || "-"}</span>
          <span className="my-1">Owner: {asset?.ownership?.owner || "-"}</span>
          <span className="my-1 ">Collection: {asset?.grouping[0]?.group_value || "-"}</span>
          <span className="my-1">Token Standard: {asset?.content?.metadata?.token_standard || "-"}</span>
          <span className="my-1">Interface: {asset?.interface || "-"}</span>
          <span className="my-1">Mutable: {asset?.mutable ? "Yes" : "No"}</span>
          <span className="my-1">Burnt: {asset?.burnt ? "Yes" : "No"}</span>
        </div>
        <h3 className="text-white text-lg my-1">Attributes</h3>
        <div className="flex flex-col text-neutral-200 space-y-1">
          {asset?.content?.metadata?.attributes?.map((attr, index) => (
            <div key={index}>
              <span className="my-1">{attr?.trait_type}: {attr?.value}</span>
            </div>
          )) || <span>No Attributes</span>}
        </div>
        <h3 className="text-white text-lg my-1">Authorities</h3>
        <div className="flex flex-col text-neutral-200 space-y-1">
          {asset.authorities?.map((auth, index) => (
            <div key={index} className="flex flex-col space-y-1">
              <span className="my-1">Address: {auth?.address}</span>
              <span className="my-1">Scopes: {auth?.scopes.join(", ")}</span>
            </div>
          )) || <span>No Authorities</span>}
        </div>
        <h3 className="text-white text-lg my-1">Compression</h3>
        <div className="flex flex-col text-neutral-200 space-y-1">
          <span className="my-1">Eligible: {asset?.compression?.eligible ? "Yes" : "No"}</span>
          <span className="my-1">Compressed: {asset?.compression?.compressed ? "Yes" : "No"}</span>
          {asset?.compression?.eligible && (
            <>
              <span className="my-1">Data Hash: {asset?.compression?.data_hash || '-'}</span>
              <span className="my-1">Creator Hash: {asset?.compression?.creator_hash || '-'}</span>
              <span className="my-1">Asset Hash: {asset?.compression?.asset_hash || '-'}</span>
              <span className="my-1">Tree: {asset?.compression?.tree || '-'}</span>
              <span className="my-1">Seq: {asset?.compression?.seq || '-'}</span>
              <span className="my-1">Leaf ID: {asset?.compression?.leaf_id || '-'}</span>
            </>
          )}
        </div>
      </GlareCard>

      {/* Third Card - Additional Asset Details */}
      <GlareCard className="flex flex-col items-start justify-start p-6 text-xs w-full ">
        <h3 className="text-white text-lg my-1">Royalty</h3>
        <div className="flex flex-col text-neutral-200 space-y-1">
          <span className="my-1">Royalty Model: {asset?.royalty?.royalty_model || "-"}</span>
          <span className="my-1">Percent: {asset?.royalty?.percent || "-"}</span>
          <span className="my-1">Basis Points: {asset?.royalty?.basis_points || "-"}</span>
          <span className="my-1">Primary Sale Happened: {asset?.royalty?.primary_sale_happened ? "Yes" : "No"}</span>
          <span className="my-1">Locked: {asset?.royalty?.locked ? "Yes" : "No"}</span>
        </div>

        <h3 className="text-white text-lg my-1">Creators</h3>
        <div className="flex flex-col text-neutral-200 space-y-1">
          {asset.creators?.map((creator, index) => (
            <div key={index}>
              <span className="my-1">Address: {creator?.address || "-"}</span>
              <span className="my-1">Share: {creator?.share || "-"}</span>
              <span className="my-1">Verified: {creator?.verified ? "Yes" : "No"}</span>
            </div>
          )) || <span>No Creators</span>}
        </div>

        <h3 className="text-white text-lg my-1">Supply</h3>
        <div className="flex flex-col text-neutral-200 space-y-1">
          <span className="my-1">Print Max Supply: {asset?.supply?.print_max_supply || "-"}</span>
          <span className="my-1">Print Current Supply: {asset?.supply?.print_current_supply || "-"}</span>
          <span className="my-1">Edition Nonce: {asset?.supply?.edition_nonce || "-"}</span>
        </div>

        <h3 className="text-white text-lg my-1">Token Info</h3>
        <div className="flex flex-col text-neutral-200 space-y-1">
          <span className="my-1">Supply: {asset?.token_info?.supply || "-"}</span>
          <span className="my-1">Decimals: {asset?.token_info?.decimals || "-"}</span>
          <span className="my-1">Token Program: {asset?.token_info?.token_program || "-"}</span>
          <span className="my-1">Mint Authority: {asset?.token_info?.mint_authority || "-"}</span>
          <span className="my-1">Freeze Authority: {asset?.token_info?.freeze_authority || "-"}</span>
        </div>
      </GlareCard>
    </div>
  );
}
