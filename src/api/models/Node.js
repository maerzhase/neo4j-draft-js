import { objectToCypher } from '../../utils/Cypher';

class Node {
  static initConstraints(session) {
    if (!this.constraints) return null;
    const all = this.constraints.map((constraint) => {
      const CYPHER = `CREATE CONSTRAINT ON (n:${this.label}) ASSERT n.${constraint} IS UNIQUE`;
      return session.run(CYPHER, {});
    });
    return Promise.all(all);
  }

  static create(session, props) {
    const propsString = objectToCypher(props);
    const CYPHER = `CREATE (n:${this.label} {${propsString}}) RETURN n`;
    return session.run(CYPHER, props).then((result) => {
      session.close();
      return result;
    });
  }

  static deleteBy(session, key, value) {
    const CYPHER = `MATCH (n:${this.label} {${key}:"${value}" }) DELETE n RETURN n`;
    return session.run(CYPHER, {}).then((result) => {
      session.close();
      return result;
    });
  }

  static getBy(session, key, value) {
    const CYPHER = `MATCH (n:${this.label} {${key}:"${value}" }) RETURN n`;
    return session.run(CYPHER, {}).then((result) => {
      session.close();
      return result;
    });
  }

}

export default Node;
