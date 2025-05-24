const pool = require('../config/database');

// Criar um voo
exports.criarVoo = async (req, res) => {
  const { origem, destino, partida, chegada, tempo_voo, usuario_id } = req.body;

  const query = `
    INSERT INTO voos (origem, destino, partida, chegada, tempo_voo, usuario_id)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *`;
  const values = [origem, destino, partida, chegada, tempo_voo, usuario_id];

  try {
    const result = await pool.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Listar todos os voos
exports.listarVoos = async (req, res) => {
  const query = 'SELECT * FROM voos';

  try {
    const result = await pool.query(query);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Editar um voo
exports.editarVoo = async (req, res) => {
  const { id } = req.params;
  const { origem, destino, partida, chegada, tempo_voo, usuario_id } = req.body;

  const query = `
    UPDATE voos
    SET origem = $1, destino = $2, partida = $3, chegada = $4, tempo_voo = $5, usuario_id = $6
    WHERE id = $7
    RETURNING *`;
  const values = [origem, destino, partida, chegada, tempo_voo, usuario_id, id];

  try {
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Voo não encontrado' });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Excluir um voo
exports.excluirVoo = async (req, res) => {
  const { id } = req.params;

  const query = 'DELETE FROM voos WHERE id = $1 RETURNING *';
  const values = [id];

  try {
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Voo não encontrado' });
    }
    res.status(200).json({ message: 'Voo excluído com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
