// Escribe un programa que pregunte al usuario el total de su compra y si tiene un código de descuento. Si el código es "DESCUENTO10", se aplicará un 10% de descuento. 
// Si el código es "DESCUENTO20", se aplicará un 20% de descuento.
//  Muestra el total después de aplicar el descuento, si corresponde, y un mensaje si el código no es válido. (10p)
let TotalCom=parseFloat(prompt("Ingrese el total de su compra :"));
let CodDes= parseInt(prompt("Digite si tiene descuento : DESCUENTO DEL 10% = 1  o  DESCUENTO DEL 20% = 2 "));
if(CodDes==1){
DESCUENTO10=TotalCom*0.1
DESCUENTO20=TotalCom*0.2
descuentotal=TotalCom-descuento
}
else if(CodDes==2){
    descuento=TotalCom*0.2
descuentotal=TotalCom-descuento
}
console.log(`El decuento total  aplicado a su compra es de : ${descuentotal}`);