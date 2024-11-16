describe('template spec', () => {
    it('passes', () => {
      cy.visit('/')
      let text = 'Teach Gia cypress'
      cy.get('input[placeholder="What are you doing today?"]').type(text)
      cy.get('.bi-send-plus').click()
      cy.get('input[type="checkbox"]').check()
    })
  })