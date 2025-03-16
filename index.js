require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 3030;

app.use(cors());
app.use(express.json());

const apiFilePath = path.join(__dirname, "api.json");

const readApiFile = () => {
  const data = fs.readFileSync(apiFilePath, "utf-8");
  return JSON.parse(data);
};

const authenticate = (req, res, next) => {
  const password = req.headers["x-api-password"];
  if (password && password === process.env.API_PASSWORD) {
    next();
  } else {
    res.status(403).json({ message: "Acesso negado. Senha inválida." });
  }
};

app.post("/api", authenticate, (req, res) => {

  const data = readApiFile();
  res
    .status(201)
    .send({ colaboradores: data.colaboradores, times: data.times });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
