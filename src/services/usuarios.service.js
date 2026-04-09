// Simulando um banco de dados com um array em memória

const pool = require("../db/connection");

// Lista todos os usuarios
const listarTodosUsuarios = async () => {
  try{
    const resultado = await pool.query('SELECT * FROM usuarios ORDER BY id');
    return resultado.rows;
  }catch(error){
    console.error("Erro ao listar usuarios", error.message);
    throw error;
  }
};

// Criar um novo usuario
const criarUsuario = async ({ nome, email }) => {
  if (!nome || !email) {
    throw new Error('Nome e e-mail são obrigatórios.');
  }
  const novoUsuario = {
    id: usuarios.length + 1,
    nome,
    email,
  };
  usuarios.push(novoUsuario);
  return novoUsuario;
};

// Atualizar um usuário
const atualizarUsuario = async(usuario) =>{
  const id = usuario.id;
  usuarios[id] = usuario;

  return true;
}

module.exports = { listarTodosUsuarios, criarUsuario, atualizarUsuario };
