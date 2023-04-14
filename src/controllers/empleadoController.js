import Empleado from '../database/models/empleado.js';
import Departamento from '../database/models/departamento.js';

const empleadoController = {};

empleadoController.getAll = async (req, res) => {
  try {
    const empleados = await Empleado.findAll({ include: { model: Departamento, as: 'departamento' } });
    res.status(200).json({ empleados });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error retrieving empleados' });
  }
};

empleadoController.getOne = async (req, res) => {
  try {
    const { codigo } = req.params;
    const empleado = await Empleado.findOne({ where: { codigo }, include: { model: Departamento, as: 'departamento' } });

    if (!empleado) {
      return res.status(404).json({ message: 'Empleado not found' });
    }

    res.status(200).json({ empleado });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error retrieving empleado' });
  }
};


empleadoController.create = async (req, res) => {
  const { nif, nombre, apellido1, apellido2, codigo_departamento } = req.body;

  try {
    const empleado = await Empleado.create({ nif, nombre, apellido1, apellido2, codigo_departamento });
    res.status(201).json({ empleado });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error creating empleado' });
  }
};

empleadoController.update = async (req, res) => {
  const { codigo } = req.params;
  const { nif, nombre, apellido1, apellido2, codigo_departamento } = req.body;

  try {
    const empleado = await Empleado.findOne({ where: { codigo } });

    if (!empleado) {
      return res.status(404).json({ message: 'Empleado not found' });
    }

    empleado.nif = nif;
    empleado.nombre = nombre;
    empleado.apellido1 = apellido1;
    empleado.apellido2 = apellido2;
    empleado.codigo_departamento = codigo_departamento;

    await empleado.save();

    res.status(200).json({ empleado });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error updating empleado' });
  }
};

empleadoController.destroy = async (req, res) => {
  const { codigo } = req.params;

  try {
    const empleado = await Empleado.findOne({ where: { codigo } });

    if (!empleado) {
      return res.status(404).json({ message: 'Empleado not found' });
    }

    await empleado.destroy();

    res.status(200).json({ message: 'Empleado deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error deleting empleado' });
  }
};

export default empleadoController;