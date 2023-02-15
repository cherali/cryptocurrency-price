export interface HomePageProps { 
  marketsList?: Array<MarketCoin>;
}

type MarketCoinOrderType =
  'gecko_desc' | 'gecko_asc' |
  'market_cap_desc' | 'market_cap_asc' | 'market_cap_desc' |
  'volume_asc' | 'volume_desc' |
  'id_asc' | 'id_desc'

type MarketCoinPriceChangePercentageType = '1h' | '24h' | '7d' | '14d' | '30d' | '200d' | '1y'


export interface MarketCoin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  roi: string | number | null;
  last_updated: string;
  price_change_percentage_1h_in_currency: number;
}

export interface GetMarketCoinListParams {
  vs_currency: string;
  ids?: string;
  category?: string;
  order?: MarketCoinOrderType;
  per_page?: number;
  page?: number;
  sparkline?: boolean;
  price_change_percentage?: MarketCoinPriceChangePercentageType;
}