<h1 align="center">🚀 Backend Hands-On</h1>

<p align="center">
  <img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS" />
  <img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma" />
  <img src="https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
</p>

## 📌 **Sobre o Projeto**

O **Backend Hands-On** é uma API desenvolvida com **NestJS + Prisma ORM**, que oferece um **mural de pedidos de oração e testemunhos**.

Este projeto faz parte de uma atividade prática (**hands-on**) da [Faculdade Dunamis](https://www.faculdadedunamis.com.br/), desenvolvido exclusivamente para fins acadêmicos e educacionais.

---

## 📖 **Documentação da API**

A API está documentada no Postman para facilitar testes e integração:

[![Run in Postman](https://run.pstmn.io/button.svg)](https://documenter.getpostman.com/view/20143935/2sAYkBthDi)

---

## 🚀 **Deploy e CI/CD no Azure**

O deploy da aplicação é totalmente automatizado via **GitHub Actions**, garantindo **entrega contínua (CI/CD)** para um **Azure Web App (Container)**.

### 🔹 **Fluxo do Deploy**

1. A cada **push na branch `main`**, o **GitHub Actions** é acionado.
2. A API é **construída como uma imagem Docker**.
3. A imagem é publicada no **GitHub Container Registry (GHCR)**.
4. O **Azure Web App** recebe automaticamente a nova versão.

Isso permite que a aplicação esteja sempre atualizada, sem necessidade de deploy manual.

---

## 🛠 **Tecnologias Utilizadas**

- **NestJS** – Framework para construção da API
- **Prisma ORM** – Gerenciamento do banco de dados
- **PostgreSQL** – Banco de dados relacional
- **Docker** – Containerização da aplicação
- **GitHub Actions** – Automação de CI/CD
- **Azure Web App** – Infraestrutura para hospedagem

---

## 🚀 **Contato**

👉 **Desenvolvido por:** _Tainá Saboia_  
👉 **Professora Homologadora na Faculdade Dunamis**  
📧 **Email:** _tainasaboia@gmail.com_  
👉 **GitHub:** [github.com/tasaboia](https://github.com/tasaboia)  
👉 **LinkedIn:** [linkedin.com/in/tasaboia](https://linkedin.com/in/tasaboia)
