function updatePriceAndDeadline() {
  const service = document.getElementById('service').value;
  const priceLabel = document.getElementById('price');
  const deadlineLabel = document.getElementById('deadline');
  const expectedDateLabel = document.getElementById('expectedDate');
  let deadlineDays;

  // Definindo preço e prazo de atendimento de acordo com o serviço selecionado
  switch(service) {
    case 'manutencao':
      priceLabel.textContent = 'R$ 100,00';
      deadlineDays = 1;
      break;
    case 'instalacao':
      priceLabel.textContent = 'R$ 150,00';
      deadlineDays = 2;
      break;
    case 'dev_software':
      priceLabel.textContent = 'R$ 500,00';
      deadlineDays = 3;
      break;
    case 'consultoria_seguranca':
      priceLabel.textContent = 'R$ 400,00';
      deadlineDays = 4;
      break;
    case 'infra_rede':
      priceLabel.textContent = 'R$ 300,00';
      deadlineDays = 5;
      break;
    case 'suporte_tecnico':
      priceLabel.textContent = 'R$ 150,00';
      deadlineDays = 2;
      break;
    case 'migracao_nuvem':
      priceLabel.textContent = 'R$ 600,00';
      deadlineDays = 6;
      break;
    case 'dev_apps':
      priceLabel.textContent = 'R$ 700,00';
      deadlineDays = 7;
      break;
    case 'analise_dados':
      priceLabel.textContent = 'R$ 800,00';
      deadlineDays = 8;
      break;
    default:
      priceLabel.textContent = 'R$ 100,00';
      deadlineDays = 1;
  }
  deadlineLabel.textContent = `${deadlineDays} dias`;

  // Cálculo da data estimada de entrega
  const today = new Date();
  const expectedDate = new Date();
  expectedDate.setDate(today.getDate() + deadlineDays);
  expectedDateLabel.textContent = expectedDate.toLocaleDateString('pt-BR');
}
  
  // Função para incluir uma nova solicitação na tabela
  function addRequest() {
    const previousRequestsTable = document.getElementById('previousRequests').getElementsByTagName('tbody')[0];
    const service = document.getElementById('service').options[document.getElementById('service').selectedIndex].text;
    const price = document.getElementById('price').textContent;
    const deadline = document.getElementById('deadline').textContent;
    const expectedDate = document.getElementById('expectedDate').textContent;
    const status = document.getElementById('status').textContent;
  
    // Criando uma nova linha na tabela
    const newRow = previousRequestsTable.insertRow();
  
    // Preenchendo as células da nova linha
    newRow.insertCell().textContent = (new Date()).toLocaleDateString('pt-BR');
    newRow.insertCell().textContent = '003'; // Número da solicitação fictício
    newRow.insertCell().textContent = service;
    newRow.insertCell().textContent = status;
    newRow.insertCell().textContent = price;
    newRow.insertCell().textContent = expectedDate;
    const deleteButtonCell = newRow.insertCell();
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Excluir';
    deleteButton.onclick = function() {
      previousRequestsTable.deleteRow(newRow.rowIndex);
    };
    deleteButtonCell.appendChild(deleteButton);
  }
  
  // Função para excluir uma solicitação da tabela
  function deleteRequest(rowIndex) {
    const previousRequestsTable = document.getElementById('previousRequests').getElementsByTagName('tbody')[0];
    previousRequestsTable.deleteRow(rowIndex);
  }
  