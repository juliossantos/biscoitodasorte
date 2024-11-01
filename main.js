const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const cookieClosed = document.querySelector(".cookieClosed")
const button = document.querySelector(".button")
const cookieText = [
"O temor do Senhor é o princípio do conhecimento, mas os insensatos desprezam a sabedoria e a disciplina.",
"Confie no Senhor de todo o seu coração e não se apoie em seu próprio entendimento; reconheça o Senhor em todos os seus caminhos, e ele endireitará as suas veredas.",
"Acima de tudo, guarde o seu coração, pois dele depende toda a sua vida.",
"O temor do Senhor é o princípio da sabedoria, e o conhecimento do Santo é entendimento.",
"O ódio provoca dissensão, mas o amor cobre todos os pecados.",
"A alma generosa prosperará; quem dá alívio aos outros, alívio receberá.",
"Aquele que ama a disciplina ama o conhecimento, mas quem odeia a repreensão é tolo.",
"Quem guarda a sua boca preserva a sua vida, mas quem fala demais acaba se arruinando.",
"A resposta branda desvia o furor, mas a palavra ríspida desperta a ira.",
"Consagre ao Senhor tudo o que você faz, e os seus planos serão bem-sucedidos.",
"Em seu coração o homem planeja o seu caminho, mas o Senhor determina os seus passos."
]

let rendoNumber = Math.round(Math.random() * 10) 


cookieClosed.addEventListener("click", handleClick)
button.addEventListener("click", handleClick)


function handleClick(){
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')    
    
    screen2.querySelector('.msg').innerText = cookieText[rendoNumber]
    
    rendoNumber = Math.round(Math.random() * 10) 
}