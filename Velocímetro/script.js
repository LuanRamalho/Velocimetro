var opts = {
  lines: 12,
  angle: 0.0,
  lineWidth: 0.44,
  pointer: {
    length: 0.5,
    strokeWidth: 0.035,
    color: 'red'
  },
  limitMax: false,
  colorStart: 'blue',
  colorStop: '#8FC0DA',
  strokeColor: '#E0E0E0',
  generateGradient: true
};

var target = document.getElementById('foo');
var gauge = new Gauge(target).setOptions(opts);
gauge.maxValue = 200; // Valor máximo do velocímetro
gauge.setMinValue(0); // Valor mínimo
gauge.animationSpeed = 32; // Velocidade de animação

function chamar() {
  var valor = parseInt(document.getElementById("campo").value);
  if (valor >= 0 && valor <= 200) {
    gauge.set(valor); // Define o valor do velocímetro
  } else {
    alert("Por favor, insira um número entre 0 e 200.");
  }
}
