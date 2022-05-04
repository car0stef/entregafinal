//Funcion para preguntar modelo de remera de Niño
//Esta funcion está incluida en la funcion totalNinio
function preguntaN(){
    const modeloRemerasNinio = [
        {codigo: "1", modelo: "Batman"},
        {codigo: "2", modelo: "Hulk"},
        {codigo: "3", modelo: "Superman"}
    ];
        let preguntaNinio = prompt(`Ahora ¿Qué modelito desea seleccionar?\n
            ${modeloRemerasNinio[0].modelo}\n
            ${modeloRemerasNinio[1].modelo}\n
            ${modeloRemerasNinio[2].modelo}\n
            Presione ${modeloRemerasNinio[0].codigo}, ${modeloRemerasNinio[1].codigo} o ${modeloRemerasNinio[2].codigo} para seleccionar`);
        
        let resultNinio = modeloRemerasNinio.find(x => x.codigo === preguntaNinio);
            return alert(` Su modelo seleccionado es: ${resultNinio.modelo}`);
}

function totalNinio(cuanto){
                cuanto = parseInt(prompt("¿Cuántas remeras desea comprar?"));
                    let resultado = cuanto * 1500;
                        preguntaN();
                            return alert(`El total de su compra es: ${resultado}$`);
}


//Funcion para preguntar modelo de remera de Adulto
//Esta funcion está incluida en la funcion totalAdulto
function preguntaA(){
    const modeloRemerasAdulto = [
        {codigo: "1" , modelo: "Aries"},
        {codigo: "2" , modelo: "Géminis"},
        {codigo: "3" , modelo: "Capricornio"}
    ];  
        let preguntaAdulto = prompt(`Ahora ¿Qué modelo desea seleccionar?\n
            ${modeloRemerasAdulto[0].modelo} con código ${modeloRemerasAdulto[0].codigo}\n
            ${modeloRemerasAdulto[1].modelo} con código ${modeloRemerasAdulto[1].codigo}\n 
            ${modeloRemerasAdulto[2].modelo} con código ${modeloRemerasAdulto[2].codigo}\n`);

                let resultAdulto = modeloRemerasAdulto.find(x => x.codigo === preguntaAdulto);
                    return alert(` Su modelo seleccionado es: ${resultAdulto.modelo}`);
}

function totalAdulto(cuanto){
    cuanto = parseInt(prompt("¿Cuántas remeras desea comprar?"));
        let resultado = cuanto * 2300;
            preguntaA();
                return alert(`El total de su compra es: ${resultado} $`);
}

function saludo(){
    alert("Gracias por su compra. Vuelva Pronto");
}

//Aqui empieza el programa
function talle(){
    let tipoPersona = prompt("Comprar remeras para: Niño (1) Adulto (2)");    
    
        if (tipoPersona == "1") {
            let ninio = prompt("¿Qué talle desea seleccionar? 4 , 6 , 8 , 10");
                if((ninio == "4") || (ninio == "6") || (ninio == "8") || (ninio == "10")){
                    alert(`Se agregó correctamente el talle ${ninio}`);                    
                    totalNinio();
                    saludo();
                } else{
                    alert("Ud. necesita ingresar un talle válido");
                }
            }
            else if (tipoPersona == "2"){
            let adulto = prompt("¿Qué talle desea seleccionar? S, M, L, XL");
                if((adulto == "s") || (adulto == "m") || (adulto == "l") || (adulto == "xl")){
                    alert(`Se agregó correctamente el talle ${adulto}`);
                    totalAdulto();
                    saludo();
                }else{
                    alert("Debes ingresar un talle existente");
                }
            }
}

talle();