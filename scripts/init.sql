CREATE TABLE IF NOT EXISTS tarefas (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descricao TEXT,
    hora_inicio TIME NOT NULL,
    hora_fim TIME NOT NULL,
    prioridade VARCHAR(50) NOT NULL CHECK (prioridade IN ('baixa', 'media', 'alta'))
);

CREATE TABLE IF NOT EXISTS checklist (
  id SERIAL PRIMARY KEY,
  titulo TEXT NOT NULL,
  marcado BOOLEAN DEFAULT false
);
