import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import pugJs from "pug";
import { TemplateEngine } from '../../classes/engine.class.js';

export class Pug extends TemplateEngine {
  constructor(usersMock) {
    super(Pug.name, usersMock);
    this.setup();
  }

  setup() {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    this.view = pugJs.compileFile(join(__dirname, "views", "test-01.pug"));
  }

  async test01() {
    try {
      return this.view({ users: this.usersMock });
    } catch (error) {
      console.error(error);
    }
  }
}