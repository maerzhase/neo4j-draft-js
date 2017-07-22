import { v1 as neo4j } from 'neo4j-driver';
import env from '../../../dev/env';

const driver = neo4j.driver(process.env.NEO4J_HOST, neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASSWORD));

export const getSession = () => driver.session();

export const closeDriver = () => {
  driver.close();
};
