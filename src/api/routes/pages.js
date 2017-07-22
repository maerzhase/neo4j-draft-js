import Page from '../models/Page';
import { getSession } from '../neo4j/dbUtils';

const pages = {
  create: page => Page.create(getSession(), page),
  delete: uuid => Page.delete(getSession(), uuid),
  get: uuid => Page.get(getSession(), uuid),
};

export default pages;
