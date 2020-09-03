// / <reference types="Cypress" />
describe('StorefrontAssets: Test add assets', () => {

    it('should log text in console', () => {
        cy.visit('/');

        Cypress.on("window:before:load", win => {
            cy.stub(win.console, "log", msg => {
                expect(msg).to.equal('Hello world!');
            });
        });
    });
});
