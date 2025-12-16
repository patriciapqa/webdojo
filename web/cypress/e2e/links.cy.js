describe('Links abrindo nova guia/janela', () => {

  beforeEach(() => {
    cy.login()

  })


  it('Validadndo o atributo do link do Instagram', () => {

    //valida mas não clica. porque não é responsável por essa outra aba.
    cy.get('[data-cy="instagram-link"]')
      .should('have.attr', 'href', 'https://www.instagram.com/qapapito')
      .and('have.attr', 'target', '_blank')

  })
  //mesmo software porem em outra aba.
  it('Acessa link de termos de uso removendo o target blank', () => {

    cy.contains('Formulários').click()
    //valida e clica pra abrir na mesma aba porque é responsável pela outra aba também.
    cy.contains('a', 'termos de uso').click()
      .invoke('removeAttr', 'target')
      .click()
    cy.contains('Ao acessar e usar nossos serviços, você concorda em cumprir estes termos de uso. Se você não concordar com algum aspecto destes termos, não utilize nossos serviços.')
      .should('be.visible')
  })
})