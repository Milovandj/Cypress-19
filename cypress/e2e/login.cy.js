/// <reference types=“Cypress” /.

describe("login tests", () =>  {
    it("login with non-unregistered user", () => {
        cy.visit("https://gallery-app.vivifyideas.com/");
        cy.get("a[href='/login']").click();
        cy.get("#email").type("random@email.com");
        cy.get("#password").type("junior96");
        cy.get("button").click();
        cy.url().should("contain", "/login");

    

    });

    it("register without email adress provided", () => {
        cy.visit("https://gallery-app.vivifyideas.com/");
        cy.get("a[href='/login']").click();
        cy.get("#password").type("junior96");
        cy.get("button").click();
        cy.url().should("contain", "/login");

    });

    it("register without password provided" , () =>  {
        cy.visit("https://gallery-app.vivifyideas.com/");
        cy.get("a[href='/login']").click();
        cy.get("#email").type("djordje123@gmail.com");
        cy.get("button").click();
        cy.url().should("contain", "/login");
    })
   
   
   
   
    it("login with valid credentials", () => {
        cy.visit("https://gallery-app.vivifyideas.com/");
        //cy.get("a[href]")
        cy.get(".nav-link").eq(1).click();
        cy.get("#email").type("milovandjuric@gmail.com");
        cy.get("#password").type("junior96");
        cy.get("button").click();
    });
});

