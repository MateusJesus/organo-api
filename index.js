const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();
const PORT = 3030;

app.use(cors());
app.use(express.json());

app.get("/colaboradores", (req, res) => {
  res.send({
    colaboradores: [
      {
        favorito: false,
        id: "a1d2b3c4-0001-0001-0001-000000000001",
        nome: "João Silva",
        cargo: "Desenvolvedor Backend",
        imagem: "https://randomuser.me/api/portraits/men/1.jpg",
        time: "faa6dd47-7697-45a5-91b7-987b30577f03",
      },
      {
        favorito: false,
        id: "a1d2b3c4-0001-0001-0001-000000000002",
        nome: "Maria Oliveira",
        cargo: "Analista de Sistemas",
        imagem: "https://randomuser.me/api/portraits/women/1.jpg",
        time: "faa6dd47-7697-45a5-91b7-987b30577f03",
      },
      {
        favorito: false,
        id: "a1d2b3c4-0001-0001-0001-000000000003",
        nome: "Carlos Lima",
        cargo: "Programador",
        imagem: "https://randomuser.me/api/portraits/men/2.jpg",
        time: "faa6dd47-7697-45a5-91b7-987b30577f03",
      },
      {
        favorito: false,
        id: "a1d2b3c4-0001-0001-0001-000000000004",
        nome: "Ana Souza",
        cargo: "Engenheira de Software",
        imagem: "https://randomuser.me/api/portraits/women/2.jpg",
        time: "faa6dd47-7697-45a5-91b7-987b30577f03",
      },
      {
        favorito: false,
        id: "a1d2b3c4-0001-0001-0001-000000000005",
        nome: "Lucas Santos",
        cargo: "Desenvolvedor Fullstack",
        imagem: "https://randomuser.me/api/portraits/men/3.jpg",
        time: "faa6dd47-7697-45a5-91b7-987b30577f03",
      },
      {
        favorito: false,
        id: "a1d2b3c4-0002-0002-0002-000000000001",
        nome: "Fernanda Mendes",
        cargo: "Desenvolvedora Frontend",
        imagem: "https://randomuser.me/api/portraits/women/3.jpg",
        time: "ac4e9b0a-3649-44fd-9dcd-9437b426b4e3",
      },
      {
        favorito: false,
        id: "a1d2b3c4-0002-0002-0002-000000000002",
        nome: "Roberto Farias",
        cargo: "UI Designer",
        imagem: "https://randomuser.me/api/portraits/men/4.jpg",
        time: "ac4e9b0a-3649-44fd-9dcd-9437b426b4e3",
      },
      {
        favorito: false,
        id: "a1d2b3c4-0002-0002-0002-000000000003",
        nome: "Beatriz Rocha",
        cargo: "UX Designer",
        imagem: "https://randomuser.me/api/portraits/women/4.jpg",
        time: "ac4e9b0a-3649-44fd-9dcd-9437b426b4e3",
      },
      {
        favorito: false,
        id: "a1d2b3c4-0002-0002-0002-000000000004",
        nome: "Gustavo Almeida",
        cargo: "Analista de Interface",
        imagem: "https://randomuser.me/api/portraits/men/5.jpg",
        time: "ac4e9b0a-3649-44fd-9dcd-9437b426b4e3",
      },
      {
        favorito: false,
        id: "a1d2b3c4-0002-0002-0002-000000000005",
        nome: "Luiza Martins",
        cargo: "Frontend Developer",
        imagem: "https://randomuser.me/api/portraits/women/5.jpg",
        time: "ac4e9b0a-3649-44fd-9dcd-9437b426b4e3",
      },
      {
        favorito: false,
        id: "a1d2b3c4-0003-0003-0003-000000000001",
        nome: "Marcos Teixeira",
        cargo: "Cientista de Dados",
        imagem: "https://randomuser.me/api/portraits/men/6.jpg",
        time: "67ed8a1f-82f6-4a41-ad2a-4b5caf292c0e",
      },
      {
        favorito: false,
        id: "a1d2b3c4-0003-0003-0003-000000000002",
        nome: "Juliana Fernandes",
        cargo: "Analista de Dados",
        imagem: "https://randomuser.me/api/portraits/women/6.jpg",
        time: "67ed8a1f-82f6-4a41-ad2a-4b5caf292c0e",
      },
      {
        favorito: false,
        id: "a1d2b3c4-0003-0003-0003-000000000003",
        nome: "Victor Correia",
        cargo: "Engenheiro de Dados",
        imagem: "https://randomuser.me/api/portraits/men/7.jpg",
        time: "67ed8a1f-82f6-4a41-ad2a-4b5caf292c0e",
      },
      {
        favorito: false,
        id: "a1d2b3c4-0003-0003-0003-000000000004",
        nome: "Carolina Xavier",
        cargo: "Especialista em Machine Learning",
        imagem: "https://randomuser.me/api/portraits/women/7.jpg",
        time: "67ed8a1f-82f6-4a41-ad2a-4b5caf292c0e",
      },
      {
        favorito: false,
        id: "a1d2b3c4-0003-0003-0003-000000000005",
        nome: "Fábio Castro",
        cargo: "Analista de Business Intelligence",
        imagem: "https://randomuser.me/api/portraits/men/8.jpg",
        time: "67ed8a1f-82f6-4a41-ad2a-4b5caf292c0e",
      },
      {
        favorito: false,
        id: "a1d2b3c4-0004-0004-0004-000000000001",
        nome: "Gabriel Vieira",
        cargo: "DevOps Engineer",
        imagem: "https://randomuser.me/api/portraits/men/9.jpg",
        time: "04a34845-bc70-4dc3-88ce-8f7bbe02bfcf",
      },
      {
        favorito: false,
        id: "a1d2b3c4-0004-0004-0004-000000000002",
        nome: "Alice Gomes",
        cargo: "Especialista em Infraestrutura",
        imagem: "https://randomuser.me/api/portraits/women/8.jpg",
        time: "04a34845-bc70-4dc3-88ce-8f7bbe02bfcf",
      },
      {
        favorito: false,
        id: "a1d2b3c4-0004-0004-0004-000000000003",
        nome: "Henrique Souza",
        cargo: "Analista de Redes",
        imagem: "https://randomuser.me/api/portraits/men/10.jpg",
        time: "04a34845-bc70-4dc3-88ce-8f7bbe02bfcf",
      },
      {
        favorito: false,
        id: "a1d2b3c4-0004-0004-0004-000000000004",
        nome: "Juliana Pereira",
        cargo: "DevOps Sênior",
        imagem: "https://randomuser.me/api/portraits/women/9.jpg",
        time: "04a34845-bc70-4dc3-88ce-8f7bbe02bfcf",
      },
      {
        favorito: false,
        id: "a1d2b3c4-0004-0004-0004-000000000005",
        nome: "Renato Lima",
        cargo: "Administrador de Sistemas",
        imagem: "https://randomuser.me/api/portraits/men/11.jpg",
        time: "04a34845-bc70-4dc3-88ce-8f7bbe02bfcf",
      },
      {
        favorito: false,
        id: "a1d2b3c4-0005-0005-0005-000000000001",
        nome: "Bianca Reis",
        cargo: "Designer de Interface",
        imagem: "https://randomuser.me/api/portraits/women/10.jpg",
        time: "78fc9f10-0d11-4918-9308-c8e3199a5cd3",
      },
      {
        favorito: false,
        id: "a1d2b3c4-0005-0005-0005-000000000002",
        nome: "Diego Ferreira",
        cargo: "Especialista em Experiência do Usuário",
        imagem: "https://randomuser.me/api/portraits/men/12.jpg",
        time: "78fc9f10-0d11-4918-9308-c8e3199a5cd3",
      },
      {
        favorito: false,
        id: "a1d2b3c4-0005-0005-0005-000000000003",
        nome: "Camila Almeida",
        cargo: "UX Researcher",
        imagem: "https://randomuser.me/api/portraits/women/11.jpg",
        time: "78fc9f10-0d11-4918-9308-c8e3199a5cd3",
      },
      {
        favorito: false,
        id: "a1d2b3c4-0005-0005-0005-000000000004",
        nome: "Eduardo Campos",
        cargo: "UI/UX Designer",
        imagem: "https://randomuser.me/api/portraits/men/13.jpg",
        time: "78fc9f10-0d11-4918-9308-c8e3199a5cd3",
      },
      {
        favorito: false,
        id: "a1d2b3c4-0005-0005-0005-000000000005",
        nome: "Larissa Rodrigues",
        cargo: "Estratégia de Design",
        imagem: "https://randomuser.me/api/portraits/women/12.jpg",
        time: "78fc9f10-0d11-4918-9308-c8e3199a5cd3",
      },
      {
        favorito: false,
        id: "a1d2b3c4-0006-0006-0006-000000000001",
        nome: "Rafael Martins",
        cargo: "Desenvolvedor Mobile",
        imagem: "https://randomuser.me/api/portraits/men/14.jpg",
        time: "0bdf7b1e-d17e-4786-a2a9-5a279b4c0dc1",
      },
      {
        favorito: false,
        id: "a1d2b3c4-0006-0006-0006-000000000002",
        nome: "Clara Nunes",
        cargo: "Especialista em Apps",
        imagem: "https://randomuser.me/api/portraits/women/13.jpg",
        time: "0bdf7b1e-d17e-4786-a2a9-5a279b4c0dc1",
      },
      {
        favorito: false,
        id: "a1d2b3c4-0006-0006-0006-000000000003",
        nome: "Vinícius Azevedo",
        cargo: "Mobile Developer",
        imagem: "https://randomuser.me/api/portraits/men/15.jpg",
        time: "0bdf7b1e-d17e-4786-a2a9-5a279b4c0dc1",
      },
      {
        favorito: false,
        id: "a1d2b3c4-0006-0006-0006-000000000004",
        nome: "Paula Figueiredo",
        cargo: "Analista Mobile",
        imagem: "https://randomuser.me/api/portraits/women/14.jpg",
        time: "0bdf7b1e-d17e-4786-a2a9-5a279b4c0dc1",
      },
      {
        favorito: false,
        id: "a1d2b3c4-0006-0006-0006-000000000005",
        nome: "Igor Mendes",
        cargo: "Engenheiro de Aplicativos",
        imagem: "https://randomuser.me/api/portraits/men/16.jpg",
        time: "0bdf7b1e-d17e-4786-a2a9-5a279b4c0dc1",
      },
      {
        favorito: false,
        id: "a1d2b3c4-0007-0007-0007-000000000001",
        nome: "Sophia Carvalho",
        cargo: "Especialista em Gestão",
        imagem: "https://randomuser.me/api/portraits/women/15.jpg",
        time: "7c2e07e4-00cf-4f52-8876-0d620a93ea67",
      },
      {
        favorito: false,
        id: "a1d2b3c4-0007-0007-0007-000000000002",
        nome: "Felipe Monteiro",
        cargo: "Consultor de Inovação",
        imagem: "https://randomuser.me/api/portraits/men/17.jpg",
        time: "7c2e07e4-00cf-4f52-8876-0d620a93ea67",
      },
      {
        favorito: false,
        id: "a1d2b3c4-0007-0007-0007-000000000003",
        nome: "Mariana Tavares",
        cargo: "Gerente de Projetos",
        imagem: "https://randomuser.me/api/portraits/women/16.jpg",
        time: "7c2e07e4-00cf-4f52-8876-0d620a93ea67",
      },
      {
        favorito: false,
        id: "a1d2b3c4-0007-0007-0007-000000000004",
        nome: "André Fonseca",
        cargo: "Estratégia de Negócios",
        imagem: "https://randomuser.me/api/portraits/men/18.jpg",
        time: "7c2e07e4-00cf-4f52-8876-0d620a93ea67",
      },
      {
        favorito: false,
        id: "a1d2b3c4-0007-0007-0007-000000000005",
        nome: "Isabela Costa",
        cargo: "Analista de Inovação",
        imagem: "https://randomuser.me/api/portraits/women/17.jpg",
        time: "7c2e07e4-00cf-4f52-8876-0d620a93ea67",
      },
      {
        id: "fe0e9496-11a4-4c9d-bc96-1d8032381c96",
        favorito: false,
        nome: "Mateus",
        cargo: "Gay",
        imagem: "https://github.com/mateusjesus.png",
        time: "f2365039-49a0-4106-86c4-dfeba9701e9f",
      },
      {
        id: "3bf09bd1-ca8d-4693-b80d-2f369b49721f",
        favorito: false,
        nome: "dsa",
        cargo: "dasdsa",
        imagem: "dasda",
        time: "f2365039-49a0-4106-86c4-dfeba9701e9f",
      },
      {
        id: "956acbce-d915-4cc0-b961-64c5ada572af",
        favorito: false,
        nome: "dsad",
        cargo: "asdasd",
        imagem: "dsadasd",
        time: "f2365039-49a0-4106-86c4-dfeba9701e9f",
      },
    ],
  });
});

