import pages from './api/routes/pages';
import { closeDriver } from './api/neo4j/dbUtils';
import testPage from './sample-data/draft-js-sample.js';

pages.create(testPage).then((result) => {
  console.log('-->', result);
}).catch((err) => {
  console.log('error: ', err);
});


const exitHandler = () => {
  console.log('closing driver on programm exit');
  closeDriver();
  process.exit(0);
};

process.on('SIGINT', () => { process.exit(0); });
process.on('exit', exitHandler);

process.once('SIGUSR2', () => {
  console.log('[nodemon] cleanup');
  closeDriver();
});
