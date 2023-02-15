/**
 * ATTENTION: all the test below based on MarketCoinData default value in domains/Home/Home.tsx
 * if you change that config the tests may failed
 * if running app on diffrent port you may need to fix visit url
 * remember there is a limit on calling api (free plan) so if this test filed you may reach limit call per minute
 */

describe('Home page', () => {
  it('passes', () => {
    // visit localhost 3000
    cy.visit('localhost:3000')

    // get fist item on table -- with this config its bitcoin
    cy.get('tr:first-of-type td:first-of-type span span span').invoke('text').should('eq', 'Bitcoinbtc')

    // type into filter input
    cy.get('input').type('eth')

    // test if filtering works
    cy.get('tr:first-of-type td:first-of-type span span span').invoke('text').should('eq', 'Ethereumeth')

    // clear filter input
    cy.get('input').clear()

    // check if clear works fine
    cy.get('tr:first-of-type td:first-of-type span span span').invoke('text').should('eq', 'Bitcoinbtc')
  })
})