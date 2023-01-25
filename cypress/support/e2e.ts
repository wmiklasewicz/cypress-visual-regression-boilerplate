// Import commands.js using ES2015 syntax:
import './commands/selectorsCommands';
// Other imports
import 'cypress-wait-until';
import compareSnapshotCommand = require('cypress-image-diff-js/dist/command');
compareSnapshotCommand();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
after(() => {
  cy.task('generateReport');
});
