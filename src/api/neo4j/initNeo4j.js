import { getSession } from './dbUtils';
import Page from '../models/Page';
import ContentBlock from '../models/ContentBlock';

const models = [Page, ContentBlock];

const constraints = models.map((model) => {
  return model.initConstraints(getSession());
});
const requirements = process.env.NEO4J_ENTERPRISE ? models.map((model) => {
  return model.initRequirements(getSession());
}) : [];

Promise.all([...constraints, ...requirements]).then((result) => {
  console.log('finished constraint init:', result);
}).catch((err) => {
  console.log('constraint init error:', err);
});
