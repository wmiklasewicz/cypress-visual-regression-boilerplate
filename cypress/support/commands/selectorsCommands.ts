Cypress.Commands.add('isElementVisible', (element) => {
  return cy.get(element).should('be.visible');
});
Cypress.Commands.add('clickElement', (element) => {
  cy.get(element).click();
});
Cypress.Commands.add('fillInInput', (element, value) => {
  cy.get(element).type(value);
});
Cypress.Commands.add('urlContains', (url) => {
  cy.url().should('contain', url);
});
