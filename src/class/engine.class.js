import { getServer } from '../utilities/server.utility.js';

export class TemplateEngine {
  constructor(name, usersMock) {
    if (new.target === TemplateEngine) {
      throw new Error("Cannot instantiate an abstract class.");
    }

    this.name = name;
    this.usersMock = usersMock;
  }

  server(serverPort) {
    return getServer(this.name, {
      test01: this.test01.bind(this)
    }, serverPort);
  }

  setup() {
    throw new Error("Abstract method must be implemented in derived class.");
  }

  test01() {
    throw new Error("Abstract method must be implemented in derived class.");
  }
}