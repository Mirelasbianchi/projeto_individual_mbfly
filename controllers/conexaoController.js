const pool = require('../config/database');

// Criar conexão
exports.criarConexao = async (req, res) => {
  const { voo_id, conectado_a, tempo_conexao } = req.body;

  const query = `
    INSERT INTO conexoes (voo_id, conectado_a, tempo_conexao)
    VALUES ($1, $2, $3)
    RETURNING *`;
  const values = [voo_id, conectado_a, tempo_conexao];

  try {
    const result = await pool.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Listar conexões
exports.listarConexoes = async (req, res) => {
  const query = 'SELECT * FROM conexoes';

  try {
    const result = await pool.query(query);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Editar conexão
exports.editarConexao = async (req, res) => {
  const { id } = req.params;
  const { voo_id, conectado_a, tempo_conexao } = req.body;

  const query = `
    UPDATE conexoes
    SET voo_id = $1, conectado_a = $2, tempo_conexao = $3
    WHERE id = $4
    RETURNING *`;
  const values = [voo_id, conectado_a, tempo_conexao, id];

  try {
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Conexão não encontrada' });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Excluir conexão
exports.excluirConexao = async (req, res) => {
  const { id } = req.params;

  const query = 'DELETE FROM conexoes WHERE id = $1 RETURNING *';
  const values = [id];

  try {
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Conexão não encontrada' });
    }
    res.status(200).json({ message: 'Conexão excluída com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
