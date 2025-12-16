describe('iFrame',()=>{

  it('Deve poder tocar o vídeo de exemplo',()=>{
    cy.login()
    cy.contains('Video').click()

    cy.get('iframe[title="Video Player"]')
       .should('exist')
       .its('0.contentDocument.body') //obter propriedades dos elementos incluindo iframe
       .then(cy.wrap) //pegar um valor ou elemento e transforma em um objeto cypress
       .as('iFramePlayer')

    cy.get('@iFramePlayer')
        .find('.play-button')
        .click()
        
    cy.get('@iFramePlayer')
        .find('.pause-button')
        .should('be.visible')    
  })
})