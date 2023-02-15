# Currency Price
Using NextJs to show list of crypto markets using `coingecko` api

## Build with
+ NextJs
+ Typescript
+ Styled-components
+ Axios
+ Redux-toolkit
+ React-toastify
+ Cypress


## Note that
+ Qoute hard coded to `usd`, but actually this must be a select-box and to user be able to select one of the available currencies, due to time restrictions this feature ignored.
+ For this sample I get 250 first page and render it directly into page, it's better to consider pagination but due api limitation of not returning paging info can't add this, for now we can use react-window to optimaze rendering 250 item in page but this is unnecessary step and implementation ignored.
+ Using cypress for unit, integration and e2e testing.
+ Using image to show search icon, this can be replaced by Icon component (implementation required).

## Install Packages
```bash
npm install
``` 
or

```bash
yarn
```

## Run Tests
```bash
npm run cypress

// or using yarn
yarn cypress
```

## Run - Development
```bash
npm run dev

// or using yarn
yarn dev
```

## Build
```bash
npm run build

// or using yarn
yarn build
``` 

## Run - Production
```bash
npm run build
npn run start

// or using yarn
yarn build
yarn start
```