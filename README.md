# rotaNET

Aplicativo mobile para gestão de entregas, desenvolvido em React Native com Expo.
![App funcionando](assets/images/demo.gif)

## 1. Como rodar o projeto

Siga o passo a passo abaixo:

1. **Pré-requisitos**  
   - [Node.js](https://nodejs.org/) instalado  
   - [Git](https://git-scm.com/) instalado  
   - [Expo CLI](https://docs.expo.dev/get-started/installation/) instalado globalmente:  
     ```sh
     npm install -g expo-cli
     ```

2. **Clone o repositório**
   ```sh
   git clone <url-do-repositorio>
   cd rotaNET
   ```

3. **Instale as dependências**
   ```sh
   npm install
   ```

4. **Inicie o servidor de dados (JSON-server)**
   ```sh
   npm run server
   ```
   > O servidor roda por padrão em `http://localhost:3001`, mas pode ser necessário trocar `localhost` pelo IP da sua máquina (veja seção de erros).

5. **Inicie o app**
   ```sh
   npm start
   ```
   Siga as instruções do Expo para rodar no emulador ou no seu dispositivo físico.

## Informações de Login

- Usuário: entregador@rotanet.com
- Senha: 123456

> Para alterar dados de usuários ou status das entregas, edite o arquivo `db.json` na raiz do projeto.

## 2. Decisões técnicas

- **Tailwind CSS / Nativewind**: Utilizado para agilizar a estilização das páginas.
- **React Hook Form**: Para validação simples no formulário de login.
- **Contexto global de alerts**: Criado para maior controle e personalização das mensagens de alerta.
- **Context API**: Usada para gerenciamento de estado global (autenticação, entregas, alertas).
- **Tipagem e tratamento de erros**: Implementado tratamento para erros do Axios, problemas de internet, erros comuns de JavaScript e erros desconhecidos.

## 3. Trade-offs

- **JSON-server**: Utilizado como backend fake para ganhar tempo e focar no desenvolvimento do frontend.

## 4. Erros encontrados

- **Problema com BASE_URL**: O JSON-server não funcionava com `localhost` na BASE_URL. Troquei para o IP da minha máquina e funcionou corretamente.
- **Erro no PATCH**: O endpoint PATCH estava retornando 404 (não encontrava o delivery). Após reiniciar o app, o problema foi resolvido.

## 5. Próximos passos

- Implementar mecanismo de busca de entregas.
- Construir uma API real para o app.
- Skeleton loaders
- Dark mode
- Testes
- Painel de admin

## 6. Tempo de desenvolvimento

- Aproximadamente 6 horas e meia.
  - Sábado: telas mockadas e login (~5 horas)
  - Domingo: integração com API e entregas (~1h30)
