# Gerador Automático de Jogos da Mega-Sena

## Objetivo:

Trata-se de uma Aplicação Web que visa fornecer o serviço de criação automática e aleatória de jogos para jogos na Mega-Sena aos seus usuários.

A intenção da criação dessa Aplicação foi treinar habilidades de **HTML5**, **CSS3** e **JavaScript**, bem como, a utilização do **[Framework Bootstrap](https://getbootstrap.com/)** em um projeto real.

## Funcionamento:

O projeto é composto por uma página estática de **HTML** com o botão para gerar o palpite. Assim que o usuário clica no botão é chamada uma função no arquivo proprietário de **JavaScript** com as devidas instruções para a criação de uma lista ordenada com números aleatórios e sem repetição.

## Organização:

A Aplicação é ordenada em 3 principais estruturas, conforme a divisão abaixo:

### HTML5
Nesta parte temos o arquivo 'index.html' que, além de estruturar a Aplicação, ela também chama as folhas de estilo **CSS** do **Bootstrap** e as **Proprietárias**, bem como, o **JavaScript Proprietário** - por hora, não estou utilizando o **JavaScript** do **Bootstrap**.

### CSS3
Nesta parte, faço a estilização própria, subscrevendo algumas configurações padrão do **Bootstrap**, bem como, trabalhar com as Classes e Identificações necessárias para a injeção das informações que serão geradas em **JavaScript**.

### JavaScript
Nesta parte, trabalho a função que é chamada pelo botão de ação no **HTML**, gerando e ordenando os números do palpite a ser gerado.

## Sugestão de Melhorias:

Para sugerir melhorias ao projeto basta enviar uma **Issue** ou um **Pull-Request**, bem como, me enviar uma **Mensagem Direta**.

## Versão Atual:

> v1.3 = Analisa o jogo aleatório para informar ao usuário se são números muito ou pouco sorteados.

## Versões Anteriores:

> v1.2 = Ajustes no texto e correções de código.

> v1.1 = Ajustes relacionados com CSS e Responsividade.

> v1.0 = Primeira versão funcional da Aplicação.

## Futuras Implementações:

> v1.4 = Transferir o JavaScript para um servidor, desta forma, vou fazer uma integração entre o back-end e o front-end, tornando esta, uma aplicação completa.
