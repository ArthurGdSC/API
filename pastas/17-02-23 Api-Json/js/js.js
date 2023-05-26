fetch('dados.json')
    .then(response => response.json())
    .then(corpo => {

    document.getElementById('imagens').innerHTML = corpo.samba.image

    document.getElementById('nome').innerHTML = corpo.samba.name
    
    document.getElementById('disco').innerHTML = corpo.samba.album
    
    document.getElementById('estilo').innerHTML = corpo.samba.style
    
    document.getElementById('preco').innerHTML = corpo.samba.price

    //.....................................................................

    
    document.getElementById('imagens2').innerHTML = corpo.sertanejo.image

    document.getElementById('nome2').innerHTML = corpo.sertanejo.name
    
    document.getElementById('disco2').innerHTML = corpo.sertanejo.album
    
    document.getElementById('estilo2').innerHTML = corpo.sertanejo.style
    
    document.getElementById('preco2').innerHTML = corpo.sertanejo.price

    //.....................................................................

    
    document.getElementById('imagens3').innerHTML = corpo.rock.image

    document.getElementById('nome3').innerHTML = corpo.rock.name
    
    document.getElementById('disco3').innerHTML = corpo.rock.album
    
    document.getElementById('estilo3').innerHTML = corpo.rock.style
    
    document.getElementById('preco3').innerHTML = corpo.rock.price
   
   
})

