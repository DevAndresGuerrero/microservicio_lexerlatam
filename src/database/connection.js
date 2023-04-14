import { Sequelize } from 'sequelize';
import config from '../config/config.js';

const sequelize = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASS, {
  host: config.DB_HOST,
  dialect: config.DIALECT,
  port: config.DB_PORT,
});

export default sequelize;