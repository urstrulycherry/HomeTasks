import { Sequelize } from 'sequelize';

const DATABASE_NAME = 'Test';
const USER_NAME = 'postgres';
const PASSWORD = 'admin';

export const sequelize = new Sequelize(DATABASE_NAME, USER_NAME, PASSWORD, {
    host: 'localhost',
    dialect: 'postgres',
    logging: false
});
