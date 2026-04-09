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
const criarLivro = async ({ titulo, autor }) => {
  // Regra de negócio: título e autor são obrigatórios
  if (!titulo || !autor) {
    throw new Error('Título e autor são obrigatórios.');
  }
  const novoLivro = {
    id: acervo.length + 1,
    titulo,
    autor,
    disponivel: true,
  };
  acervo.push(novoLivro);
  return novoLivro;
};

module.exports = { listarTodosLivros, buscarLivroPorId, criarLivro };
