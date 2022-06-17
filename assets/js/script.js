function mudarCor() {
    const newcolor = document.getElementById('newcolor');
    const titulo = document.querySelector('h1#muda');
    const value = newcolor.value;
    if(value === 'black'){
        titulo.style.color = 'white';
    } else {
        titulo.style.color = 'black';
    }
    document.body.style.backgroundColor = newcolor.value;
}