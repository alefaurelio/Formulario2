var data=new Date();
var hora=data.getHours();
if (hora < 12)
{
document.write("<b>Bom dia!"); // Escreve um “Bom dia” se hora menor que 12.
}
else if (hora < 18)
{
document.write("<b>Boa tarde!"); // Escreve um “Boa tarde!” se hora entre 12 e 18.
}
else // se hora maior ou igual a 18, escreve Boa noite!
{
document.write("<b>Boa noite!");
}
document.writeln(" Hoje é " );
document.writeln( data +"!</b>" );