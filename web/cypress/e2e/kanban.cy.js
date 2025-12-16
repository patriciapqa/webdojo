describe('kanban Board', () => {
  it('Deve mover uma tarefa de To do para Done e atualizar o board', () => {
    cy.login()
    cy.contains('Kanban').click()


    const dataTransfer = new DataTransfer()

    cy.contains('div[draggable=true]', 'Documentar API')
      .trigger('dragstart', { dataTransfer }) //simulando click e arraste

    cy.get('.column-done')
      .trigger('drop', { dataTransfer }) //simulando o drop 
      .find('h3')
      .should('have.text','Done (4)')

    cy.get('.column-done')  
      .should('include.text','Documentar API')
      .and('include.text','Criar documentação da API com Swagger')
  })
})