import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import { createSSRApp } from 'vue';
import { renderToString } from 'vue/server-renderer';
import { TemplateEngine } from '../../classes/engine.class.js';

export class Vue extends TemplateEngine {
  constructor(usersMock) {
    super(Vue.name, usersMock);
    this.setup();
  }

  setup() {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const template = readFileSync(join(__dirname, 'views', 'test-01.html'), 'utf8');
    this.view = (users) => createSSRApp({
      template,
      data: () => ({ users }),
    });
  }

  async test01() {
    try {
      return await renderToString(this.view(this.usersMock));
    } catch (error) {
      console.error(error);
    }
  }
}
