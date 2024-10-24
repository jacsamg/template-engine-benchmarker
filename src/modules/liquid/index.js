import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { Liquid as LiquidJS } from 'liquidjs';
import { TemplateEngine } from '../../class/engine.class.js';

export class Liquid extends TemplateEngine {
  constructor(usersMock) {
    super(Liquid.name, usersMock);
    this.setup();
  }

  setup() {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    this.engine = new LiquidJS({
      root: resolve(__dirname, 'views'),
      extname: '.liquid'
    });
  }

  async test01() {
    try {
      return await this.engine.renderFile("test-01", { users: this.usersMock });
    } catch (error) {
      console.error(error);
    }
  }
}