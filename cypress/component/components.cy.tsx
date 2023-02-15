import Input from 'components/basics/Input/Input'
import Loading from 'components/basics/Loading/Loading'
import ThemeProvider from 'providers/ThemeProvider/ThemeProvider'

describe('components test', () => {
  it('renders - <Loading />', () => {
    cy.mount(<Loading />)
  })

  it('renders - <Input />', () => {
    // mout input with theme provider
    let value = 'test'
    cy.mount(<ThemeProvider>
      <div id='i-1'>
        <Input value={value} onChange={() => { }} />
      </div>

      <div id='i-2'>
        <Input type='password' value={value} onChange={() => { }} />
      </div>
    </ThemeProvider>)

    cy.get('div#i-1 input').should('have.value', value).should('have.attr', 'type', 'input')
    cy.get('div#i-2 input').should('have.value', value).should('have.attr', 'type', 'password')
  })
})