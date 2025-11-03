<!DOCTYPE html>
<html lang="pt">
<head>
<meta charset="UTF-8">
<title>Invexis – Simulador de ETFs</title>
<!-- Chart.js CDN -->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<style>
  body {
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
    margin: 0;
    padding: 0 20px;
  }

  header {
    text-align: center;
    margin: 20px 0;
  }

  h1 { color: #2c3e50; }

  #aviso-legal {
    background-color: #fffbdd;
    border-left: 5px solid #f1c40f;
    padding: 10px;
    margin-bottom: 20px;
  }

  section {
    background-color: white;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 8px;
    box-shadow: 0px 2px 5px rgba(0,0,0,0.1);
  }

  label { display: block; margin: 10px 0; }

  input, select { padding: 5px; margin-left: 10px; }

  button {
    padding: 8px 16px;
    background-color: #3498db;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 4px;
    margin-top: 10px;
  }

  button:hover { background-color: #2980b9; }

  #resultado { margin-top: 15px; font-weight: bold; }

  #chart-container { margin-top: 20px; }
</style>
</head>
<body>
<header>
  <h1>Invexis</h1>
  <p>The Axis of Capital Growth</p>
</header>

<section id="aviso-legal">
  <p>
    A Invexis é uma plataforma educativa que oferece ferramentas de simulação financeira para fins académicos e informativos.
    Não presta aconselhamento financeiro personalizado, nem recomenda produtos de investimento.
  </p>
</section>

<section id="simulador">
  <h2>Simulador de ETFs</h2>
  <label>Valor Inicial (€): <input type="number" id="capital" value="1000"></label>
  <label>Aportes Mensais (€): <input type="number" id="aporte" value="0"></label>
  <label>Duração (anos): <input type="number" id="anos" value="5"></label>
  <label>Tipo de juros: 
    <select id="tipoJuros">
      <option value="simples">Simples</option>
      <option value="composto">Composto</option>
    </select>
  </label>
  <label>Escolha ETF: 
    <select id="etf">
      <option value="sp500"
