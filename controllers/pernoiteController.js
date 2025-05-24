const pool = require('../config/database');

// Criar pernoite
exports.criarPernoite = async (req, res) => {
  const { local, data, duracao_noites, voo_id, usuario_id } = req.body;

  const query = `
    INSERT INTO pernoites (local, data, duracao_noites, voo_id, usuario_id)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *`;
  const values = [local, data, duracao_noites, voo_id, usuario_id];

  try {
    const result = await pool.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Listar pernoites
exports.listarPernoites = async (req, res) => {
  const query = 'SELECT * FROM pernoites';

  try {
    const result = await pool.query(query);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Editar pernoite
exports.editarPernoite = async (req, res) => {
  const { id } = req.params;
  const { local, data, duracao_noites, voo_id, usuario_id } = req.body;

  const query = `
    UPDATE pernoites
    SET local = $1, data = $2, duracao_noites = $3, voo_id = $4, usuario_id = $5
    WHERE id = $6
    RETURNING *`;
  const values = [local, data, duracao_noites, voo_id, usuario_id, id];

  try {
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Pernoite não encontrada' });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Excluir pernoite
exports.excluirPernoite = async (req, res) => {
  const { id } = req.params;

  const query = 'DELETE FROM pernoites WHERE id = $1 RETURNING *';
  const values = [id];

  try {
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Pernoite não encontrada' });
    }
    res.status(200).json({ message: 'Pernoite excluída com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
