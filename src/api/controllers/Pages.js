import uuid from 'uuid';
import Page from '../models/Page';
import ContentBlock from '../models/ContentBlock';
import { getSession } from '../neo4j/dbUtils';

class Pages {
  static create(props) {
    const { blocks, ...pageProps } = props;
    // create the page
    return Page.create(getSession(), { ...pageProps, uuid: uuid.v1() }).then((pageResult) => {
      // construct a page from result
      const page = Page.fromResult(pageResult);
      return Promise.all(blocks.map(blockProps =>
        // create blocks
        ContentBlock.create(getSession(), { ...blockProps, uuid: uuid.v1() }).then((blockResult) => {
          const block = ContentBlock.fromResult(blockResult);
          // when block created connect to page and return block
          return ContentBlock.connectToPage(getSession(), block.uuid, page.uuid).then(() => block);
        }),
      // return page and block after creation
      )).then(result => [page, ...result]);
    });
  }

  static delete(uuid) {
    return Page.delete(getSession(), uuid);
  }

  static get(uuid) {
    return Page.get(getSession(), uuid);
  }
}

export default Pages;
