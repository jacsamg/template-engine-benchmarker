import { renderToStaticMarkup } from 'react-dom/server';
import { Test01 } from './dist/test-01.js';
import { TemplateEngine } from '../../classes/engine.class.js';
import { htmlDoc } from '../../utilities/html-doc.utility.js';

export class React extends TemplateEngine {
  constructor(usersMock) {
    super(React.name, usersMock);
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