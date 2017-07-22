import Node from './Node';

class ContentBlock extends Node {
  // define the label for the Node
  static label = 'ContentBlock';

  static unique = [
    'uuid',
  ];

  static required = [
    'uuid',
  ];

  static delete = (session, uuid) => ContentBlock.deleteBy(session, 'uuid', uuid);
  static get = (session, uuid) => ContentBlock.getBy(session, 'uuid', uuid);

  static connectToPage = (session, blockUUID, pageUUID) =>
    ContentBlock.createRelationFromTo(
      session,
      'ContentBlock', 'Page',
      'uuid', 'uuid',
      blockUUID, pageUUID,
      'blockOf',
    );
}

export default ContentBlock;
