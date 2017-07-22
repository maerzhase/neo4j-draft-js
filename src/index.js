import pages from './api/routes/pages';
import { closeDriver } from './api/neo4j/dbUtils';

const testPage = {
  uuid: '1',
};

pages.create(testPage).then((result) => {
  console.log('-->', result);
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
