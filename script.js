const bart = document.getElementById('bart')
const skinner = document.getElementById('skinner')
const botao = document.getElementById('botao')
const cont = document.getElementById('cont')
const pontuacao =document.getElementById('pontuacao')
let contagem = 0

document.addEventListener('keydown', function (x){
    x.preventDefault()
    if(x.key === 'Enter'){
        bart.classList.add('pular')//adicionando a classe pular no bart
        setTimeout(function(){
            bart.classList.remove('pular')//removendo a função pra podermos fazer o bart pular varias vezes
        },1000)
    }
})

function parando(){//funcao que faz o jogo parar quando o skinner chegar a 70px (posicao que encosta no bart)
    setInterval(() =>{
        const posicaoSkinner = skinner.offsetLeft
        const posicaoBart = +window.getComputedStyle(bart).bottom.replace('px','')//posicao do bart ao pular
        const contador = cont.offsetLeft

        if(posicaoSkinner <= 75 && posicaoSkinner >-30 && posicaoBart<90){
            skinner.style.animation = 'none'//parando corrida do skinner
            skinner.style.left = `${posicaoSkinner}px`

            cont.style.left = `${contador}px`
            
            bart.style.animation = 'none'
            bart.style.bottom = `${posicaoBart}px`

            botao.style.display = 'block'
            pontuacao.style.display = 'block'
            pontuacao.innerText = 'Sua pontuação '+Math.round((contagem/280)-1)+' pontos'
            
            botao.addEventListener('click', function(){
                location.reload()
            })
        }
        if(contador >= 500){
            contagem +=1
        }
    },10)
}



parando()