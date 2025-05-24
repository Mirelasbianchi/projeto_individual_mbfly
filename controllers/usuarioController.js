const pool = require('../config/database');

// Criar um novo usuário
exports.criarUsuario = async (req, res) => {
  const { nome, email, tipo_licenca, horas_voo_totais, aeroporto_base } = req.body;

  const query = `
    INSERT INTO usuarios (nome, email, tipo_licenca, horas_voo_totais, aeroporto_base)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *`;
  const values = [nome, email, tipo_licenca, horas_voo_totais, aeroporto_base];

  try {
    const result = await pool.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Listar todos os usuários
exports.listarUsuarios = async (req, res) => {
  const query = 'SELECT * FROM usuarios';

  try {
    const result = await pool.query(query);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Buscar um usuário por ID
exports.buscarUsuarioPorId = async (req, res) => {
  const { id } = req.params;

  const query = 'SELECT * FROM usuarios WHERE id = $1';
  const values = [id];

  try {
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Editar um usuário
exports.editarUsuario = async (req, res) => {
  const { id } = req.params;
  const { nome, email, tipo_licenca, horas_voo_totais, aeroporto_base } = req.body;

  const query = `
    UPDATE usuarios
    SET nome = $1, email = $2, tipo_licenca = $3, horas_voo_totais = $4, aeroporto_base = $5
    WHERE id = $6
    RETURNING *`;
  const values = [nome, email, tipo_licenca, horas_voo_totais, aeroporto_base, id];

  try {
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Excluir um usuário
exports.excluirUsuario = async (req, res) => {
  const { id } = req.params;

  const query = 'DELETE FROM usuarios WHERE id = $1 RETURNING *';
  const values = [id];

  try {
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.status(200).json({ message: 'Usuário excluído com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
