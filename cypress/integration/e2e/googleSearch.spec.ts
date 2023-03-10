import * as mainPage from '../../support/pageSelectors/mainPage';

describe('Test basic function on the google page', () => {
  context('Google page is loaded', () => {
    beforeEach(() => {
      cy.visit('https://www.google.com/');
    });
    it('should type text into search field', () => {
      cy.isElementVisible(mainPage.acceptTermsAndConditionsButtonSelector);
      cy.clickElement(mainPage.acceptTermsAndConditionsButtonSelector);
      cy.isElementVisible(mainPage.inputSearchFieldSelector);
      cy.fillInInput(mainPage.inputSearchFieldSelector, 'test{enter}');
    });
  });
});
