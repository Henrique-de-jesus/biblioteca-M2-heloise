// Simulando um banco de dados com um array em memória

const pool = require("../db/connection");

// Lista todos os livros do acervo
const listarTodosLivros = async () => {
  try{
    const resultado = await pool.query('SELECT * FROM livros ORDER BY id');
    return resultado.rows;
  }catch(error){
    console.error("Erro ao listar livros", error.message);
    throw error;
  }
};

// Busca um livro específico pelo ID
const buscarLivroPorId = async (id) => {
  const resultado = await pool.query('SELECT * FROM livros WHERE id = $1', [id]);
  return resultado.rows[0] || null; // Retorna o primeiro resultado ou null se não encontrado
  // Regra de negócio: se não existe, retorna null.
  // O Controller decide o que fazer com o null.
};

// Criar um novo livro no acervo
const criarLivro = async ({ titulo, autor, ibsn, ano_publicacao, categoria_id }) => {
  // Regra de negócio: título e autor são obrigatórios
  try{
    const query =
      'INSERT INTO livros (titulo, autor, isbn, ano_publicacao, categoria_id) VALUES ($1, $2, $3, $4, $5) RETURNING *';
    const resultado = await pool.query([titulo, autor, isbn, ano_publicacao, categoria_id]);
    return resultado.rows[0];
  }catch(error){
    console.error("Erro ao criar livro", error.message);
    throw error;
  }
};

module.exports = { listarTodosLivros, buscarLivroPorId, criarLivro };
