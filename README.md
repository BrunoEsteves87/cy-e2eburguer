# 💻 Projeto de Automação de Testes E2E - E2EBurger

Este repositório contém a automação de testes de ponta a ponta (E2E) para o sistema **E2EBurger**, utilizando a ferramenta [Cypress](https://www.cypress.io/), construído como parte do curso de Cypress na Fomação Agile Test Engineer da [E2E Treinamentos](https://e2etreinamentos.com.br/formacao-agile-test-engineer/).

![Em Desenvolvimento](https://img.shields.io/badge/Status-Em_Desenvolvimento-yellow)

## 📋 Descrição

O objetivo deste projeto é garantir a qualidade das funcionalidades principais do sistema, testando cenários críticos como login, navegação, preenchimento de formulários, e validação de mensagens de erro e sucesso.

Os testes seguem boas práticas de automação e possuem foco em:

- Verificação de fluxo de login;
- Validação de mensagens de feedback para o usuário;
- Garantia de funcionalidades essenciais do sistema.

## 🛠️ Tecnologias e Ferramentas

- **Cypress**: Framework para automação de testes de E2E;
- **JavaScript**: Linguagem utilizada nos scripts de teste;
- **Node.js**: Ambiente de execução do JavaScript;
- **Yarn**: Gerenciador de pacotes.


## 🚀 Como Executar o Projeto

###  📌Pré-requisitos

Certifique-se de ter instalado:

- Node.js (v14 ou superior);
- Yarn (opcional, mas recomendado).

### 👨🏻‍💻 Passos para Configuração

 1. Clone o repositório:
 ```bash
	git clone https://github.com/BrunoEsteves87/cy-e2eburger.git 
```
 2. Entrar na pasta do projeto clonado:
 ```bash
	cd cy-e2eburger
```
3. Instale as dependências:
 ```bash
	yarn install
```

### 🤖 Executar os Testes:

-  Para abrir o painel interativo do Cypress:
 ```bash
	yarn cypress open
```

-  Para executar os testes no modo headless:
 ```bash
	yarn cypress run
```


## 🧪 Testes Implementados

### Testes de Login

-   **Login realizado com sucesso**:
	-  Preenche os dados de login válidos e verifica a mensagem de sucesso.
	-  Garante que o usuário foi redirecionado corretamente.
        
-   **Não deve logar quando senha inválida**:    
	-  Tenta logar com senha incorreta e valida a mensagem de erro exibida.
      
-   **Não deve logar quando dados em branco**:
	 - Tenta logar sem preecnher credenciais e valida a mensagem obrigatóriedade dos campos.

-   **Usuário perfil salão deve acessar aplicação pelo APP**:
	 -  Tenta logar com perfil salão e direciona para página de info para fluxo do app.    
			  
    
      
    

## 📦 Dependências Principais

As principais dependências do projeto são:

-   [Cypress](https://www.cypress.io/): Framework de testes.
-   [Yarn](https://yarnpkg.com/): Gerenciador de pacotes.



##  📂 Estrutura do Projeto

A organização do projeto segue a estrutura padrão recomendada pelo Cypress:

 ```bash
cy-e2eburguer/
├── cypress/
│   ├── e2e/                   # Arquivos de testes E2E
│   ├── fixtures/              # Arquivos de dados fictícios (fixtures)
│   ├── support/               # Comandos personalizados e configurações adicionais
├── cypress.config.js          # Arquivo de configuração do Cypress
├── package.json               # Dependências e scripts do projeto
└── README.md                  # Documentação do projeto

	
```



##  🚀 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorias.

## 📌 Notas Gerais
Feito com ❤️ por [Bruno Esteves](https://github.com/BrunoEsteves87) 😊
