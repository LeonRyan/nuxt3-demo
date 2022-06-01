interface CmcApiStatus {
  timestamp: Date,
  error_code: number,
  error_message: string,
  elapsed: number,
  credit_count: number
}

interface Quote {
  [key:string]: {
    price: number,
    volume_24h: number,
    volume_change_24h: number,
    percent_change_1h: number,
    percent_change_24h: number,
    percent_change_7d: number,
    market_cap: number,
    market_cap_dominance: number,
    fully_diluted_market_cap: number,
    last_updated: Date
  }
}

interface CoinData {
  data: {
    id: number,
    name: string,
    symbol: string,
    slug: string,
    cmc_rank: number,
    num_market_pairs: number,
    circulating_supply: number,
    total_supply: number,
    max_supply: number,
    last_updated: Date,
    date_added: Date,
    tags: string[],
    platform?: string,
    self_reported_circulating_supply?: number,
    self_reported_market_cap? : number,
    quote: Quote
  }[]
  status: CmcApiStatus
}

export default defineEventHandler(async(event):Promise<CoinData> => {
  const config = useRuntimeConfig();
  const { start, limit } = useQuery(event);
  
  return $fetch('cryptocurrency/listings/latest',
    {
      headers: { 'X-CMC_PRO_API_KEY': config.cmcApiKey },
      baseURL: config.public.cmcApiBase,
      params: { 
        start: start || 1, 
        limit: limit || 20, 
        cryptocurrency_type: 'coins', 
        aux: 'cmc_rank'  }
    }
  );
});