import Page from '../model/nodes/Page';

class Api {
  constructor(driver) {
    this.Page = new Page(driver);
  }
}

const API = new Api();
export default API;
