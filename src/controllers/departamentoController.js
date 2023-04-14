import Departamento from '../database/models/departamento.js';

const departamentoController = {};

departamentoController.getAll = async (req, res) => {
  try {
    const departamentos = await Departamento.findAll();
    res.status(200).json({ departamentos });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error retrieving departamentos' });
  }
};

departamentoController.getOne = async (req, res) => {
  try {
    const { codigo } = req.params;
    const departamento = await Departamento.findOne({ where: { codigo } });

    if (!departamento) {
      return res.status(404).json({ message: 'Departamento not found' });
    }

    res.status(200).json({ departamento });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error retrieving departamento' });
  }
};

departamentoController.create = async (req, res) => {
  const { nombre, presupuesto } = req.body;

  try {
    const departamento = await Departamento.create({ nombre, presupuesto });
    res.status(201).json({ departamento });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error creating departamento' });
  }
};

departamentoController.update = async (req, res) => {
  const { codigo } = req.params;
  const { nombre, presupuesto } = req.body;

  try {
    const departamento = await Departamento.findOne({ where: { codigo } });

    if (!departamento) {
      return res.status(404).json({ message: 'Departamento not found' });
    }

    departamento.nombre = nombre;
    departamento.presupuesto = presupuesto;

    await departamento.save();

    res.status(200).json({ departamento });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error updating departamento' });
  }
};

departamentoController.destroy = async (req, res) => {
  const { codigo } = req.params;

  try {
    const departamento = await Departamento.findOne({ where: { codigo } });

    if (!departamento) {
      return res.status(404).json({ message: 'Departamento not found' });
    }

    await departamento.destroy();

    res.status(200).json({ message: 'Departamento deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error deleting departamento' });
  }
};

export default departamentoController;
