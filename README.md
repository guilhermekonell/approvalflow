# Desafio Fábrica de Software - Aplicação de fluxo de aprovação

O desafio se baseia em construir uma Aplicação de fluxo de aprovação para compra de material de escritório.

## Instalação

### Ambiente

- Instale o [Node.js](https://nodejs.org/en/);
- Instale o banco [MySQL](https://www.mysql.com/);
- Instale o [Angular CLI](https://cli.angular.io/) (```npm install -g @angular/cli```)

### Projeto

#### 1 - Baixe este repositório:

```bash
git clone git@github.com:guilhermekonell/approvalflow.git
```
#### 2 - Backend

- Abra o backend da aplicação no eclipse na pasta ```..\approvalflow\backend```;
- Importe o projeto e dê um Update Project do Maven para baixar as dependências;
- Configure as informações do banco de dados no arquivo ```/approvalflow/src/main/resources/application.properties```;
- Ao executar a aplicação a base e suas tabelas serão automaticamente criadas;

#### 3 - Frontend

- Abra o frontend através de linha de comando na pasta ```..\approvalflow\frontend\approvalflow```;
- Dê um ```npm install``` para baixar as dependências;
  
## Executando a aplicação

- No eclipse, inicialize o backend clicando com o direito no projeto, Run As > Spring Boot App;
- Na linha de comando posicionado na pasta do frontend ```..\approvalflow\frontend\approvalflow```, execute o comando ```ng serve --open```;

## Arquivos minificados

- Os arquivos minificados foram gerados pelo próprio Angular CLI e estão disponíveis na pasta ```..\approvalflow\frontend\approvalflow\dist\approvalflow```, no entanto, os arquivos css e js não foram colocados em suas respectivas pastas para não gerar nenhum conflito de caminho relativo.



