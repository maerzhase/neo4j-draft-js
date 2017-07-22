import Pages from '../controllers/Pages';
import { getSession } from '../neo4j/dbUtils';

const pages = {
  create: page => Pages.create(page),
  delete: uuid => Pages.delete(uuid),
  get: uuid => Pages.get(uuid),
};

export default pages;
