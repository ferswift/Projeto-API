let { instrutores, identificadorInstrutor } = require("../bancodedados");

function listarInstrutores(req, res) {
  return res.json(instrutores);
}

function obterInstrutor(req, res) {
  const { id } = req.params;

  const instrutor = instrutores.find((instrutor) => {
    return instrutor.id === Number(id);
  });

  if (!instrutor) {
    return res.status(404).json({ mensagem: "instrutor não encontrado" });
  }

  return res.status(200).json(instrutor);
}

function cadastrarInstrutor(req, res) {
  const { nome, email, status } = req.body;

  if (!nome) {
    return res.status(400).json({ mensagem: "Nome é obrigatório." });
  }

  if (!email) {
    return res.status(400).json({ mensagem: "Email é obrigatório." });
  }

  const instrutor = {
    id: identificadorInstrutor++,
    nome,
    email,
    status: status ?? true,
  };

  instrutores.push(instrutor);

  return res.status(201).json(instrutor);
}

function atualizarInstrutor(req, res) {
  const { id } = req.params;
  const { nome, email, status } = req.body;

  if (!nome) {
    return res.status(400).json({ mensagem: "Nome é obrigatório." });
  }

  if (!email) {
    return res.status(400).json({ mensagem: "Email é obrigatório." });
  }

  const instrutor = instrutores.find((instrutor) => {
    return instrutor.id === Number(id);
  });

  if (!instrutor) {
    return res.status(404).json({ mensagem: "instrutor não encontrado" });
  }

  instrutor.nome = nome;
  instrutor.email = email;
  instrutor.status = status;

  return res.status(204).send();
}

function atualizarStatusInstrutor(req, res) {
  const { id } = req.params;
  const { status } = req.body;

  const instrutor = instrutores.find((instrutor) => {
    return instrutor.id === Number(id);
  });

  if (!instrutor) {
    return res.status(404).json({ mensagem: "instrutor não encontrado" });
  }

  instrutor.status = status;

  return res.status(204).send();
}

function excluirInstrutor(req, res) {
  const { id } = req.params;

  const instrutor = instrutores.find((instrutor) => {
    return instrutor.id === Number(id);
  });

  if (!instrutor) {
    return res.status(404).json({ mensagem: "O instrutor não foi encontrado" });
  }

  instrutores = instrutores.filter((instrutor) => {
    return instrutor.id !== Number(id);
  });

  return res.status(204).send();
}

module.exports = {
  listarInstrutores,
  obterInstrutor,
  cadastrarInstrutor,
  atualizarInstrutor,
  atualizarStatusInstrutor,
  excluirInstrutor,
};
