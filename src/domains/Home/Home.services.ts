import { coinMarketUrl } from 'constants/urls'
import { createApi } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from 'utils/apiUtil'
import { convertToUrlString } from 'utils/helpers'
import { GetMarketCoinListParams, MarketCoin } from './index.d'


export const homeApi = createApi({
  reducerPath: 'assets',
  baseQuery: axiosBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: build => ({
    getMarketsList: build.query<Array<MarketCoin>, GetMarketCoinListParams>({
      query: (data) => ({
        url: `${coinMarketUrl}?${convertToUrlString(data)}`,
        method: 'GET'
      }),
    }),
  })
})

export const {
  useGetMarketsListQuery,
} = homeApi