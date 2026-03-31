# 🧪 Projeto de Testes E2E com Cypress

## 📌 Sobre o projeto

Este projeto tem como objetivo aplicar testes automatizados end-to-end (E2E) utilizando Cypress, desde a configuração inicial até a geração de relatórios e análise dos resultados.

---

## 🚀 Conceitos e práticas aplicadas

### Estrutura e configuração
- Inicialização do projeto com `npm init`
- Configuração do Cypress via Launchpad
- Organização dos testes no diretório `e2e`
- Criação de arquivos `.spec.js`

### Escrita de testes
- Uso de `describe` e `it`
- Navegação com `cy.visit()`
- Interações com `cy.get()`, `.type()`, `.click()`
- Validações com `cy.contains()` e `.should()`
- Testes de fluxo positivo (happy path)
- Testes de fluxo negativo (sad path)

### 🔍 Identificação de elementos
- Uso do DevTools do navegador
- Selector Playground do Cypress

### 🌐 Testes de API e dados
- Testes de requisições de API
- Uso de stubs para simular respostas da API
- Utilização de fixtures (dados externos em JSON)

### ⚡ Execução dos testes
- Execução em modo headless
- Geração de vídeos e evidências

### 📊 Relatórios e monitoramento
- Relatórios em HTML com Mochawesome
- Integração com Cypress Cloud
- Visualização de resultados em dashboard

### 🛠️ Boas práticas
- Reutilização e organização de código
- Criação de comandos personalizados (`cy.login()`, `cy.cadastrar()`)
- Identificação e tratamento de testes flaky
- Avaliação estratégica na escrita de testes E2E
- Proteção de dados sensíveis com `cypress.env.json`

---

## 📚 Aprendizados

- Criação de testes iniciando pelo caminho feliz e evoluindo para cenários de erro  
- Captura e validação de elementos com Cypress  
- Simulação de comportamento de usuário em testes  
- Uso de stubs para controle de respostas da API  
- Uso de fixtures para diferentes massas de dados  
- Geração de documentação com vídeos e relatórios  
- Centralização de resultados no Cypress Cloud  
- Identificação e correção de flaky tests  
- Segurança de dados sensíveis  

---

## 🧰 Ferramentas utilizadas

- Cypress  
- Node.js  
- Mochawesome  
- Cypress Cloud  
- DevTools  

---
