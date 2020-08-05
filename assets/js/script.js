var btnTrinar = document.getElementById("btnTrinar");
var textoTrino = document.getElementById("textoTrino");

// var objTrinos =[];
let objTrinos=obtTrino();

mostrar();

var html = "";
btnTrinar.onclick = function () {
    trinar();
};


function borrarTrino(trino) {
    objTrinos.splice(trino, 1)
     localStorage.setItem('objTrinos', JSON.stringify(objTrinos));
    mostrar();
}


function mostrar() {
    html = `<div class="histoTrino">`;
    
        
    
        for (let key in objTrinos) {
            html += `<div class="container border border-dark mt-5 "><div class="row  d-flex bd-highlight">`;
const fecha=objTrinos[key]['fecha'];
const trino=objTrinos[key]['trino']
            html += `<div class="p-2 flex-grow-1 bd-highlight trinos">${trino}</div><div class="fechas p-2 bd-highlight"> ${fecha}</div>`;
            
      

        html += `<div class="p-2 bd-highlight align-self-start"><a class="btn text-danger " onclick="borrarTrino(${key})"> <span class="material-icons removeItem">
    delete_forever  </span></a></div> </div><div class="row"><div><a class="btn text-danger " > <span class="material-icons">
    grade
    </span></a></div><div><a class="btn text-danger " > <span class="material-icons">
    wifi_protected_setup
    </span></a></div><div><a class="btn text-danger " > <span class="material-icons">
    comment_bank
    </span></a></div></div>`
        html += `</div>`;
    }
  
    
    html += `</div>`;
    document.getElementById("containerTrinos").innerHTML = html;
    
    
    
}

function trinar() {
    if (textoTrino.value) {

        
        objTrinos.push(
            {
                'fecha': Date(),
                'trino': textoTrino.value
            }
        )
        
        textoTrino.value = '';
        console.log(objTrinos)
        objTrinos.sort(function (a, b) {
            if (a.fecha > b.fecha) return -1;
            if (a.fecha < b.fecha) return 1;
            return 0;
          });
        localStorage.setItem('objTrinos',JSON.stringify(objTrinos));
        
        mostrar();

        
       
    }
    else {
        html = "ingresa texto"
    }

}

function obtTrino(){
    let objTrinos = localStorage.getItem('objTrinos');
objTrinos=objTrinos ? JSON.parse(objTrinos):[];
return objTrinos;
}


// function mostrar() {
//     html = `<div class="histoTrino">`;
//     for (let i = 0; i < objTrinos.length; i++) {
//         html += `<div class="container border border-dark mt-5">`;

//         for (let key in objTrinos[i]) {

//             html += objTrinos[i][key];
            
//         }

//         html += `<a class="btn text-danger removeItem" onclick="borrarTrino(${i})"> <span class="material-icons">
//     delete_forever  </span></a>`
//         html += `</div>`;

//     }
    
//     html += `</div>`;
//     document.getElementById("containerTrinos").innerHTML = html;
    
    
    
// }
