import autocannon from 'autocannon';
import { Edge } from './src/modules/edge/index.js';
import { Ejs } from './src/modules/ejs/index.js';
import { Eta } from './src/modules/eta/index.js';
import { Handlebars } from './src/modules/handlebars/index.js';
import { Inferno } from './src/modules/inferno/index.js';
import { Liquid } from './src/modules/liquid/index.js';
import { Nunjucks } from './src/modules/nunjucks/index.js';
import { Preact } from './src/modules/preact/index.js';
import { Pug } from './src/modules/pug/index.js';
import { React } from './src/modules/react/index.js';
import { Vue } from './src/modules/vue/index.js';
import { USERS_MOCK } from './src/mocks/users.mock.js';

(async () => {
  const engines = [
    Edge,
    Ejs,
    Eta,
    Handlebars,
    Inferno,
    Liquid,
    Nunjucks,
    Preact,
    Pug,
    React,
    Vue
  ].map(engine => new engine(USERS_MOCK));

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