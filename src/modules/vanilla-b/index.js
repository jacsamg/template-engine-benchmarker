import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import { makeView, UserRowComponent } from './src/test-01.js';
import { TemplateEngine } from '../../classes/engine.class.js';

export class VanillaB extends TemplateEngine {
  constructor(usersMock) {
    super(VanillaB.name, usersMock);
    this.setup();
  }

  setup() {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const template = readFileSync(join(__dirname, 'src', 'test-01.html'), 'utf8');
    this.view = makeView(template);
  }

  async test01() {
    try {
      const html = this.view.render({
        users: this.usersMock,
        UserRowComponent
      });

      return html;
    } catch (error) {
      console.error(error);
    }
  }
}