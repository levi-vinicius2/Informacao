function leDados (){
    let strNome = document.getElementsByName('nome');
    let strEmail = document.getElementsByName('email');
    let strComentario = document.getElementsByName('Comentarios');
    let info = JSON.parse(localStorage.getItem('db'))
    if (info == null)
    {
        localStorage.setItem('db', '[]');
        info = [];
    }
    let registro = {
        nome: strNome.value,
        email: strEmail.value,
        comentario: strComentario.value
    }
    info.push(registro);
    localStorage.setItem('db', JSON.stringify(info));
    alert('Comentário feito com sucesso!');
    strNome = '';
    strEmail = '';
    strComentario = '';
}


document.getElementsByName('BTEnvia').addEventListener ('click', leDados);