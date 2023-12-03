$("#mobile").click(function (e) {

  $("#nav").toggleClass("active");

});

function calcularprob() {

  var cp = $("#ff").val();
  var co = $("#pp").val();
  var resultado1 = cp / co;
  var resultado2 = 1 - resultado1;

  $("#r1").val(resultado1);
  $("#r2").val(resultado2);

}

function calculartria() {

  var ap = $("#apotema2").val();
  var ra = $("#Raio").val();
  var la = $("#Lado").val();

  if (ra == 0 && la == 0) {

    var raio = ap / 2;
    var lado = raio * Math.sqrt(3);

    var la = $("#Lado").val(lado);
    var ra = $("#Raio").val(raio);
  } else if (ap == 0 && la == 0) {

    var apotema = ra * 2;
    var lado = ra * Math.sqrt(3);

    var ap = $("#apotema2").val(apotema);
    var la = $("#Lado").val(lado);

  } else if (ap == 0 || ra == 0) {

    var raio = la / Math.sqrt(3);
    var apotema = raio * 2;

    var ap = $("#apotema2").val(apotema);
    var ra = $("#Raio").val(raio);

  } else {
    var raio = la / Math.sqrt(3);
    var apotema = raio * 2;

    var ap = $("#apotema2").val(apotema);
    var ra = $("#Raio").val(raio);
  }
}


function zerarrel() {
  var ap = $("#apotema2").val(null);
  var ra = $("#Raio").val(null);
  var la = $("#Lado").val(null);
}

function calcularCilindros() {
  var raio = parseFloat(document.getElementById('raio').value);
  var altura = parseFloat(document.getElementById('altura').value);

  var areaBase = Math.PI * Math.pow(raio, 2);
  var areaLateral = 2 * Math.PI * raio * altura;
  var areaTotal = 2 * areaBase + areaLateral;
  var volume = Math.PI * Math.pow(raio, 2) * altura;

  var resultados = `
        Área da Base (Ab) = ${areaBase.toFixed(2)} <br>
        Área Lateral (Al) = ${areaLateral.toFixed(2)} <br>
        Área Total (At) = ${areaTotal.toFixed(2)} <br>
        Volume (V) = ${volume.toFixed(2)}
    `;

  document.querySelector('.resultados').innerHTML = resultados;
}

