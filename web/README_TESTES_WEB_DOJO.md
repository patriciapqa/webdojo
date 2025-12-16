# 📘 Documentação de Testes Automatizados – WebDojo

## 📌 Visão Geral

Este projeto contém os **testes automatizados end-to-end (E2E)** da aplicação **WebDojo**, desenvolvidos com **Cypress**.

A aplicação WebDojo está localizada **no mesmo repositório** deste projeto. Para executar os testes, é obrigatório que a aplicação esteja rodando localmente.

---

## 🧰 Tecnologias Utilizadas

- Node.js
- NPM
- Cypress
- JavaScript

---

## 📂 Estrutura do Projeto

```text
cypress/
├── e2e/
├── fixtures/
│   ├── 1.pdf
│   ├── cep.json
│   └── consultancy.json
├── support/
│   ├── actions/
│   │   └── consultancy.actions.js
│   ├── commands.js
│   ├── e2e.js
│   └── utils.js
```

---

## ▶️ Executando a Aplicação WebDojo

```bash
npm run dev
```

A aplicação ficará disponível em `http://localhost:3000`.

---

## 🧪 Executando os Testes

### Desktop
```bash
npm run test
```

### Mobile (Login)
```bash
npm run test:login:mobile
```

---

## ⚙️ Scripts

```json
"scripts": {
  "dev": "serve -s dist -p 3000",
  "test": "npx cypress run --config viewportWidth=1440,viewportHeight=900",
  "test:login:mobile": "npx cypress run --spec cypress/e2e/login.cy.js --config viewportWidth=414,viewportHeight=896"
}
```

---

## 📚 Referências

- https://docs.cypress.io
- https://nodejs.org
