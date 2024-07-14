import { AssetBatchResponse, AssetResponse } from "../lib/types";

const url = `https://mainnet.helius-rpc.com/?api-key=485c7761-5713-474c-8360-8b47db129d8f`

const getAsset = async (id: string): Promise<AssetResponse> => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      id: 'usdc-id',
      method: 'getAsset',
      params: {
        id,
        displayOptions: {
          showFungible: true,
        },
      },
    }),
  });
  const result: AssetResponse = await response.json();
  console.log("Asset: ", JSON.stringify(result, undefined, 4));
  return result;
};

const getAssetBatch = async (ids: string[]): Promise<AssetBatchResponse> => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      id: 'my-id',
      method: 'getAssetBatch',
      params: {
        ids,
      },
    }),
  });
  const result: AssetBatchResponse = await response.json();
  console.log("Asset: ", JSON.stringify(result, undefined, 4));
  return result;
};
const getAssetsByOwner = async (id: string) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      id: 'my-id',
      method: 'getAssetsByOwner',
      params: {
        id,
        page: 1, // Starts at 1
        limit: 1000,
        displayOptions: {
          showFungible: true, // return both fungible and non-fungible tokens
        },
      },
    }),
  });
}

const getAssetProof = async (id: string) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      id: 'my-id',
      method: 'getAssetProof',
      params: {
        id,
      },
    }),
  });
  const { result } = await response.json();
  console.log("Asset Proof: ", result);
};

const getAssetProofBatch = async (ids: string[]) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      id: 'my-id',
      method: 'getAssetProofBatch',
      params: {
        ids,
      },
    }),
  });
  const { result } = await response.json();
  console.log("Asset Proofs: ", result);
};
const getAssetsByAuthority = async (id: string) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 'my-id',
        method: 'getAssetsByAuthority',
        params: {
          authorityAddress: id,
          page: 1, // Starts at 1
          limit: 1000
        },
      }),
    });
    const { result } = await response.json();
    console.log("Assets by Authority: ", result.items);
};

const getAssetsByCreator = async (id: string) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      id: 'my-id',
      method: 'getAssetsByCreator',
      params: {
        id,
        onlyVerified: true,
        page: 1, // Starts at 1
        limit: 1000,
      },
    }),
  });
  const { result } = await response.json();
  console.log("Assets by Creator: ", result.items);
};

const getAssetsByGroup = async (groupKey: string, groupValue: string) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      id: 'my-id',
      method: 'getAssetsByGroup',
      params: {
        groupKey,
        groupValue,
        page: 1, // Starts at 1
        limit: 1000,
      },
    }),
  });
  const { result } = await response.json();
  console.log("Assets by Group: ", result.items);
};


export {getAsset, getAssetBatch, getAssetProof, getAssetProofBatch, getAssetsByAuthority, getAssetsByCreator, getAssetsByGroup, getAssetsByOwner}