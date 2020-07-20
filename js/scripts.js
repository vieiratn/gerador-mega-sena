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

// Função principal para gerar um número aleatório.
    function randInt(min, max) {
        let num = Math.random() * (max - min) + min
        return Math.floor(num)
    }

// Função para ordenar os números da lista.
    function sortNumbers(number1, number2) {
        return (number1 - number2)
    }

// Loop para colocar os números dentro da lista.
    let cont = 0
    while (guess.length < 6) {
        let ball = randInt(minimum, maximum)

// Condicional que verifica se o número aleatório já existe na lista.
        if (guess.indexOf(ball) === -1) {
            guess.push(ball)
            cont++
        }   
    }

// Utilizando a função para ordenar os itens da lista.
    guess.sort(sortNumbers)
    
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
});
