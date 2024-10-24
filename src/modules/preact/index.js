import render from 'preact-render-to-string';
import { Test01 } from './dist/test-01.js';
import { TemplateEngine } from '../../classes/engine.class.js';
import { htmlDoc } from '../../utilities/html-doc.utility.js';

export class Preact extends TemplateEngine {
  constructor(usersMock) {
    super(Preact.name, usersMock);
  }

  async test01() {
    try {
      const body = render(Test01(this.usersMock));
      const html = htmlDoc(body);

      return html;
    } catch (error) {
      console.error(error);
    }
  }
}