app.get("/times", (req, res) => {
  res.send({
    times: [
      {
        id: "faa6dd47-7697-45a5-91b7-987b30577f03",
        nome: "Programação",
        cor: "#57C278",
      },
      {
        id: "ac4e9b0a-3649-44fd-9dcd-9437b426b4e3",
        nome: "Front End",
        cor: "#82CFFA",
      },
      {
        id: "67ed8a1f-82f6-4a41-ad2a-4b5caf292c0e",
        nome: "Data Science",
        cor: "#A6D157",
      },
      {
        id: "04a34845-bc70-4dc3-88ce-8f7bbe02bfcf",
        nome: "Devops",
        cor: "#E06B69",
      },
      {
        id: "78fc9f10-0d11-4918-9308-c8e3199a5cd3",
        nome: "UX e Design",
        cor: "#DB6EBF",
      },
      {
        id: "0bdf7b1e-d17e-4786-a2a9-5a279b4c0dc1",
        nome: "Mobile",
        cor: "#FFBA05",
      },
      {
        id: "7c2e07e4-00cf-4f52-8876-0d620a93ea67",
        nome: "Inovação e Gestão",
        cor: "#FF8A29",
      },
      {
        id: "f2365039-49a0-4106-86c4-dfeba9701e9f",
        nome: "LGBTQIA+",
        cor: "#ffa8e8",
      },
    ],
  });
});

app.post("/colaboradores", (req, res) => {
  const { nome, cargo, imagem, time } = req.body;

  if (!nome || !cargo || !imagem || !time) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios" });
  }

  const novoColaborador = {
    favorito: false,
    id: uuidv4(),
    nome,
    cargo,
    imagem,
    time,
  };

  colaboradores.push(novoColaborador);
  res.status(201).json(novoColaborador);
});

app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));

app.get("/", (req, res) => {
  res.send("nada para ver aqui");
});
