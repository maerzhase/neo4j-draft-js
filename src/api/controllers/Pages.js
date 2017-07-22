import Page from '../models/Page';
import ContentBlock from '../models/ContentBlock';
import { getSession } from '../neo4j/dbUtils';

class Pages {
  static create(props) {
    const { blocks, ...pageProps } = props;
    const pagePromise = Page.create(getSession(), pageProps);
    const blockPromises = blocks.map(block => {
      console.log('--->', block);
      ContentBlock.create(getSession(), block);
    });
    Promise.all([...blockPromises, pagePromise]).then((result) => {
      const pages = result.filter(r => r.labels.indexOf('Page') > -1);
      const contentBlocks = result.filter(r => r.labels.indexOf('ContentBlock') > -1);
      contentBlocks.forEach((block) => {
        ContentBlock.connectToPage(getSession(), block.properties.uuid, pages[0].properties.uuid).then((result2) => {
        }).catch((err) => {
          console.log(err);
        });
      });
    });
    return pagePromise;
  }

  static delete(uuid) {
    return Page.delete(getSession(), uuid);
  }

  static get(uuid) {
    return Page.get(getSession(), uuid);
  }
}

export default Pages;
