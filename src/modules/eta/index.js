import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { Eta as EtaJs } from "eta";
import { TemplateEngine } from '../../class/engine.class.js';

export class Eta extends TemplateEngine {
  constructor(usersMock) {
    super(Eta.name, usersMock);
    this.setup();
  }

  setup() {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    this.eta = new EtaJs({ views: join(__dirname, "views") });
  }

  async test01() {
    try {
      return this.eta.render("./test-01.eta", { users: this.usersMock });
    } catch (error) {
      console.error(error);
    }
  }
}