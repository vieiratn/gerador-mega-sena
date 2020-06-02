// Criando uma constante para receber o botão.
const gerarPalpite = document.querySelector('.gerar');

/* Criando um evento que aguarda por um clique
    quando ele é dado, dispara uma função anônima. */
gerarPalpite.addEventListener("click", function() {
    
// Criação da lista que irá receber todos os números do palpite.
    let palpite = [];

/* Criação das constantes que recebem os valores (mínimo e máximo)
    para enviar como parâmetro para a função que gera os números
    aleatórios. */
    const minimo = 1;
    const maximo = 60;

// Função principal para gerar um número aleatório.
    function randInt(min, max) {
        let num = Math.random() * (max - min) + min;
        return Math.floor(num);
    }

// Função para ordenar os números da lista.
    function ordenar(a, b) {
        return (a - b);
    }

// Loop para colocar os números dentro da lista.
    let cont = 0;
    while (palpite.length < 6) {
        let bola = randInt(minimo, maximo);

// Condicional que verifica se o número aleatório já existe na lista.
        if (palpite.indexOf(bola) === -1) {
            palpite.push(bola);
            cont++;
        }   
    }

// Utilizando a função para ordenar os itens da lista.
    palpite.sort(ordenar);
    
// Iteração para preencher o HTML com os números da lista.
    for (i = 0; i < palpite.length; i++) {
        let bola = document.querySelector(`#bl${i}`);
        bola.innerHTML = palpite[i];
    }
});
