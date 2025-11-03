let grafico;

function calcular() {
  const capital = parseFloat(document.getElementById("capital").value);
  const aporte = parseFloat(document.getElementById("aporte").value);
  const anos = parseInt(document.getElementById("anos").value);
  const tipo = document.getElementById("tipoJuros").value;
  const etfSelect = document.getElementById("etf");
  const taxa = parseFloat(etfSelect.selectedOptions[0].dataset.taxa);
  const valoresAno = [];

  let montanteAporte = 0;
  if(tipo === "simples"){
    montante = capital (1 + taxa * i);
    for(int i = 0; i < anos*12; i++) {
      montanteAporte += aporte*(1 + taxa * ( (12*anos - i + 1 )/12) );
    }
  } else {
    montante = capital * (1 + taxa)**i;
    montanteAporte = aporte * ( ((1 + taxa/12)**(12*anos) - 1)/(taxa/12) )
  }
  
  montante += montanteAporte;
  valoresAno.push(montante.toFixed(2));
  

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

