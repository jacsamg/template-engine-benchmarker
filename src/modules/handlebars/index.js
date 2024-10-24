import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import HandlebarsJs from 'handlebars';
import { TemplateEngine } from '../../classes/engine.class.js';

export class Handlebars extends TemplateEngine {
  constructor(usersMock) {
    super(Handlebars.name, usersMock);
    this.setup();
  }

  setup() {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const template = readFileSync(join(__dirname, 'views', 'test-01.hbs'), 'utf8');
    this.view = HandlebarsJs.compile(template);
  }

  async test01() {
    try {
      return this.view({ users: this.usersMock });
    } catch (error) {
      console.error(error);
    }
  }
}