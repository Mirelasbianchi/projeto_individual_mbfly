const pool = require('../config/database');

// Criar dia de folga
exports.criarDiaFolga = async (req, res) => {
  const { data, motivo, usuario_id } = req.body;

  const query = `
    INSERT INTO dias_folga (data, motivo, usuario_id)
    VALUES ($1, $2, $3)
    RETURNING *`;
  const values = [data, motivo, usuario_id];

  try {
    const result = await pool.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Listar dias de folga
exports.listarDiasFolga = async (req, res) => {
  const query = 'SELECT * FROM dias_folga';

  try {
    const result = await pool.query(query);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Editar dia de folga
exports.editarDiaFolga = async (req, res) => {
  const { id } = req.params;
  const { data, motivo, usuario_id } = req.body;

  const query = `
    UPDATE dias_folga
    SET data = $1, motivo = $2, usuario_id = $3
    WHERE id = $4
    RETURNING *`;
  const values = [data, motivo, usuario_id, id];

  try {
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Dia de folga não encontrado' });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Excluir dia de folga
exports.excluirDiaFolga = async (req, res) => {
  const { id } = req.params;

  const query = 'DELETE FROM dias_folga WHERE id = $1 RETURNING *';
  const values = [id];

  try {
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Dia de folga não encontrado' });
    }
    res.status(200).json({ message: 'Dia de folga excluído com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
