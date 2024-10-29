import { Test01 } from './dist/test-01.js';
import { TemplateEngine } from '../../classes/engine.class.js';
import { htmlDoc } from '../../utilities/html-doc.utility.js';

export class Solid extends TemplateEngine {
  constructor(usersMock) {
    super(Solid.name, usersMock);
  }

  async test01() {
    try {
      const body = Test01(this.usersMock).map((n) => n.t).join('');
      const html = htmlDoc(body);

      return html;
    } catch (error) {
      console.error(error);
    }
  }
}