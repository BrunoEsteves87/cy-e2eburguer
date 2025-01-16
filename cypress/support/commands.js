Cypress.Commands.add('acessarHome', () => {
    cy.visit('/')
    cy.url().should('include', '/')
    cy.contains('h1', 'Faça seu login')

})

Cypress.Commands.add('preencherFormLogin', (email, password) => {
    cy.get('#email').type(email)
    cy.get('#password').type(password)

})

Cypress.Commands.add('submitBtn', (textoBtn) => {
    cy.contains('button[type=submit]', textoBtn)
        .click();

})

Cypress.Commands.add('verificarMsgToast', (msnEsperada) => {
    cy.get('.Toastify__toast-body')
        .should('be.visible')
        .and('have.text', msnEsperada)


})

Cypress.Commands.add('verificarMsgErro', (msnEsperada) => {
    cy.get('[class^="home_errorText"]')
        .should('be.visible')
        .and('contain.text', msnEsperada)
        .and('have.css', 'color', 'rgb(230, 57, 70)');
});





