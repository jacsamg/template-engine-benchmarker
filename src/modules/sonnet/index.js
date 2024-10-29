import { test01 } from './dist/test-01.js';
import { TemplateEngine } from '../../classes/engine.class.js';
import { htmlDoc } from '../../utilities/html-doc.utility.js';

export class Sonnet extends TemplateEngine {
  constructor(usersMock) {
    super(Sonnet.name, usersMock);
  }

  async test01() {
    try {
      const body = test01({ users: this.usersMock }).get();
      const html = htmlDoc(body);

      return html;
    } catch (error) {
      console.error(error);
    }
  }
}