function verificar(){

    let data = new Date()
    let ano = data.getFullYear()//pega os 4 digitos do ano
    let fano = document.getElementById('txtano')
    let res = document.querySelector('#res')//jeito mais moderno de pegar o dado

    if(fano.value.length === 0 || Number(fano.value) > ano){
        alert('Verifque os dados e tente novamente :( ')
    }else{
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')//criando uma tag em javascript
        img.setAttribute('id', 'foto')//setando o id para foto (img id="foto")

        if(fsex[0].checked){
            genero = 'Homem'

        if(idade >=0 && idade < 10){
            img.setAttribute('src', 'imagens/menino.png')
        }else if (idade < 21){
            img.setAttribute('src', 'imagens/homemjovem.png')
        }
        else if (idade < 50){
            img.setAttribute('src', 'imagens/homem.png')
        }
        else {
            img.setAttribute('src', 'imagens/idoso.png')
        }

        } else if (fsex[1].checked){
            genero = 'Mulher'

            if(idade >=0 && idade < 10){
                img.setAttribute('src', 'imagens/menina.png')
                document.body.style.backgroundColor = 'pink'
            }else if (idade < 21){
                img.setAttribute('src', 'imagens/mulherjovem.png')
            }
            else if (idade < 50){
                img.setAttribute('src', 'imagens/mulher.png')
            }
            else {
                img.setAttribute('src', 'imagens/idosa.png')
            }
        }

        if(genero === 'Mulher' && fsex[1].checked)
        {
            document.body.style.backgroundColor = 'pink'
        }else{
            document.body.style.backgroundColor = 'rgb(55, 55, 167)'
        }

        res.style.textAlign = 'center'
        res.style.color = 'red'
        res.innerHTML = `Detectamos: ${genero} com ${idade} anos`
        res.appendChild(img)//acrescenta a image usando appendChild
    }

}


