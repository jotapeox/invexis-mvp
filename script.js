let grafico;

function calcular() {
  const capital = parseFloat(document.getElementById("capital").value);
  const aporte = parseFloat(document.getElementById("aporte").value);
  const anos = parseInt(document.getElementById("anos").value);
  const tipo = document.getElementById("tipoJuros").value;
  const etfSelect = document.getElementById("etf");
  const taxa = parseFloat(etfSelect.selectedOptions[0].dataset.taxa);

  let montante = capital;
  const valoresAno = [];

  for(let i = 1; i <= anos; i++){
    if(tipo === "simples"){
      montante = capital + (capital * taxa * i) + (aporte * 12 * i);
    } else {
      montante = montante * (1 + taxa) + aporte*12;
    }
    valoresAno.push(montante.toFixed(2));
  }

  const totalInvestido = capital + aporte*12*anos;
  const lucro = montante - totalInvestido;

  document.getElementById("resultado").innerHTML = `
    <p>Montante Final: €${montante.toFixed(2)}</p>
    <p>Total Investido: €${totalInvestido.toFixed(2)}</p>
    <p>Lucro Teórico: €${lucro.toFixed(2)}</p>
  `;

  // Atualizar gráfico
  const ctx = document.getElementById('grafico').getContext('2d');
  if(grafico) grafico.destroy(); // destrói gráfico antigo
  grafico = new Chart(ctx, {
    type: 'line',
    data: {
      labels: Array.from({length: anos}, (_, i) => `Ano ${i+1}`),
      datasets: [{
        label: `Projeção ${etfSelect.selectedOptions[0].text}`,
        data: valoresAno,
        borderColor: 'rgba(52, 152, 219,1)',
        backgroundColor: 'rgba(52, 152, 219,0.2)',
        fill: true,
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true
        }
      }
    }
  });
}