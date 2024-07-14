export type AssetResponse = {
  jsonrpc: string;
  result: AssetData;
};

export type AssetBatchResponse = {
  jsonrpc: string;
  result: AssetData[];
};

export type AssetData = {
  interface: string;
  id: string;
  content: {
    $schema: string;
    json_uri: string;
    files: Array<{
      uri: string;
      cdn_uri: string;
      mime: string;
    }>;
    metadata: {
      attributes: Array<{
        value: string;
        trait_type: string;
      }>;
      description: string;
      name: string;
      symbol: string;
      token_standard: string;
    };
    links: {
      image: string;
      external_url: string;
    };
  };
  authorities: Array<{ address: string; scopes: string[] }>;
  compression: {
    eligible: boolean;
    compressed: boolean;
    data_hash: string;
    creator_hash: string;
    asset_hash: string;
    tree: string;
    seq: number;
    leaf_id: number;
  };
  grouping: Array<{ group_key: string; group_value: string }>;
  royalty: {
    royalty_model: string;
    target: string | null;
    percent: number;
    basis_points: number;
    primary_sale_happened: boolean;
    locked: boolean;
  };
  creators: Array<{ address: string; share: number; verified: boolean }>;
  ownership: {
    frozen: boolean;
    delegated: boolean;
    delegate: string | null;
    ownership_model: string;
    owner: string;
  };
  supply: {
    print_max_supply: number;
    print_current_supply: number;
    edition_nonce: number;
  };
  mutable: boolean;
  burnt: boolean;
  token_info: {
    supply: number;
    decimals: number;
    token_program: string;
    mint_authority: string;
    freeze_authority: string;
  };
};
