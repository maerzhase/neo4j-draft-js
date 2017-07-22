import { v1 as neo4j } from 'neo4j-driver';

const uri = 'bolt://127.0.0.1:7687';
const user = 'neo4j';
const password = 'draft-js';
const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));

export const getSession = () => driver.session();

export const closeDriver = () => {
  driver.close();
};
