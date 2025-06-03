const TarefaModel = require('../models/tarefaModel');

class TarefaController {
    async renderizarPagina(req, res) {
        try {
            console.log('Iniciando renderização da página...');
            const tarefas = await TarefaModel.listar();
            console.log('Tarefas obtidas:', tarefas);
            
            const data = new Date();
            const dia = String(data.getDate()).padStart(2, '0');
            const mes = String(data.getMonth() + 1).padStart(2, '0');
            const ano = data.getFullYear();
            const dataAtual = `${dia}/${mes}/${ano}`;
            
            res.render('tarefa', { dataAtual, tarefas });
        } catch (error) {
            console.error('Erro completo:', error);
            console.error('Stack trace:', error.stack);
            res.status(500).send(`Erro ao carregar tarefas: ${error.message}\n\nStack: ${error.stack}`);
        }
    }

    async listarTarefas(req, res) {
        try {
            const tarefas = await TarefaModel.listar();
            res.json(tarefas);
        } catch (error) {
            console.error('Erro ao listar tarefas:', error);
            res.status(500).json({ error: 'Erro ao listar tarefas' });
        }
    }

    async criarTarefa(req, res) {
        try {
            const novaTarefa = await TarefaModel.criar(req.body);
            res.status(201).json(novaTarefa);
        } catch (error) {
            console.error('Erro ao criar tarefa:', error);
            res.status(500).json({ error: 'Erro ao criar tarefa' });
        }
    }

    async buscarTarefaPorId(req, res) {
        try {
            const tarefa = await TarefaModel.buscarPorId(req.params.id);
            if (tarefa) {
                res.json(tarefa);
            } else {
                res.status(404).json({ error: 'Tarefa não encontrada' });
            }
        } catch (error) {
            console.error('Erro ao buscar tarefa:', error);
            res.status(500).json({ error: 'Erro ao buscar tarefa' });
        }
    }

    async atualizarTarefa(req, res) {
        try {
            const tarefa = await TarefaModel.atualizar(req.params.id, req.body);
            if (tarefa) {
                res.json(tarefa);
            } else {
                res.status(404).json({ error: 'Tarefa não encontrada' });
            }
        } catch (error) {
            console.error('Erro ao atualizar tarefa:', error);
            res.status(500).json({ error: 'Erro ao atualizar tarefa' });
        }
    }

    async excluirTarefa(req, res) {
        try {
            const tarefa = await TarefaModel.excluir(req.params.id);
            if (tarefa) {
                res.json({ message: 'Tarefa excluída com sucesso' });
            } else {
                res.status(404).json({ error: 'Tarefa não encontrada' });
            }
        } catch (error) {
            console.error('Erro ao excluir tarefa:', error);
            res.status(500).json({ error: 'Erro ao excluir tarefa' });
        }
    }
}

module.exports = new TarefaController();
