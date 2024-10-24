import { Edge as EdgeJs } from 'edge.js';
import { TemplateEngine } from '../../class/engine.class.js';

export class Edge extends TemplateEngine {
  constructor(usersMock) {
    super(Edge.name, usersMock);
    this.setup();
  }

  setup() {
    this.edge = EdgeJs.create();
    this.edge.mount(new URL('./views', import.meta.url));
  }

  async test01() {
    try {
      return await this.edge.render('test-01', { users: this.usersMock });
    } catch (error) {
      console.error(error);
    }
  }
}