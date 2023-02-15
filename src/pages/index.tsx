import HomePage from 'domains/Home/Home'
import { GetServerSideProps, NextPage } from 'next'
import type { GetMarketCoinListParams, MarketCoin } from 'domains/Home/index.d'
import { homeApi } from 'domains/Home/Home.services'
import { store } from 'store'

const MarketCoinData: GetMarketCoinListParams = {
  vs_currency: 'usd', // hard coded currency for now
  order: 'market_cap_desc',
  per_page: 250, // return 250 item for now, max number that supportted by api
  page: 1, // for testing lets go with first page and ignore pagination
  sparkline: false,
}

interface HomeProps {
  marketsList?: Array<MarketCoin>;
}

const Home: NextPage<HomeProps> = ({ marketsList }) => {
  return (
    <HomePage marketsList={marketsList} />
  )
}


export const getServerSideProps: GetServerSideProps = async (context) => {

  const { data: marketsList } = await store.dispatch(homeApi.endpoints.getMarketsList.initiate(MarketCoinData))

  return {
    props: {
      marketsList
    }
  }
}


export default Home