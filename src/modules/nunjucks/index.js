import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import nunjucksJs from "nunjucks";
import { TemplateEngine } from '../../classes/engine.class.js';

export class Nunjucks extends TemplateEngine {
  constructor(usersMock) {
    super(Nunjucks.name, usersMock);
    this.setup();
  }

  setup() {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    this.nunjucks = nunjucksJs.configure(resolve(__dirname, 'views'), { autoescape: true });
  }

  async test01() {
    try {
      return this.nunjucks.render("test-01.njk", { users: this.usersMock });
    } catch (error) {
      console.error(error);
    }
  }
}