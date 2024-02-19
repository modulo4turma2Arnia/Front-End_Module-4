# 🚀 APP Culture Power
 ### Bem vindo(a)!
 ```bash
Este APP foi desenvolvida para uma empresa que deseja gamificar os resultados e recompensar seus colaboradores de acordo com seu desempenho. Os colaboradores podem resgatar produtos da loja virtual da empresa usando as joias adquiridas durante suas atividades.
```
## 💻 Instalação

Antes de começar, certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.
```bash
# Clone esse repositório
- $ git clone https://github.com/modulo4turma2Arnia/Front-End_Module-4

# Vá para o repositório Back-end
- $ cd Front-End_Module-4

# Instale as dependencias
- $ npm i axios styled-components react-icons react-roter-dom 


# Rode a aplicação
- $ npm run dev
```

## 👨‍💻 Dependências Utilizadas
📚 Aqui estão as estrelas do show, as dependências que fazem tudo funcionar:

- [react-router-dom](https://www.npmjs.com/package/bcrypt)
- [styled-components](https://docs.nestjs.com/recipes/sql-typeorm)
- [react-icons](https://jwt.io/)
- [axios](https://firebase.google.com/?hl=pt)


## 🛣️ Rotas do APP

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
- **Autores do APP:**
- [Esdras Marcelino da Silva](www.linkedin.com/in/esdras-marcelino-da-silva-developer-full-stack)
- [Gabriel Anacleto]
- [Guilherme Bernades]
- [Lucas Carvalho]
- [João Pires de Andrade]
- **Contato:** esdrasmarcelino55@gmail.com

