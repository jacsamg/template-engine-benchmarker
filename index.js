import autocannon from 'autocannon';
import { Edge } from './src/modules/edge/index.js';
import { Ejs } from './src/modules/ejs/index.js';
import { Eta } from './src/modules/eta/index.js';
import { Handlebars } from './src/modules/handlebars/index.js';
import { Inferno } from './src/modules/inferno/index.js';
import { Liquid } from './src/modules/liquid/index.js';
import { Nunjucks } from './src/modules/nunjucks/index.js';
import { Preact } from './src/modules/preact/index.js';
import { React } from './src/modules/react/index.js';
import { USERS_MOCK } from './src/mocks/users.mock.js';

(async () => {
  const engines = [
    // new Edge(USERS_MOCK),
    // new Ejs(USERS_MOCK),
    // new Eta(USERS_MOCK),
    // new Handlebars(USERS_MOCK),
    // new Inferno(USERS_MOCK),
    // new Liquid(USERS_MOCK),
    new Nunjucks(USERS_MOCK),
    // new Preact(USERS_MOCK),
    // new React(USERS_MOCK),
  ];

  for (const engine of engines) {
    const serverPort = 3000;
    const server = engine.server(serverPort);
    const result = await autocannon({
      url: `http://localhost:${serverPort}/test-01`,
      connections: 100,
      pipelining: 5,
      duration: 10
    });

    server.close();
    console.log(result.statusCodeStats);
  }
})();