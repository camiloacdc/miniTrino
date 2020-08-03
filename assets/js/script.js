var btnTrinar = document.getElementById("btnTrinar");
var textoTrino = document.getElementById("textoTrino");

var objTrinos =[];


mostrar();

var html = "";
btnTrinar.onclick = function () {
    trinar();
};
function borrarTrino(trino) {
    objTrinos.splice(trino, 1)
    localStorage.removeItem('objTrinos', JSON.stringify(objTrinos));
    mostrar();
}
function mostrar() {
    html = `<div class="histoTrino">`;
    for (let i = 0; i < objTrinos.length; i++) {
        html += `<div class="container border border-dark mt-5">`;

        for (let key in objTrinos[i]) {

            html += objTrinos[i][key];
            
        }

        html += `<a class="btn text-danger removeItem" onclick="borrarTrino(${i})"> <span class="material-icons">
    delete_forever  </span></a>`
        html += `</div>`;

    }
    
    html += `</div>`;
    document.getElementById("containerTrinos").innerHTML = html;
    
    
    
}

function trinar() {
    if (textoTrino.value) {


       
        // const guardado = localStorage.getItem('objTrinos');
        // const list=guardado ? JSON.parse(guardado):[];




        objTrinos.unshift(
            {
                'fecha': Date(),
                'trino': textoTrino.value
            }
        )
        
        textoTrino.value = '';
        console.log(objTrinos)
        localStorage.setItem('objTrinos',JSON.stringify(objTrinos));
        mostrar();
        
       
    }
    else {
        html = "ingresa texto"
    }

}

function obtTrino(trino){
    const guardado = localStorage.getItem('objTrinos');
    const list=guardado ? JSON.parse(guardado):[];
    return list;
    console.log('objetoObtenido: ', JSON.parse(guardado));
}
