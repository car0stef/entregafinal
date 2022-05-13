const divMain = document.getElementById("divMain");

const remerasAdulto = [
    {codigo: "1" , modelo: "Aries", precio:2300, imagen: "<img src=./images/remera.jpg> </img>"},
    {codigo: "2" , modelo: "Géminis", precio:2300, imagen: "<img src=./images/remera.jpg> </img>"},
    {codigo: "3" , modelo: "Leo", precio:2300, imagen: "<img src=./images/remera.jpg> </img>"},
    {codigo: "4" , modelo: "Capricornio", precio:2300, imagen: "<img src=./images/remera.jpg> </img>"},
    {codigo: "5" , modelo: "Piscis", precio:2300, imagen: "<img src=./images/remera.jpg> </img>"},
    {codigo: "6" , modelo: "Sagitario", precio:2300, imagen: "<img src=./images/remera.jpg> </img>"},
    {codigo: "7" , modelo: "Escorpio", precio:2300, imagen: "<img src=./images/remera.jpg> </img>"},
    {codigo: "8" , modelo: "Cáncer", precio:2300, imagen: "<img src=./images/remera.jpg> </img>"},
    {codigo: "9" , modelo: "Tauro", precio:2300, imagen: "<img src=./images/remera.jpg> </img>"},
    {codigo: "10" , modelo: "Virgo", precio:2300, imagen: "<img src=./images/remera.jpg> </img>"},
    {codigo: "11" , modelo: "Acuario", precio:2300, imagen: "<img src=./images/remera.jpg> </img>"},
    {codigo: "12" , modelo: "Libra", precio:2300, imagen: "<img src=./images/remera.jpg> </img>"},
];

const card = (remerasAdulto) =>{
    return `
        <div class="card mx-4 my-4" style="width: 15rem;">
            <img > ${remerasAdulto.imagen} </img>
                <div class="card-body">
                    <h2 class="h5"> ${remerasAdulto.modelo}</h2>
                    <p class="card-text"> Código: ${remerasAdulto.codigo} </p>
                    <a href= "#" onclick = boton(${remerasAdulto.codigo}) class="btn btn-primary">Comprar producto </a>
                </div>
        </div> `
}

const productos =(remeras, nodoDivMain)=>{
    let acumulador = "";
    remeras.forEach((remeraAdulto) => {
        acumulador = acumulador + card(remeraAdulto);
    })
    nodoDivMain.innerHTML=acumulador;
};

function boton(codigo, modelo) {
    const encontrar = remerasAdulto.find(item => item.codigo == codigo);
    alert("Agregaste el artículo Nº " + encontrar.codigo);
}
productos(remerasAdulto, divMain);


