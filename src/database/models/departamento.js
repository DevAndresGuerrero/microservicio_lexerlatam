import { DataTypes } from 'sequelize';
import sequelize from '../connection.js';

const Departamento = sequelize.define('departamento', {
  codigo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  presupuesto: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Departamento;