# 🚀 API Culture Power
 ### Bem vindo(a)!
 ```bash
Esta API foi desenvolvida para uma empresa que deseja gamificar os resultados e recompensar seus colaboradores de acordo com seu desempenho. Os colaboradores podem resgatar produtos da loja virtual da empresa usando as joias adquiridas durante suas atividades.
```
## 💻 Instalação

Antes de começar, certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.
```bash
# Clone esse repositório
- $ git clone https://github.com/modulo4turma2Arnia/Back-End_Module-4

# Vá para o repositório Back-end
- $ cd Back-Modulo4-Turma2

# Instale as dependencias
- $ npm i firebase typeorm pg @nestjs/core @nestjs/common @nestjs/swagger @nestjs/jwt @nestjs/config bcrypt class-transformer class-validator


# Rode a aplicação
- $ npm run start:dev
```
## 👨‍💻 Entidades utilizadas no projeto
```bash
- # Auth
- $ Responsavel pela autenticação da API.
- # Products
- $ Registra os produtos, altera e também é responsavel por remover um produto do banco de dados.
- # Joias
- $ É a entidade responsavel por criar as jóias, assim como em prudutos também tem todos as rotas de um CRUD.
- #  Users
- $ E por último a entidade de user que é responsavel pelo usuário. assim como nas outras entidades também tem todos as rotas de um CRUD.
```

## 👨‍💻 Dependências Utilizadas
📚 Aqui estão as estrelas do show, as dependências que fazem tudo funcionar:

- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [typeORM](https://docs.nestjs.com/recipes/sql-typeorm)
- [jsonwebtoken](https://jwt.io/)
- [firebase](https://firebase.google.com/?hl=pt)
- [@nestjs/common](https://www.npmjs.com/package/@nestjs/common)
- [@nestjs/swagger](https://docs.nestjs.com/openapi/introduction)
- [@nestjs/jwt](https://docs.nestjs.com/security/authentication)
- [@nestjs/config](https://docs.nestjs.com/techniques/configuration)
- [@Class-transformer @Class-validator](https://docs.nestjs.com/techniques/validation)


## 🛣️ Rotas da API

### 🔵 GET v1/users/infouser
- **Descrição**: Retorna todas as informações do usuário. (Necessita autenticação).
### 🔵 GET v1/users/:id
- **Descrição**: Retorna o usuário com id encontrado. (Necessita autenticação).
### 🔵 GET v1/users
- **Descrição**: Retorna todos os usuários cadastrados no Banco de dados. (Necessita autenticação).
### 🔵 GET v1/products
- **Descrição**: Retorna todos os Produtos, também é possivel filtrar.(Necessita autenticação).
- **Exemplos de Query**: /v1/products?price=2 , /v1/products?name=apple, v1/products?page=1&limit=10
### 🔵 GET v1/products/:id
- **Descrição**: Retorna o produto encontrado com o mesmo id. (Necessita autenticação).
### 🔵 GET v1/jewelry
- **Descrição**: Retorna todas as jóias cadastradas no Banco. (Necessita  autenticação).

### 🟢 POST v1/auth
- **Descrição**: Verifica o login e retornar um token.
- **Corpo da Requisição**:
```javascript
{
email: "fulano@ciclano.com.br",
password: "senha1234"
}
```
### 🟢 POST v1/auth/register
- **Descrição**: Cria um usuário no bando de dados(Necessita autenticação).
- **Aviso**: A Imagem de perfil do usuário não é obrigatória. 
- **Observação - em caso de craição de um admin, ele deve conter a propriedade role: admin**:
```javascript
{
FirstName: "Fulano"
LastName: "Beltrano"
email: "beltrano@fulano.com.br"
profileImage: "URL Da imagem enviada."
role: "admin",
password: "senha123"
}
```

- **Corpo da Requisição**:
```javascript
{
FirstName: "Fulano"
LastName: "Beltrano"
email: "beltrano@fulano.com.br"
profileImage: "URL Da imagem enviada."
password: "senha123"
}
```
### 🟢 POST v1/users/rescue/:id
- **Descrição**: Resgata um produto e salva no usuário(Necessita autenticação).
- **Descrição**: O Usuário precisa estar logado.

### 🟢 POST /v1/products
- **Descrição**: Cadastra um produto no sistema.
- **Descrição**: Todos os produtos devem ter imagens.
- **Corpo da Requisição**:
```javascript
{
	"name": "Fritadeira Air Fryer Sem Óleo Britânia",
	"description": "Fritadeira Air Fryer Sem Óleo...",
	"price": "15",
  "image": "URL da imagem"
}
```


### 🟢 POST /v1/jewelry/:userId/:jewelryId
- **Descrição**: Atribui uma jóia a um usuário.

### 🟢 POST v1/jewelry
- **Descrição**: Cria uma jóia no banco de dados.
- **Descrição**: Todas as jóias devem ter imagens.
```javascript
{
	"type": "Joia do Tempo",
	"habilities": "Nesta joia está a possibilidade de manejo da administr.....",
  "image": "URL da imagem"
}
```


### 🟡 PATH /v1/jewelry/:id
- **Descrição**: Atualiza as propriedades da jóia encontrada.
- **Corpo da Requisição**:
 ```javascript
{
type: "Joia da Mente Modificada"
}
```

### 🟡 PATH /v1/products/:id
- **Descrição**: Atualiza as propriedades de um produto encontrada.
- **Corpo da Requisição**:
 ```javascript
{
name: "JBL Tune 720BT"
}
```

### 🟡 PATH /v1/users/chg/password
- **Descrição**: Atualiza a senha do usuário.
- **Corpo da Requisição**:
 ```javascript
{
	currentPassword: "senha123",
	newPassword: "senha1234"
}
```

### 🟡 PATH /v1/users/:id
- **Descrição**: Atualiza as propriedades de um usuário encontrado.
- **Corpo da Requisição**:
 ```javascript
{
  FirstName: "Fulano Editado"

}
```

### 🔴 DELETE /v1/users/:id
- **Descrição**: Remove um usuário específico do banco de dados.

### 🔴 DELETE /v1/products/:id
- **Descrição**: Remove um produto específico do banco de dados.



### Detalhes Adicionais
- **Autores da API:** [Gabriel Anacleto](https://www.linkedin.com/in/gabriel-anacletoo/)  [Guilherme](https://github.com/syus13) 
- **Contato:** gabrielanacleto159@live.com

