// Mapeia cidades para estados
const cityToState = {
    'São Paulo': 'São Paulo',
    'Rio de Janeiro': 'Rio de Janeiro',
    'Belo Horizonte': 'Minas Gerais',
    'Salvador': 'Bahia',
    'Fortaleza': 'Ceará',
    // Adicione outras cidades e estados aqui
};

function findState() {
    const cityInput = document.getElementById('cityInput').value;
    const result = document.getElementById('result');
    const state = cityToState[cityInput.trim()];
    
    if (state) {
        result.textContent = `A cidade ${cityInput} está no estado ${state}.`;
    } else {
        result.textContent = 'Cidade não encontrada. Verifique o nome e tente novamente.';
    }
}