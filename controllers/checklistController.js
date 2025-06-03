const pool = require('../config/database');

// Buscar todos os itens do checklist
const getChecklist = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM checklist ORDER BY id');
    res.json(result.rows);
  } catch (err) {
    console.error('Erro ao buscar checklist:', err);
    res.status(500).json({ erro: 'Erro ao buscar checklist' });
  }
};

// Atualizar o estado marcado/desmarcado de um item
const updateChecklistItem = async (req, res) => {
  const { id } = req.params;
  const { marcado } = req.body;

  try {
    const result = await pool.query(
      'UPDATE checklist SET marcado = $1 WHERE id = $2 RETURNING *',
      [marcado, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ erro: 'Item não encontrado' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error('Erro ao atualizar checklist:', err);
    res.status(500).json({ erro: 'Erro ao atualizar checklist' });
  }
};

module.exports = {
  getChecklist,
  updateChecklistItem
};
