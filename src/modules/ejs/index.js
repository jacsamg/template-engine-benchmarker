import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import ejs from 'ejs';
import { TemplateEngine } from '../../class/engine.class.js';

export class Ejs extends TemplateEngine {
  constructor(usersMock) {
    super(Ejs.name, usersMock);
    this.setup();
  }

  setup() {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const template = readFileSync(join(__dirname, 'views', 'test-01.html'), 'utf8');
    this.view = ejs.compile(template);
  }

  async test01() {
    try {
      return this.view({ users: this.usersMock });
    } catch (error) {
      console.error(error);
    }
  }
}