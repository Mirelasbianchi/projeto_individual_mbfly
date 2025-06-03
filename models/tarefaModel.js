const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'planner_pilotos',
    password: 'mirela0',
    port: 5432,
});

// Teste de conexão inicial
pool.connect((err, client, release) => {
    if (err) {
        console.error('Erro ao conectar ao banco:', err.stack);
    } else {
        console.log('Conectado ao banco de dados com sucesso!');
        release();
    }
});

class TarefaModel {
    async criar(tarefa) {
        const { titulo, descricao, hora_inicio, hora_fim, prioridade } = tarefa;
        const query = `
            INSERT INTO tarefas (titulo, descricao, hora_inicio, hora_fim, prioridade)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *
        `;
        const values = [titulo, descricao, hora_inicio, hora_fim, prioridade];
        const result = await pool.query(query, values);
        return result.rows[0];
    }

    async listar() {
        try {
            const query = 'SELECT * FROM tarefas ORDER BY id';
            console.log('Executando query:', query);
            const result = await pool.query(query);
            console.log('Resultado:', result.rows);
            return result.rows;
        } catch (error) {
            console.error('Erro ao listar tarefas:', error);
            throw new Error(`Erro ao listar tarefas: ${error.message}`);
        }
    }

    async buscarPorId(id) {
        const query = 'SELECT * FROM tarefas WHERE id = $1';
        const result = await pool.query(query, [id]);
        return result.rows[0];
    }

    async atualizar(id, tarefa) {
        const { titulo, descricao, hora_inicio, hora_fim, prioridade } = tarefa;
        const query = `
            UPDATE tarefas 
            SET titulo = $1, descricao = $2, hora_inicio = $3, hora_fim = $4, prioridade = $5
            WHERE id = $6
            RETURNING *
        `;
        const values = [titulo, descricao, hora_inicio, hora_fim, prioridade, id];
        const result = await pool.query(query, values);
        return result.rows[0];
    }

    async excluir(id) {
        const query = 'DELETE FROM tarefas WHERE id = $1 RETURNING *';
        const result = await pool.query(query, [id]);
        return result.rows[0];
    }
}

module.exports = new TarefaModel(); 