$("#mobile").click(function (e) { 
    
    $("#nav").toggleClass("active");

});

function calcularprob(){

    var cp = $("#ff").val(); 
    var co = $("#pp").val();
    var resultado1 = cp  / co;
    var resultado2 = 1 - resultado1;

    $("#r1").val(resultado1);
    $("#r2").val(resultado2);

}

$("#cc").click(calcularprob);
$("#ff").blur(calcularprob);
$("#pp").blur(calcularprob);
