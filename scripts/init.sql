CREATE TABLE IF NOT EXISTS tarefas (
    id SERIAL PRIMARY KEY,
    titulo TEXT NOT NULL,
    descricao TEXT,
    hora_inicio TIME,
    hora_fim TIME,
    prioridade TEXT
);

CREATE TABLE IF NOT EXISTS checklist (
  id SERIAL PRIMARY KEY,
  titulo TEXT NOT NULL,
  marcado BOOLEAN DEFAULT false
);
