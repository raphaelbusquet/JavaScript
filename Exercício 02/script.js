function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')


        if (fsex[0].checked){
            genero = 'homem'
            if (idade >= 0 && idade < 10){
                img.src = 'menino.jpg'
            } else if (idade < 21){
                img.src = 'jovemm.jpg'
            } else if (idade < 50){
                img.src = 'adulto.jpg'
            } else {
                img.src = 'senhor.jpg'
            }
        } else  if (fsex[1].checked){
            genero = 'mulher'
            if (idade >= 0 && idade < 10){
                img.src = 'menina.jpg'
            } else if (idade < 21){
                img.src = 'jovemf.jpg'
            } else if (idade < 50){
                img.src = 'adulta.jpg'
            } else {
                img.src = 'senhora.jpg'
            }

            /* 
            
            -Também pode ser feito dessa forma:

             if (fsex[0].checked){
            genero = 'homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src','menino.jpg')
            } else if (idade < 21){
                img.setAttribute('src','jovemm.jpg')
            } else if (idade < 50){
                img.setAttribute('src','adulto.jpg')
            } else {
                img.setAttribute('src','senho.jpg')
            }
        } else  if (fsex[1].checked){
            genero = 'mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src','menina.jpg')
            } else if (idade < 21){
                img.setAttribute('src', 'jovemf.jpg')
            } else if (idade < 50){
                img.setAttribute('src', 'adulta.jpg')
            } else {
                img.setAttribute('src', 'senhora.jpg')
            }

            */
        }
        res.style.textAllign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }   
} 