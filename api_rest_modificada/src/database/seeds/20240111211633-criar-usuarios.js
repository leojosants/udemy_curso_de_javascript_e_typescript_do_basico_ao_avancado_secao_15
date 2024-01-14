// /** @type {import('sequelize-cli').Migration} */

// const bcryptjs = require('bcryptjs');

// module.exports = {
//   up: async (queryInterface) => queryInterface.bulkInsert(
//     'users',
//     [
//       {
//         nome: 'Luiz',
//         email: 'luiz@gmail.com',
//         password_hash: await bcryptjs.hash('123456', 8),
//         created_at: new Date(),
//         updated_at: new Date(),
//       },
//       {
//         nome: 'Luiz2',
//         email: 'luiz2@gmail.com',
//         password_hash: await bcryptjs.hash('123456', 8),
//         created_at: new Date(),
//         updated_at: new Date(),
//       },
//       {
//         nome: 'Luiz3',
//         email: 'luiz3@gmail.com',
//         password_hash: await bcryptjs.hash('123456', 8),
//         created_at: new Date(),
//         updated_at: new Date(),
//       },
//     ],
//     {},
//   ),

//   down: () => {
//   },
// };

const bcryptjs = require('bcryptjs');
const faker = require('faker');

module.exports = {
  up: async (queryInterface) => {
    const dummyJSON = [];

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 10; i++) {
      dummyJSON.push({
        nome: faker.name.firstName(),
        email: faker.internet.email(),
        // eslint-disable-next-line no-await-in-loop
        password_hash: await bcryptjs.hash(faker.internet.password(), 8),
        created_at: new Date(),
        updated_at: new Date(),
      });
    }
    await queryInterface.bulkInsert('users', dummyJSON, {});
  },

  down: async () => {
    // eslint-disable-next-line no-undef
    await queryInterface.bulkDelete('users', null, {});
  },
};
