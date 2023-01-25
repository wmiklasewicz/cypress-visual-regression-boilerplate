import { defineConfig } from 'cypress';
import * as fs from 'fs-extra';
const getCompareSnapshotsPlugin = require('cypress-image-diff-js/dist/plugin');

module.exports = defineConfig({
  viewportHeight: 900,
  viewportWidth: 1440,
  trashAssetsBeforeRuns: true,
  video: true,
  chromeWebSecurity: false,
  watchForFileChanges: false,
  defaultCommandTimeout: 9000,
  requestTimeout: 12000,
  e2e: {
    setupNodeEvents(on, config) {
      getCompareSnapshotsPlugin(on, config);
      on('task', {
        countFiles(folderName) {
          return new Promise((resolve, reject) => {
            fs.readdir(folderName, (err, files) => {
              if (err) {
                return reject(err);
              }
              resolve(files.length);
            });
          });
        },
      });
      on('task', {
        log(message) {
          console.log(message);
          return null;
        },
      });
    },
    specPattern: 'cypress/**/*.spec.ts',
  },
});
