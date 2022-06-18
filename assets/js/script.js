function mudarCor() {
    const newcolor = document.getElementById('newcolor');
    const value = newcolor.value;
    const titulo = document.querySelector('h1#muda');
    if((value).toLowerCase() === 'black'){
        titulo.style.color = 'white';
    } else {
        titulo.style.color = 'black';
    }
    document.body.style.backgroundColor = newcolor.value;
}