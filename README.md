# TrybeWallet 💸

Olá, seja bem vindo ao repositório do projeto **TrybeWallet**.

TrybeWallet é uma carteira de despesas online, nele é possível cadastrar despesas em 15 tipos de moedas diferentes, inclusive em bitcoins, tudo isso atualizado em tempo real.

Esse projeto foi desenvolvido no módulo de Front-End do curso da _[Trybe](https://www.betrybe.com/)_, mais especificamente na seção 7 e com **4** meses de curso.

Recebi esse desafio, onde deveria desenvolver do zero uma aplicação front-end, em que a pessoa usuária digita e-mail e senha os dois campos contêm lógicas de validação através de regex e o botão de acesso a entrar na aplicação só é liberado caso a pessoa digite um e-mail válido contendo (qualquercoisa@email.com) e a senha deve possuir 6 ou mais caracteres. **Nem e-mail e nem senha são salvos.**

1. No botão **Entrar** existe um efeito **CSS** de transição de inativo para ativo e vice-versa aplicado por mim, esse recurso não era requisitado no projeto.

2. Com botão ativo é possível clicá-lo e ser redirecionado para a página de "/carteira", isso acontece através de uma biblioteca **React** chamada **react-router-dom**.

3. Uma vez logados temos um cabeçalho com o e-mail digitado anteriormente, o valor total de despesas cadastradas e qual é a moeda que o valor está sendo convertido.

4. Consumo da **API**: https://economia.awesomeapi.com.br/json/all para trazer a aplicação as moedas e seus valores atualizados.

5. Logo abaixo, temos um formulário para adicionar as despesas, todas essas informações são salvas no estado global **(Redux)** da aplicação.

6. É possível editar e excluir despesas cadastradas.

5. Precisei desenvolver testes para cobrir 90% da aplicação utilizando a biblioteca de testes do **React-RTL**.

## Tecnologias utilizadas no desenvolvimento 🦾

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
<br />
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
<br />
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
<br />
![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)

## Para acessar o projeto basta clicar nesse link 🔗:
- https://guilherme-artigas.github.io/Trybewallet/

Obrigado pela visita! ❤️
