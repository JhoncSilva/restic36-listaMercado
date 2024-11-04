# 🛒 Lista de Compras de Supermercado

Projeto desenvolvido em **Angular** como parte da **Residência de Software da Bahia (Restic36)**. Esta aplicação básica de lista de compras permite que o usuário crie, exclua e marque itens como concluídos, utilizando o **JSON Server** como back-end simulado para armazenamento dos dados.

---

## 🚀 Funcionalidades

- **Adicionar Itens**: Crie novos itens para a lista de compras.
- **Excluir Itens**: Remova itens indesejados da lista.
- **Marcar como Concluído**: Atualize o status dos itens para indicar que já foram comprados.

## 🛠️ Tecnologias Utilizadas

- **Angular**: Framework front-end usado para construir a interface e gerenciar a lógica da aplicação.
- **JSON Server**: Utilizado como um back-end fake para simular a persistência dos dados de itens da lista.

## ⚙️ Como Executar o Projeto

### Pré-requisitos

- **Node.js** instalado
- **Angular CLI** e **JSON Server** instalados globalmente

### Passo a Passo

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/JhoncSilva/restic36-listaMercado.git
   cd restic36-listaMercado

2. **Instale as dependências**:
   ```bash
   npm install

3. **Inicie o JSON Server**:
   ```bash
   json-server --watch db.json

4. **Inicie o servidor Angular**:
   ```bash
   ng server

5. **Abra o navegador e acesse http://localhost:4200**.
