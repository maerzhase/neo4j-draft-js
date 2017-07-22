import { objectKeysToCypher } from '../../utils/Cypher';
import { runSession } from '../neo4j/dbUtils';

class Node {

  static fromResult(result) {
    return new this(result.records[0].get('n').properties);
  }

  static initConstraints(session) {
    if (!this.unique) return null;
    const all = this.unique.map((constraint) => {
      const CYPHER = `CREATE CONSTRAINT ON (n:${this.label}) ASSERT n.${constraint} IS UNIQUE`;
      return session.run(CYPHER, {});
    });
    return Promise.all(all);
  }

  static initRequirements(session) {
    if (!this.required) return null;
    const all = this.required.map((constraint) => {
      const CYPHER = `CREATE CONSTRAINT ON (n:${this.label}) ASSERT exists(n.${constraint})`;
      return session.run(CYPHER, {});
    });
    return Promise.all(all);
  }

  static create(session, props) {
    const keysString = objectKeysToCypher(props);
    const CYPHER = `
      CREATE (n:${this.label} {${keysString}})
      RETURN n`;
    return runSession(session, CYPHER, props).then((result) => {
      return result;
    });
  }

  static deleteBy(session, key, value) {
    const CYPHER = `
      MATCH (n:${this.label} {${key}:"${value}" })
      DELETE n`;
    return runSession(session, CYPHER, {}).then((result) => {
      return result;
    });
  }

  static getBy(session, key, value) {
    const CYPHER = `MATCH (n:${this.label} {${key}:"${value}" }) RETURN n`;
    return runSession(session, CYPHER, {}).then((result) => {
      return result;
    });
  }

  static createRelationFromTo(session, labelA, labelB, keyA, keyB, a, b, relation) {
    const CYPHER = `
      MATCH (n:${labelA}),(b:${labelB})
      WHERE n.${keyA} = '${a}' AND b.${keyB} = '${b}'
      CREATE (n)-[r:${relation}]->(b)
      RETURN n`;
    return runSession(session, CYPHER, {}).then((result) => {
      return result;
    });
  }

  constructor(data) {
    Object.keys(data).forEach(key => this[key] = data[key]);
  }

}

export default Node;
