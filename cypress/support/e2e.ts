import './commands';
import compareSnapshotCommand from 'cypress-image-diff-js/dist/command';

compareSnapshotCommand();

after(() => {
  cy.task('generateReport');
});
