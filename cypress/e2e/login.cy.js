/// <reference types="cypress" />

describe('Login', () => {
    it('Login com sucesso', () => {
        cy.visit("https://automationpratice.com.br/login")
        cy.get('#user').type("eduardo2@gmail.com")
        cy.get('#password').type("123456")
        cy.get('#btnLogin').click()

        cy.get('#swal2-title').should("have.text","Login realizado")
    });

    it('Email inválido', () => {
        cy.visit("https://automationpratice.com.br/login")
        cy.get('#user').type("texto invalido")
        cy.get('#password').type("123456")
        cy.get('#btnLogin').click()
        
        cy.get('.invalid_input').should("have.text", "E-mail inválido.")
    });

    it('Senha inválida', () => {
        cy.visit("https://automationpratice.com.br/login")
        cy.get('#user').type("email@teste.com")
        cy.get('#password').type("123")
        cy.get('#btnLogin').click()
        
        cy.get('.invalid_input').should("have.text", "Senha inválida.") 
    });

    it('Campos vazios', () => {
        cy.visit("https://automationpratice.com.br/login")
        cy.get('#btnLogin').click()
        
        cy.get('.invalid_input').should("have.text", "E-mail inválido.")
    });
})