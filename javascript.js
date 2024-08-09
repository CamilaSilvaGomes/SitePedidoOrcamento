// Função para calcular o orçamento
function calcularOrcamento(){

    let orcamentoTotal = 0;  // Inicializa o valor do orçamento total como 0
    let precoTipoPagina = 0;  // Inicializa o valor do preço do tipo de página como 0
    
    // Obtém o valor selecionado no elemento com ID 'tipopagina' e o converte para número
    precoTipoPagina = +document.getElementById('tipopagina').value;
    document.getElementById('valor-tipopagina').value = precoTipoPagina;  // Exibe o preço no campo 'valor-tipopagina'

    const form = document.getElementById('checkBoxGroup');  // Obtém o grupo de checkboxes
    let contar = 0;  // Inicializa o contador de páginas selecionadas
    let somaPaginas = 0;  // Inicializa a soma dos valores das páginas selecionadas
    
    // Loop para verificar cada elemento do formulário
    for (let i = 0; i < form.elements.length; i++) {
        const element = form.elements[i];  // Obtém o elemento atual
        // Verifica se o elemento é um checkbox e se está marcado
        if (element.type === 'checkbox' && element.checked){
            contar++;  // Incrementa o contador de páginas selecionadas
            somaPaginas += parseInt(element.value);  // Adiciona o valor do checkbox à soma
        }
    }

    const prazo = +document.getElementById('prazo').value;  // Obtém o valor do prazo
    let desconto = 1;  // Inicializa o desconto como 1 (sem desconto)
    
    // Aplica descontos dependendo do prazo selecionado
    if (prazo > 0) {
        switch(prazo){
            case 1:
                desconto *= 0.95;  // 5% de desconto
                break;
            case 2:
                desconto *= 0.9;  // 10% de desconto
                break;
            case 3:
                desconto *= 0.85;  // 15% de desconto
                break;
            default:
                desconto *= 0.8;  // 20% de desconto
                break;
        }
    }

    const result = document.getElementById('resultado');  // Obtém o elemento onde o resultado será exibido
    orcamentoTotal = (precoTipoPagina + somaPaginas) * desconto;  // Calcula o valor total do orçamento, aplicando o desconto

    // Exibe o resultado no elemento 'resultado'
    result.innerHTML = `Número de páginas selecionadas: ${contar}. valor total da soma a adicionar ao orçamento: ${orcamentoTotal}.`;
}

// Função para carregar notícias RSS
function carregar(){
    var url = 'https://news.google.com/rss?hl=pt-PT&gl=PT&ceid=PT:pt-150';  // URL do feed RSS do Google News
    
    // Faz uma requisição AJAX para a API RSS2JSON para converter o feed RSS em JSON
    $.ajax({
        url: "http://api.rss2json.com/v1/api.json?rss_url=" + url,
        type: 'GET',
        success: function (data) {
        var objeto_json = data;  // Armazena o JSON retornado na variável 'objeto_json'
                    
        // Verifica se há itens no feed
        if (objeto_json.items && objeto_json.items.length > 0) {
            var frase = "";  // Inicializa a variável para armazenar as notícias formatadas
            // Loop para processar cada item no feed
            for (var i = 0; i < objeto_json.items.length; i++) {
                frase += "Título: <b>" + objeto_json.items[i].title + "</b><br/>";  // Adiciona o título
                frase += objeto_json.items[i].description + "<br/><br/>";  // Adiciona a descrição
            }
            $("#caixa").html(frase);  // Insere o conteúdo formatado no elemento com ID 'caixa'
        } else {
            // Se não houver itens, exibe uma mensagem informando que não há notícias disponíveis
            $("#caixa").html("Nenhuma notícia disponível.");
        }
        },
        error: function (xhr, status) {
            // Exibe uma mensagem de erro se a requisição falhar
            alert('Ocorreu um erro.');
        }
    });
}

// Validação de formulário
var telemovelInput = document.getElementById('telemovel');  // Obtém o campo do telemóvel
var emailInput = document.getElementById('email');  // Obtém o campo do e-mail

// Função para validar o formulário
function validarFormulario() {
    // Verifica se o valor inserido no campo 'telemovel' é numérico
    if (isNaN(telemovelInput.value)) {
        alert('O número inserido não está correto.');
        return false;
    }

    // Verifica se o número tem 9 dígitos
    if (telemovelInput.value.length !== 9) {
        alert("O número de telemóvel deverá conter 9 dígitos.");
        return false;
    }

    // Verifica se o número começa com '9'
    if (!telemovelInput.value.startsWith('9')) {
        alert("Telemóvel não começa com 9");
        return false;
    }

    // Valida o e-mail
    if (!validarEmail(emailInput.value)) {
        return false;
    }

    alertaFinal();  // Exibe uma mensagem de sucesso
    return true;  // Retorna true se todas as validações forem bem-sucedidas
}

// Função para validar o formato do e-mail
function validarEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Expressão regular para validar o e-mail

    // Verifica se o e-mail corresponde ao formato esperado
    if (!re.test(String(email).toLowerCase())) {
        alert("Email inválido");
        return false;
    }

    return true;  // Retorna true se o e-mail for válido
}

// Função para exibir uma mensagem de sucesso
function alertaFinal() {
    alert("Obrigado pelo preenchimento do formulário. Todos os campos foram preenchidos corretamente.");
}
