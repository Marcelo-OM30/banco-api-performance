# Performance Testing with JavaScript and K6

## 📌 Introdução

Este repositório contém testes de performance para APIs bancárias utilizando JavaScript com [K6](https://k6.io/). Os testes têm como objetivo avaliar a estabilidade, escalabilidade e tempo de resposta dos principais endpoints da aplicação simulando cenários de carga e estresse.

## 🚀 Tecnologia Utilizada

- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [K6](https://k6.io/) — Ferramenta moderna de testes de carga para APIs e microsserviços
- Variáveis de ambiente para configuração dinâmica (ex:`BASE_URL`)

## 📁 Estrutura do Repositório

```
banco-api-performance/
├── fixtures/
├── helpers/
├── tests/
└── README.md
```

## 🎯 Objetivo de Cada Grupo de Arquivos

- `tests/`: Contém os arquivos de testes escritos em JavaScript. Cada arquivo representa um conjunto de cenários de performance para funcionalidades específicas da API (como transferências ou saques).

## ⚙️ Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/Marcelo-OM30/banco-api-performance.git
   cd banco-api-performance
   ```

2. Instale o K6 (caso ainda não tenha):
   - Via Homebrew (macOS):
     ```bash
     brew install k6
     ```
   - Via Chocolatey (Windows):
     ```bash
     choco install k6
     ```
   - Ou siga as instruções: https://k6.io/docs/get-started/installation/

## ▶️ Modo de Execução

Para rodar um teste simples:

```bash
k6 run tests/transferencias.test.js
```

## 📊 Execução com Dashboard Web e Exportação de Relatório

Para acompanhar o teste em tempo real via navegador e gerar um relatório HTML automaticamente ao final:

```bash
K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=/html-report.html k6 run tests/transferencias.test.js
```

- Acesse o relatório gerado abrindo `html-report.html` em seu navegador.
- Esse modo permite uma análise mais visual e detalhada da performance.

---

🧪 Contribuições e sugestões são bem-vindas!
