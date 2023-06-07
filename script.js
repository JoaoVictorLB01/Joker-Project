const btn = document.querySelector('#precos')
btn.style.display = 'none'
const button = document.querySelector('#button')

function clicar(){
    if(btn.style.display === 'flex'){
        btn.style.display = 'none'
        document.getElementById('button').innerHTML = 'Comprar'
    }
    else{
        document.getElementById('button').innerHTML = 'voltar'
        btn.style.display = 'flex'
    }
}