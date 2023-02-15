import styled from 'styled-components'

export const TableContainer = styled.div`
  margin: 1rem auto 0;
  table {
    tbody {
      td {
        padding: 1rem 1.5rem;
      }
    }
  }
  @media only screen and (min-width: 1200px){
    max-width: 1200px;
  }
`


export const SearchContainer = styled.span`
  width: 250px;
  display: block;
  margin-top: -5px;
`

export const Asset = styled.span`
  display: inline-flex;
  gap: 8px;
  align-items: center;
`

export const AssetName = styled.span`
  display: inline-flex;
  gap: 4px;
  line-height: 32px;
  span {
    display: block;
    :nth-of-type(2){
      font-size: 12px;
      text-transform: uppercase;
      color: ${({ theme }) => theme.pallete.white.darkest};
    }
  }
`