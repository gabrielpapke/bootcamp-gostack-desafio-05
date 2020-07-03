<img alt="GoStack" src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/header-desafios.png" />

<h3 align="center">
  Desafio 05: Primeiro projeto Node.js
</h3>

<blockquote align="center">“Para quem fica melhor a cada dia, ficar pronto é utopia”!</blockquote>

## :rocket: Sobre o desafio

Nesse desafio, foi criado uma aplicação para continuar treinando o que aprendi até agora no Node.js junto ao TypeScript, utilizando o conceito de models, repositories e services.

É uma API para armazenar transações financeiras de entrada e saída, que permite o cadastro e a listagem dessas transações.

### 👉 Como executar

1. Abra o terminal e execute o comando `yarn` no diretório do desafio, para que instale as dependências.

2. Para rodar a aplicação execute `yarn dev:server` e faça os testes com o Postman/Insomnia com a URL: http://localhost:3333 (veja as rotas da aplicação abaixo)

3. Caso queira rodar os testes execute `yarn test`

Enjoy it! 😁


### Rotas da aplicação

Agora que você já está com o template clonado, e pronto para continuar, você deve verificar os arquivos da pasta `src` e completar onde não possui código com o código para atingir os objetivos de cada rota.

- [x] **`POST /transactions`**: A rota deve receber `title`, `value` e `type` dentro do corpo da requisição, sendo `type` o tipo da transação, que deve ser `income` para entradas (depósitos) e `outcome` para saídas (retiradas). Ao cadastrar uma nova transação, ela deve ser armazenada dentro de um objeto com o seguinte formato :

```json
{
  "id": "uuid",
  "title": "Salário",
  "value": 3000,
  "type": "income"
}
```

- [x] **`GET /transactions`**: Essa rota deve retornar uma listagem com todas as transações que você cadastrou até agora, junto com o valor de soma de entradas, retiradas e total de crédito. Essa rota deve retornar um objeto com o formato a seguir:

```json
{
  "transactions": [
    {
      "id": "uuid",
      "title": "Salário",
      "value": 4000,
      "type": "income"
    },
    {
      "id": "uuid",
      "title": "Freela",
      "value": 2000,
      "type": "income"
    },
    {
      "id": "uuid",
      "title": "Pagamento da fatura",
      "value": 4000,
      "type": "outcome"
    },
    {
      "id": "uuid",
      "title": "Cadeira Gamer",
      "value": 1200,
      "type": "outcome"
    }
  ],
  "balance": {
    "income": 6000,
    "outcome": 5200,
    "total": 800
  }
}
```

## :memo: Licença

Esse projeto está sob a licença MIT.

---

Desafio feito com 💜 por [Gabriel Papke](https://linkedin.com/in/gabrielpapke/)
