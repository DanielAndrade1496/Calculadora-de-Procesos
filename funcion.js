function funcion(){
    var var1 =document.getElementById ('val1').value;
    var var2 =document.getElementById ('val2').value;
    window.alert("ES UN PLACER RESOLVER SUS OPERACIONES !!!");
    for(i=1; i<=5; i++){
        if(i==1){
            var suma = parseInt(var1) + parseInt(var2);
            document.getElementById ("sum").value =suma;
        }
        if(i==2){
            var resta = parseInt(var1) - parseInt(var2);
            document.getElementById ("res").value =resta;
        }
        if(i==3){
            var multiplicacion = parseInt(var1) * parseInt(var2);
            document.getElementById ("mul").value = multiplicacion;
        }
        if(i==4){
            var divicion= parseInt(var1) / parseInt(var2);
            document.getElementById ("div").value =divicion;
        }
        if(i==5){
            var cociente = parseInt(var1) % parseInt(var2);
            document.getElementById ("coc").value =cociente;
        }
    }
}