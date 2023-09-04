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

function calculartria(){

    var ap = $("#apotema2").val(); 
    var ra = $("#Raio").val();
    var la = $("#Lado").val();

    if( ra == 0 && la == 0){

        var raio = ap / 2;
        var lado = raio * Math.sqrt(3);

        var la = $("#Lado").val(lado);
        var ra = $("#Raio").val(raio);
    }else if( ap == 0 && la == 0 ){

        var apotema = ra * 2;
        var lado = ra * Math.sqrt(3);

        var ap = $("#apotema2").val(apotema);
        var la = $("#Lado").val(lado);

    }else if( ap == 0 || ra == 0){

        var raio = la / Math.sqrt(3);
        var apotema = raio * 2;

        var ap = $("#apotema2").val(apotema);
        var ra = $("#Raio").val(raio);

    }else{
        var raio = la / Math.sqrt(3);
        var apotema = raio * 2;

        var ap = $("#apotema2").val(apotema);
        var ra = $("#Raio").val(raio);
    }
}


function zerarrel(){
    var ap = $("#apotema2").val(null); 
    var ra = $("#Raio").val(null);
    var la = $("#Lado").val(null);
}


$("#cc").click(calcularprob);
$("#ff").blur(calcularprob);
$("#pp").blur(calcularprob);

$("#calc_apot_raio").click(calculartria);

$("#zerarapt").click(zerarrel);
