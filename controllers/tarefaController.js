const pool = require('../config/database');

// Criar uma nova tarefa
exports.criarTarefa = async (req, res) => {
  const { titulo, descricao, data, hora_inicio, hora_fim, categoria, prioridade, usuario_id } = req.body;

  const query = `
    INSERT INTO tarefas (titulo, descricao, data, hora_inicio, hora_fim, categoria, prioridade, usuario_id)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING *`;
  const values = [titulo, descricao, data, hora_inicio, hora_fim, categoria, prioridade, usuario_id];

  try {
    const result = await pool.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Listar todas as tarefas
exports.listarTarefas = async (req, res) => {
  const query = 'SELECT * FROM tarefas ORDER BY data, hora_inicio';

  try {
    const result = await pool.query(query);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Buscar uma tarefa por ID
exports.buscarTarefaPorId = async (req, res) => {
  const { id } = req.params;

  const query = 'SELECT * FROM tarefas WHERE id = $1';
  const values = [id];

  try {
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Atualizar uma tarefa
exports.editarTarefa = async (req, res) => {
  const { id } = req.params;
  const { titulo, descricao, data, hora_inicio, hora_fim, categoria, prioridade, status } = req.body;

  const query = `
    UPDATE tarefas
    SET titulo = $1, descricao = $2, data = $3, hora_inicio = $4, hora_fim = $5, 
        categoria = $6, prioridade = $7, status = $8
    WHERE id = $9
    RETURNING *`;
  const values = [titulo, descricao, data, hora_inicio, hora_fim, categoria, prioridade, status, id];

  try {
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Deletar uma tarefa
exports.excluirTarefa = async (req, res) => {
  const { id } = req.params;

  const query = 'DELETE FROM tarefas WHERE id = $1 RETURNING *';
  const values = [id];

  try {
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }
    res.status(200).json({ message: 'Tarefa excluída com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Listar tarefas por usuário
exports.listarTarefasPorUsuario = async (req, res) => {
  const { usuario_id } = req.params;

  const query = 'SELECT * FROM tarefas WHERE usuario_id = $1 ORDER BY data, hora_inicio';
  const values = [usuario_id];

  try {
    const result = await pool.query(query, values);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};