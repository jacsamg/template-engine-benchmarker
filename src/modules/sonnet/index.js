import { test01 } from './dist/test-01.js';
import { TemplateEngine } from '../../classes/engine.class.js';
import { htmlDoc } from '../../utilities/html-doc.utility.js';

export class Sonnet extends TemplateEngine {
  constructor(usersMock) {
    super(Sonnet.name, usersMock);
  }

  async test01() {
    try {
      const html = test01({ users: this.usersMock }).get();

      return html;
    } catch (error) {
      console.error(error);
    }
  }
}