# Projeto Doações

## Funcionalidades
- Teremos um Usuário Principal (terá possibilidade de se cadastrar)
- O usuário pode a criar solicitação de doação
- O usuário pode  realizar uma doação (resolver uma solicitação existente).

# Tabelas
- usuarios
	- id
	- nome
	- email
	- telefone
- trocas
	- id
	- idDoador
        	- ref: usuarios, id
	- idReceptor
        	- ref: usuarios, id
	- status
- item_trocas
	- idTroca
        	- ref: trocas, id
	- idItem
        	- ref: itens, id
- itens
	- id
	- nome
	- descricao

## Usar
- express generator
- migrations

## Endpoints

## Migrations/Models
npx sequelize-cli model:generate --name usuarios --attributes nome:string,email:string,telefone:integer
npx sequelize-cli model:generate --name trocas --attributes id_doador:integer,id_receptor:integer,status:integer
npx sequelize-cli model:generate --name itens --attributes nome:string,descricao:string
npx sequelize-cli model:generate --name item_trocas --attributes id_troca:integer,id_item:integer
