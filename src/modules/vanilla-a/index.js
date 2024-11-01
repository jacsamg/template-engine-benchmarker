import { Test01 } from './src/test-01.js';
import { TemplateEngine } from '../../classes/engine.class.js';

export class VanillaA extends TemplateEngine {
  constructor(usersMock) {
    super(VanillaA.name, usersMock);
  }

  async test01() {
    try {
      const html = Test01(this.usersMock);
      return html;
    } catch (error) {
      console.error(error);
    }
  }
}