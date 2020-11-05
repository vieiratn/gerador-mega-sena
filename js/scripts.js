// Criando uma constante para receber o botão.
const guessGenerator = document.querySelector('.generate')

// Criação da lista com os 10 números mais sorteados da Mega-Sena.
const moreDrawn = [53, 10, 23, 05, 33, 04, 27, 54, 24, 42]

// Criação da lista com os 10 números menos sorteados da Mega-sena.
const lessDrawn = [42, 44, 21, 54, 56, 47, 51, 26, 07, 09]
    
/* Criando um evento que aguarda por um clique
    quando ele é dado, dispara uma função anônima. */
guessGenerator.addEventListener("click", () => {
    
// Criação da lista que irá receber todos os números do palpite.
    let guess = []

/* Criação das constantes que recebem os valores (mínimo e máximo)
    para enviar como parâmetro para a função que gera os números
    aleatórios. */
    const minimum = 1
    const maximum = 60
    const quantidade = 6

// Função para gerar numeros como Promise
const gerarNumero = (min, max, tamanho, numeros = new Set()) => {
    if (min > max) {
        [max, min] = [min, max];
    }
    if (tamanho < 1) {
        tamanho = 1;
    }
    return new Promise((resolve) => {
        const fator = max - min + 1;
        let num = parseInt((Math.random() * fator) + min)
        if (!numeros.has(num)) {
            numeros.add(num)
        }
        if (numeros.size !== tamanho) {
            return gerarNumero(min, max, tamanho, numeros).then(resolve);
        }
        else {
            resolve(numeros)
        }
    })
}

gerarNumero(minimum, maximum, quantidade)
    .then(numeros => {
        
        guess = Array.from(numeros).sort((a,b) => a-b)
    
        /* Iteração para preencher o HTML com os números da lista.
    Adicionalmente, estou manipulando o CSS, adicionando e
    removendo classes de acordo com os números mais e menos
    sorteados */
    for (i = 0; i < guess.length; i++) {
        
        let ball = document.querySelector(`#ball${i}`)
        let alertFlag = document.querySelector(`#alert${i}`)  
        
        ball.classList.remove('less-drawn', 'more-drawn')
        
        alertFlag.classList.remove('alert', 'alert-primary', 'alert-danger')

        alertFlag.innerHTML = ''

        ball.innerHTML = guess[i]
        
        if (moreDrawn.includes(guess[i])) {
            ball.classList.add('more-drawn')
            alertFlag.classList.add('alert', 'alert-danger')
            alertFlag.innerHTML = '🔥'
        
        } else if (lessDrawn.includes(guess[i])) {
            ball.classList.add('less-drawn')
            alertFlag.classList.add('alert', 'alert-primary')
            alertFlag.innerHTML = '🧊'
        
        }
    }
    
    })
    

});
