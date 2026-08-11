export type AssetOperationInput = {
  ticker: string;
  name: string;
  category: string;
  qty: number;
  price: number;
};

export type PortfolioAsset = {
  id: number;
  ticker: string;
  name: string;
  category: string;
  qty: number;
  avgPrice: number;
  currentPrice: number;
};
