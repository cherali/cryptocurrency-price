import { ChangeEvent, FC, useState } from 'react'
import Table from 'components/basics/Table/Table'
import { Column } from 'components/basics/Table'
import Input from 'components/basics/Input/Input'
import type { GetMarketCoinListParams, HomePageProps, MarketCoin } from './index.d'
import { useGetMarketsListQuery } from './Home.services'
import { Asset, AssetName, SearchContainer, TableContainer } from './Home.styles'


const MarketCoinData: GetMarketCoinListParams = {
  vs_currency: 'usd', // hard coded currency for now
  order: 'market_cap_desc',
  per_page: 250, // return 250 item for now, max number that supportted by api
  page: 1, // for testing lets go with first page and ignore pagination
  sparkline: false,
}


const HomePage: FC<HomePageProps> = () => {
  const { data: marketsList, isFetching } = useGetMarketsListQuery(MarketCoinData)

  const [filter, setFilter] = useState<string>('')

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setFilter(evt.target.value)
  }

  const columns: Array<Column<MarketCoin>> = [
    {
      accessor: 'name',
      header: <SearchContainer>
        <Input
          startIcon={<span><img width={'20px'} alt='search' src='https://cdn-icons-png.flaticon.com/512/149/149852.png' /></span>}
          value={filter}
          onChange={handleChange}
          clearable
          placeholder='Filter by name'
        />
      </SearchContainer>,
      width: '15%',
      Cell: ({ name, symbol, image }) => {
        return <Asset>
          <img loading='lazy' alt='' width={35} height={35} src={image} />
          <AssetName>
            <span>{name}</span>
            <span>{symbol}</span>
          </AssetName>
        </Asset>
      },
    },
    {
      accessor: 'current_price',
      header: 'Price',
    },
    {
      accessor: 'market_cap',
      header: 'Market Cap',
    },
    {
      accessor: 'high_24h',
      header: 'High 24h',
    },
    {
      accessor: 'low_24h',
      header: 'Low 24h',
    },
    {
      accessor: 'price_change_24h',
      header: '24h Price Change',
    },

  ]

  const filteredData = filter ? marketsList?.filter(f => f.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0) : marketsList



  return (
    <main>
      <TableContainer>
        <Table<MarketCoin>
          columns={columns}
          data={filteredData}
          loading={isFetching}
          showTableNumber
          cellKey='id'
        />
      </TableContainer>
    </main>
  )
}

export default HomePage
