import { test01 } from './dist/test-01.js';
import { USERS_MOCK } from '../../mocks/users.mock.js';

console.log(
  test01({ users: USERS_MOCK }).get()
);