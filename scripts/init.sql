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

CREATE TABLE usuarios (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  senha_hash TEXT NOT NULL,
  tipo_licenca TEXT,
  horas_voo_totais INTEGER DEFAULT 0,
  aeroporto_base TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
