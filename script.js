function criarAcronimo(palavras) {
    return palavras
        .filter(palavra => typeof palavra === 'string' && palavra.trim().length > 0)
        .map(palavra => palavra.trim()[0].toUpperCase())
        .join('');
}

function gerarAcronimo() {
    const input = document.getElementById('input-palavras');
    
    // Verifica se o elemento existe antes de acessar sua propriedade 'value'
    if (!input) {
        console.error("Elemento com ID 'input-palavras' não encontrado no DOM.");
        return;
    }

    const palavras = input.value.split(',');
    
    // Gera o acrônimo usando a função criarAcronimo
    const acronimo = criarAcronimo(palavras);
    
    const resultadoDiv = document.getElementById('resultado');
    
    // Verifica se o elemento de resultado existe
    if (!resultadoDiv) {
        console.error("Elemento com ID 'resultado' não encontrado no DOM.");
        return;
    }

    // Exibe o acrônimo ou uma mensagem de erro
    resultadoDiv.textContent = acronimo || "Por favor, insira palavras válidas!";
}
