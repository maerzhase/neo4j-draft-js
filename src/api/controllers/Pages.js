import Page from '../models/Page';
import ContentBlock from '../models/ContentBlock';
import { getSession } from '../neo4j/dbUtils';

class Pages {
  static create(props) {
    const { blocks, ...pageProps } = props;
    return Page.create(getSession(), pageProps).then((page) => {
      return Promise.all(blocks.map(blockProps => {
        return ContentBlock.create(getSession(), blockProps).then((block) => {
          return ContentBlock.connectToPage(getSession(), block.uuid, page.uuid);
        });
      }));
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
