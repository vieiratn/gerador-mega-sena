// Função principal que será chamada no clique do botão.
function palpites() {
    
    // Criação da lista que irá receber todos os números do palpite.
    let palpite = []

    // Função principal para gerar um número aleatório.
    function randInt(min, max) {
        let num = Math.random() * (max - min) + min
        return Math.floor(num)
    }

    // Loop para colocar os números dentro da lista.
    let cont = 0
    while (palpite.length < 6) {
        let bola = randInt(1,60)
    
        // Condicional que verifica se o número aleatório já existe na lista.
        if (palpite.indexOf(bola) === -1) {
            palpite.push(bola)
            cont ++
        }
    }

    // Função para ordenar os números da lista.
    function ordenar(a, b){
        return (a - b)
      }

    // Loop para exibir os valores da lista ordenada dentro das bolas.
    for (let c = 0; palpite.length <= 6; c ++) {
        var msbola = document.getElementById(`bl${c}`)
        palpite.sort(ordenar)
        msbola.innerHTML = palpite[c]
    }

}