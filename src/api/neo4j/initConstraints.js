import { getSession } from './dbUtils';
import Page from '../models/Page';

const models = [Page];

const all = models.map((model) => {
  console.log(model);
  model.initConstraints(getSession());
});

Promise.all(all).then((result) => {
  console.log('finished constraint init:', result);
}).catch((err) => {
  console.log('constraint init error:', err);
});
