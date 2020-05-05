function palpites() {

    let palpite = []

    function randInt(min, max) {
        let num = Math.random() * (max - min) + min
        return Math.floor(num)
    }

    let cont = 0
    while (palpite.length < 6) {
        let bola = randInt(1,60)
    
        if (palpite.indexOf(bola) === -1) {
            palpite.push(bola)
            cont ++
        }
    }

    for (let c = 0; palpite.length <= 6; c ++) {
        var msbola = document.getElementById(`bl${c}`)
        msbola.innerHTML = palpite[c]
        
    }

}