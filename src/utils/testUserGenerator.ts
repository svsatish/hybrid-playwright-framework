import { faker } from '@faker-js/faker';

export function generateTestUser() {
  return {
    name: faker.person.firstName(),
    email: faker.internet.email({ provider: 'demo.com' }),
    password: faker.internet.password(), // static or use faker.internet.password()
  };
}
