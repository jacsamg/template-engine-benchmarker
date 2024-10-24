import { renderToStaticMarkup } from 'inferno-server';
import { Test01 } from './dist/test-01.js';
import { TemplateEngine } from '../../class/engine.class.js';
import { htmlDoc } from '../../utilities/html-doc.utility.js';

export class Inferno extends TemplateEngine {
  constructor(usersMock) {
    super(Inferno.name, usersMock);
  }

  async test01() {
    try {
      const body = renderToStaticMarkup(Test01(this.usersMock));
      const html = htmlDoc(body);

      return html;
    } catch (error) {
      console.error(error);
    }
  }
}