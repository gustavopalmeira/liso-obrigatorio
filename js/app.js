function update() {
    var select = document.getElementById('qtd');
    var option = select.options[select.selectedIndex].value;
    var precoOriginal = 125 * option;
    var preco = 89 * option;
    var dividido = preco / 10;
    
    document.getElementById("p1").innerHTML = precoOriginal.toFixed(2);
    document.getElementById("p2").innerHTML = preco.toFixed(2);
    document.getElementById("p3").innerHTML = dividido.toFixed(2);


    console.log(precoOriginal);
    console.log(preco);
    console.log(dividido);
    
};



