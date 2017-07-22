// import cypher from 'cypher-query';
import Node from './Node';

class Page extends Node {

  // define the label for the Node
  static label = 'Page';

  static unique = [
    'uuid',
  ];

  static required = [
    'uuid',
  ];

  static delete = (session, uuid) => Page.deleteBy(session, 'uuid', uuid);
  static get = (session, uuid) => Page.getBy(session, 'uuid', uuid);

}

export default Page;
