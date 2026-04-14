# p1-NoSQL-mongodb-docker

# 📚 MongoDB + Docker: Gestão Escolar

Este repositório contém a resolução de um exercício prático focado em operações CRUD e agregações no **MongoDB**, utilizando **Docker** para o ambiente de banco de dados.

## 🛠️ Tecnologias
- **Docker** (para o contêiner do banco)
- **MongoDB 8.0+**
- **mongosh** (interface de linha de comando)

## 🚀 Como rodar o projeto

1. **Subir o banco de dados:**
   ```bash
   docker run --name mongo-escola -p 27017:27017 -d mongo

Acessar o terminal do MongoDB:

Bash
docker exec -it mongo-escola mongosh
Usar o banco do exercício:

JavaScript
use escola;
## 📋 Atividades Realizadas
O projeto consistiu na criação de uma collection alunos com 5 registros e a execução das seguintes consultas:

**Listar todos:** Consulta geral de todos os alunos.

**Filtro por Curso:** Busca de alunos matriculados em "ADS".

**Filtro por Idade:** Alunos com mais de 21 anos.

**Atualização:** Alteração de idade de um aluno específico.

**Array de Notas:** Adição de um novo elemento ao campo de notas.

**Remoção:** Exclusão de um registro do banco.

**Média Simples:** Cálculo da média de notas por aluno usando $avg.

**Agrupamento:** Quantidade de alunos por curso usando $group e $sum.
