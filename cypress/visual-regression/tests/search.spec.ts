import * as mainPage from '../../support/pageSelectors/mainPage';

describe(
  'Visual regression for main google page', () => {
    context('User is one the google page and term & conditions modal is closed', () => {
      beforeEach(() => {
        cy.visit('https://www.google.com/');
        cy.isElementVisible(mainPage.acceptTermsAndConditionsButtonSelector);
        cy.clickElement(mainPage.acceptTermsAndConditionsButtonSelector);
      });
      it('should compare search input field', () => {
        cy.isElementVisible(mainPage.inputSearchFieldSelector);
        cy.get(mainPage.inputSearchFieldSelector).compareSnapshot(
          'google-search-field',
          0.2
        );
      });
    });
  }
);

