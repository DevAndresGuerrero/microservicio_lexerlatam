import { DataTypes } from 'sequelize';
import sequelize from '../connection.js';
import Departamento from './departamento.js';

const Empleado = sequelize.define('empleado', {
  codigo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  nif: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellido1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellido2: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  codigo_departamento: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Departamento,
      key: 'codigo',
    },
  },
});

Empleado.belongsTo(Departamento, { foreignKey: 'codigo_departamento', as: 'departamento' });

export default Empleado;