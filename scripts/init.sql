-- Tabela de usuários (pilotos)
CREATE TABLE IF NOT EXISTS usuarios (
    id BIGSERIAL PRIMARY KEY,
    nome TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    tipo_licenca TEXT,
    horas_voo_totais INT DEFAULT 0,
    aeroporto_base TEXT
);

-- Tabela de tarefas
CREATE TABLE IF NOT EXISTS tarefas (
    id BIGSERIAL PRIMARY KEY,
    titulo TEXT NOT NULL,
    descricao TEXT,
    data DATE NOT NULL,
    hora_inicio TIME,
    hora_fim TIME,
    categoria TEXT, -- voo, descanso, pessoal, etc.
    prioridade TEXT,
    status TEXT DEFAULT 'pendente',
    usuario_id BIGINT REFERENCES usuarios(id) ON DELETE CASCADE
);

-- Tabela de voos
CREATE TABLE IF NOT EXISTS voos (
    id BIGSERIAL PRIMARY KEY,
    origem TEXT NOT NULL,
    destino TEXT NOT NULL,
    partida TIMESTAMP NOT NULL,
    chegada TIMESTAMP NOT NULL,
    tempo_voo INT, -- minutos
    usuario_id BIGINT REFERENCES usuarios(id) ON DELETE CASCADE
);

-- Tabela de pernoites
CREATE TABLE IF NOT EXISTS pernoites (
    id BIGSERIAL PRIMARY KEY,
    local TEXT NOT NULL,
    data DATE NOT NULL,
    duracao_noites INT DEFAULT 1,
    voo_id BIGINT REFERENCES voos(id) ON DELETE SET NULL,
    usuario_id BIGINT REFERENCES usuarios(id) ON DELETE CASCADE
);

-- Tabela de dias de folga
CREATE TABLE IF NOT EXISTS dias_folga (
    id BIGSERIAL PRIMARY KEY,
    data DATE NOT NULL,
    motivo TEXT,
    usuario_id BIGINT REFERENCES usuarios(id) ON DELETE CASCADE
);

-- Tabela de conexões entre voos
CREATE TABLE IF NOT EXISTS conexoes (
    id BIGSERIAL PRIMARY KEY,
    voo_id BIGINT REFERENCES voos(id) ON DELETE CASCADE,
    conectado_a BIGINT REFERENCES voos(id) ON DELETE CASCADE,
    tempo_conexao INT -- minutos
);
