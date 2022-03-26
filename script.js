// Missing NFL

let contadorCriacaoDicas = 0

let jogadorEscolhido = playersNFL[2]
//console.log(jogadorEscolhido);

// Ver se tem q ser aqui msm
let contadorRemoverParciais = 0

document.getElementById('jogador1').value = ''
document.getElementById('jogador2').value = ''
document.getElementById('jogador3').value = ''
document.getElementById('jogador4').value = ''
document.getElementById('jogador5').value = ''

document.body.addEventListener('keypress', function (event) {
    let teclaClickada = event.key
    
    let nomeParcial = document.getElementById('inputJogador').value + teclaClickada
    let contadorAparecerNomes = 0
   
    const bancoNomesParciais = []

    // FUNÇÃO PARA ADICIONAR OS NOMES AO BANCO DE DADOS
    for (let i = 0; i < playersNFL.length; i++){
        let substrJogador = playersNFL[i].name
        let jogadorSplitado = playersNFL[i].name.split(' ')
        //console.log(substrJogador.substr(0,nomeParcial.length));
        if (nomeParcial.toLowerCase() === substrJogador.substr(0,nomeParcial.length).toLowerCase() && contadorAparecerNomes < 5){
            //console.log(playersNFL[i]);
            bancoNomesParciais.push(playersNFL[i].name)
            contadorAparecerNomes++
        } else if (nomeParcial.toLowerCase() === jogadorSplitado[1].substr(0,nomeParcial.length).toLowerCase() && contadorAparecerNomes < 5) {
            //console.log(playersNFL[i]);
            bancoNomesParciais.push(playersNFL[i].name)
            contadorAparecerNomes++
        }
    }

    //console.log(bancoNomesParciais);
    
    document.getElementById('jogador1').value = ''
    document.getElementById('jogador2').value = ''
    document.getElementById('jogador3').value = ''
    document.getElementById('jogador4').value = ''
    document.getElementById('jogador5').value = ''

    document.getElementById('jogador1').value = bancoNomesParciais[0]
    document.getElementById('jogador2').value = bancoNomesParciais[1]
    document.getElementById('jogador3').value = bancoNomesParciais[2]
    document.getElementById('jogador4').value = bancoNomesParciais[3]
    document.getElementById('jogador5').value = bancoNomesParciais[4]

    // FUNÇÃO PARA MOSTRAR NA TELA OS NOMES
    if (teclaClickada === 'Enter'){

        console.log(teclaClickada);
        let valorInput = document.getElementById('inputJogador').value
        console.log(valorInput);

        // Isso aqui só poderá ser criado da primeira vez
        // Só aparecer quando o primeiro input valido 
        if (contadorCriacaoDicas === 0) {

            let valorInput = document.getElementById('inputJogador').value
            console.log(valorInput);
    
            let listaDeDicas = document.createElement('ul')
            document.getElementById('jogo').appendChild(listaDeDicas)
    
            let teamDicas = document.createElement('li')
            teamDicas.innerText = 'TEAM'
            listaDeDicas.appendChild(teamDicas)
    
            let confDicas = document.createElement('li')
            confDicas.innerText = 'CONF'
            listaDeDicas.appendChild(confDicas)
    
            let divDicas = document.createElement('li')
            divDicas.innerText = 'DIV'
            listaDeDicas.appendChild(divDicas)
    
            let posDicas = document.createElement('li')
            posDicas.innerText = 'POS'
            listaDeDicas.appendChild(posDicas)
            
            let ageDicas = document.createElement('li')
            ageDicas.innerText = 'AGE'
            listaDeDicas.appendChild(ageDicas)
    
            let numberDicas = document.createElement('li')
            numberDicas.innerText = '#'
            listaDeDicas.appendChild(numberDicas)
            contadorCriacaoDicas++
        }

        for (let i = 0; i < playersNFL.length; i++){
            if (valorInput.toLowerCase() === playersNFL[i].name.toLowerCase()){
                // Ver como apagar tudo apos dar Enter
                console.log(playersNFL[i]);    
                
                let palpites = document.createElement('ul')
                document.getElementById('jogo').appendChild(palpites)
                      
                let teamPalpite = document.createElement('li')
                teamPalpite.innerText = playersNFL[i].team
                palpites.appendChild(teamPalpite)
                if (jogadorEscolhido.team === playersNFL[i].team){
                    /*teamPalpite.style.border = 'greenyellow'
                    teamPalpite.style.boxSizing = 'border-box'*/
                    teamPalpite.style.backgroundColor = 'greenyellow'
                }

                let confPalpite = document.createElement('li')
                confPalpite.innerText = playersNFL[i].conf
                palpites.appendChild(confPalpite)
                if (jogadorEscolhido.conf === playersNFL[i].conf){
                    /*teamPalpite.style.border = 'greenyellow'
                    teamPalpite.style.boxSizing = 'border-box'*/
                    confPalpite.style.backgroundColor = 'greenyellow'
                }


                // Pegar o segundo nome da div
                let divPalpite = document.createElement('li')
                divPalpite.innerText = playersNFL[i].div
                palpites.appendChild(divPalpite)
                if (jogadorEscolhido.div === playersNFL[i].div){
                    /*teamPalpite.style.border = 'greenyellow'
                    teamPalpite.style.boxSizing = 'border-box'*/
                    divPalpite.style.backgroundColor = 'greenyellow'
                }

                let posPalpite = document.createElement('li')
                posPalpite.innerText = playersNFL[i].pos
                palpites.appendChild(posPalpite)
                if (jogadorEscolhido.pos === playersNFL[i].pos){
                    /*teamPalpite.style.border = 'greenyellow'
                    teamPalpite.style.boxSizing = 'border-box'*/
                    posPalpite.style.backgroundColor = 'greenyellow'
                }

                let agePalpite = document.createElement('li')
                agePalpite.innerText = playersNFL[i].age
                palpites.appendChild(agePalpite)
                if (jogadorEscolhido.age === playersNFL[i].age){
                    /*teamPalpite.style.border = 'greenyellow'
                    teamPalpite.style.boxSizing = 'border-box'*/
                    agePalpite.style.backgroundColor = 'greenyellow'
                }

                let numberPalpite = document.createElement('li')
                numberPalpite.innerText = playersNFL[i].number
                palpites.appendChild(numberPalpite)
                if (jogadorEscolhido.number === playersNFL[i].number){
                    /*teamPalpite.style.border = 'greenyellow'
                    teamPalpite.style.boxSizing = 'border-box'*/
                    numberPalpite.style.backgroundColor = 'greenyellow'
                }

                
                
            }
        }
    }
})
