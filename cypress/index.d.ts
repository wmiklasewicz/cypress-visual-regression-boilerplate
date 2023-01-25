/* eslint-disable @typescript-eslint/no-unused-vars */
/// <reference types="cypress" />
declare namespace Cypress {
  interface Chainable<Subject = any> {
    fillInInput(fieldName: string, fieldContent: string);
    isElementVisible(element: string);
    clickElement(element: string);
    urlContains(url: string);

  }
}
