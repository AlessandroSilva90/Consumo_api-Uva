# Consumo da api Laravel com React + Vite
<h1>Prova Analista de Sistemas 1 - Uva </h1>

## Tecnologias Utilizadas:
- PHP v8.1.10
- Laravel v10.48.22 
- ReactJs
- Vite 5.4.8
- Node v18.8V.0
- React 18.3.1
- Boootstvrap v5.3.3
- Jquery 3.6.0
- Git
- Postgree

## Programas Utilizados
- VS Code
- Laragon
- PgAdmin 4
 

## Instruções de execução (Completa porem com finzaliação na execução do React)

Todo o sistema foi construido  utilizando o [Laragon](https://laragon.org/download/) pois ele ja possui todo o necessário para a criação do sistema(Git, php, apache, node etc) . Faça o download para ter o mesmo ambiente que utilizei;
- Realize também o download do pgAdmin para o gerenciamento do banco de dados [PgAdmin 4](https://www.pgadmin.org/download/pgadmin-4-windows/)

1- Após realiza o download das aplicações, abra o Laragon e PgAdmin.
   
    1.1 No PgAdmin crie o  banco de dados sistema_vendas;
    1.2 No Laragon inicie o Apache;

2- Apos isso, ainda no Laragon abra o terminal. Você estará no diretório www;
 
 2.1 Nesse diretório copie ou faça clone dos sistemas(Laravel e da API) para esse diretorio;

3- Apos os sistemas estarem na pasta www, entre na pasta do sistema React( cd consumo_api-uva_master, se estiver com esse nome).

4- Dentro do diretorio do sistema execute o comando NPM INSTALL para que o npm instale todas as dependencias necessárias.

6- Apos esses passos você inicia o servidor react com NPM RUN DEV.

7 - Com o servidor ativo realize os testes na aplicação laravel e com o link que receber no email você terá acesso a aplicação.

Obs: Caso queira realizar um teste com o proprio react acesso o link: http://localhost:5173/seus_pedidos/{token}

