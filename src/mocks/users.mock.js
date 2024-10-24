import { randomUUID } from 'node:crypto';

export const USERS_MOCK = (() => {
  const users = [];

  for (let i = 0; i < 100; i++) {
    users.push({
      id: randomUUID(),
      name: `User ${i}`,
      email: `user${i}@example.com`
    });
  }

  return users;
})();