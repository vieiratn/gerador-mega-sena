// Criando uma constante para receber o botão.
const gerarPalpite = document.querySelector('.gerar');

// Criação da lista com os 10 números mais sorteados da Mega-Sena.
const maisSorteados = [10, 53, 05, 23, 33, 04, 42, 54, 24, 27];

// Criação da lista com os 10 números menos sorteados da Mega-sena.
    const menosSorteados = [16, 06, 60, 36, 45, 13, 40, 25, 28, 38];
    
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
    
/* Iteração para preencher o HTML com os números da lista.
    adicionalmente, estou manipulando o CSS, adicionando e
    removendo classes de acordo com os números mais e menos
    sorteados */
    for (i = 0; i < palpite.length; i++) {
        
        let bola = document.querySelector(`#bl${i}`);
        let bolas = document.querySelector(`.bola${i}`);
        
        bolas.classList.remove('bolas-menos', 'bolas-mais');
        
        bola.innerHTML = palpite[i];
        
        if (maisSorteados.includes(palpite[i])) {
            bolas.classList.add('bolas-mais');
        
        } else if (menosSorteados.includes(palpite[i])) {
            bolas.classList.add('bolas-menos');
        
        }
    }
});