function calcularcone() {
  const raio = parseFloat(document.getElementById('raio').value);
  const altura = parseFloat(document.getElementById('altura').value);
  const geratriz = parseFloat(document.getElementById('geratriz').value);

  if ((raio && altura) || (raio && geratriz) || (altura && geratriz)) {
    const areaLateral = raio && geratriz ? Math.PI * raio * geratriz : raio && altura ? Math.PI * raio * Math.sqrt(raio * raio + altura * altura) : Math.PI * geratriz * Math.sqrt(geratriz * geratriz - raio * raio);
    const areaTotal = raio ? (raio && geratriz) ? Math.PI * raio * (raio + geratriz) : raio && altura ? Math.PI * raio * (raio + Math.sqrt(raio * raio + altura * altura)) : Math.PI * raio * (2 * raio + geratriz) : Math.PI * raio * (2 * raio + geratriz);
    const volume = altura ? Math.PI * raio * raio * altura / 3 : raio && geratriz ? Math.PI * raio * raio * geratriz / 3 : geratriz ? Math.PI * raio * raio * Math.sqrt(geratriz * geratriz - raio * raio) / 3 : 0;

    document.getElementById('areaLateral').innerText = areaLateral.toFixed(2);
    document.getElementById('areaTotal').innerText = areaTotal.toFixed(2);
    document.getElementById('volume').innerText = volume.toFixed(2);
    document.getElementById('mensagemErro').innerText = "";
  } else {
    document.getElementById('mensagemErro').innerText = "Por favor, insira pelo menos dois valores para calcular.";
  }
}
function calculartronco() {
  const raioMaior = parseFloat(document.getElementById('RaioMaior').value);
  const raioMenor = parseFloat(document.getElementById('RaioMenor').value);
  const altura = parseFloat(document.getElementById('altura2').value);
  const geratriz = parseFloat(document.getElementById('geratriz2').value);

  if ((raioMaior && raioMenor && altura) || (raioMaior && raioMenor && geratriz)) {
    const areaLateral = raioMaior && raioMenor && geratriz ? Math.PI * geratriz * (raioMaior + raioMenor) : raioMaior && raioMenor && altura ? Math.PI * (raioMaior + raioMenor) * Math.sqrt((raioMaior - raioMenor) * (raioMaior - raioMenor) + altura * altura) : Math.PI * geratriz * (raioMaior + raioMenor);
    const areaTotal = raioMaior && raioMenor ? areaLateral + Math.PI * (raioMaior * raioMaior + raioMenor * raioMenor) : 0;
    const volume = raioMaior && raioMenor && altura ? (Math.PI * altura / 3) * (raioMaior * raioMaior + raioMenor * raioMenor + raioMaior * raioMenor) : 0;

    document.getElementById('areaLateral2').innerText = areaLateral.toFixed(2);
    document.getElementById('areaTotal2').innerText = areaTotal.toFixed(2);
    document.getElementById('volume2').innerText = volume.toFixed(2);
    document.getElementById('mensagemErro2').innerText = "";
  } else {
    document.getElementById('mensagemErro2').innerText = "Por favor, insira pelo menos três valores para calcular.";
  }
}
function calcularesfera() {
  const raioEsfera = parseFloat(document.getElementById('raioEsfera').value);
  const raioSecao = parseFloat(document.getElementById('raioSecao').value);
  const distanciaCentroSecao = parseFloat(document.getElementById('distanciaCentroSecao').value);
  const angulo = parseFloat(document.getElementById('angulo').value);

  if (raioEsfera && raioSecao && distanciaCentroSecao && angulo) {
    const volumeEsfera = (4 / 3) * Math.PI * Math.pow(raioEsfera, 3);
    const areaSuperficie = 4 * Math.PI * raioEsfera * raioEsfera;
    const areaFuso = (Math.PI * raioEsfera * raioEsfera * angulo) / 90;
    const areaCunha = (Math.PI * Math.pow(raioEsfera, 3) * angulo) / 270;

    document.getElementById('volumeEsfera').innerText = volumeEsfera.toFixed(2);
    document.getElementById('areaSuperficie').innerText = areaSuperficie.toFixed(2);
    document.getElementById('areaFuso').innerText = areaFuso.toFixed(2);
    document.getElementById('areaCunha').innerText = areaCunha.toFixed(2);
    document.getElementById('mensagemErro').innerText = "";
  } else {
    document.getElementById('mensagemErro').innerText = "Por favor, insira todos os valores para calcular.";
  }
}

function calcularprisma() {
  const tipoPrisma = document.getElementById('tipoPrisma').value;
  const valor1 = parseFloat(document.getElementById('valor1').value);
  const valor2 = parseFloat(document.getElementById('valor2').value);
  const altura = parseFloat(document.getElementById('altura').value);

  let resultado = "";
  if (tipoPrisma === "triangular") {
    const areaBase = (valor1 * altura) / 2;
    const areaLateral = valor1 * valor2;
    const volume = areaBase * altura;
    const areaTotal = 2 * areaBase + areaLateral;
    resultado = `Volume: ${volume.toFixed(2)}, Área Total: ${areaTotal.toFixed(2)}`;
  } else if (tipoPrisma === "paralelepipedo") {
    const volume = valor1 * valor2 * altura;
    const areaTotal = 2 * (valor1 * valor2 + valor1 * altura + valor2 * altura);
    resultado = `Volume: ${volume.toFixed(2)}, Área Total: ${areaTotal.toFixed(2)}`;
  } else if (tipoPrisma === "cubo") {
    const volume = valor1 * valor1 * valor1;
    const areaTotal = 6 * valor1 * valor1;
    resultado = `Volume: ${volume.toFixed(2)}, Área Total: ${areaTotal.toFixed(2)}`;
  } else if (tipoPrisma === "cunha") {
    // Fórmula específica para a cunha
    const areaBaseCunha = (valor1 * altura) / 2;
    const volumeCunha = areaBaseCunha * altura;
    resultado = `Volume da Cunha: ${volumeCunha.toFixed(2)}`;
  }

  document.getElementById('resultado').innerText = resultado;
}





$("#cc").click(calcularprob);
$("#ff").blur(calcularprob);
$("#pp").blur(calcularprob);

$("#calc_apot_raio").click(calculartria);

$("#zerarapt").click(zerarrel);
