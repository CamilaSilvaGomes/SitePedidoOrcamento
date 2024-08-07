# SitePedidoOrcamento
Criação de Website com carregamento dinâmico de conteúdo estático através de AJAX.
A realização deste projeto consiste no aprofundamento dos conceitos incluídos no módulo “JavaScript/AJAX”, tendo em conta os seguintes objetivos de 
aprendizagem: 

- Desenvolvimento de elementos HTML e a sua estilização através de CSS. - Definição de variáveis, operadores, condições, funções e objetos JavaScript 
e criação de eventos. 
- Desenvolvimento de formulários em JavaScript. 
- Aplicação dos conceitos de AJAX, JSON e JQuery. 
- Uso de bibliotecas externas em JavaScript. 
- Integração de JavaScript/AJAX com outras linguagens de programação.

Requisitos funcionais que o website precisa atender: 
- Deve ser criada uma página para carregar notícias RSS externas, que podem vir de um ficheiro XML local. 

- Cinco segundos após o carregamento inicial do website, deverá ser exibida uma mensagem (um alert) de boas-vindas ao website. Só será iniciada após o carregamento do índice e não após o carregamento assíncrono do restante conteúdo da web. 

- O website deverá ter uma barra de menu superior. Esta barra deve ser fixa, sempre visível, e acompanhar o utilizador durante o scroll vertical. 

- O índice será a página principal e terá informações relacionadas com a atividade e alguns elementos destacados. Terá uma div central com o conteúdo HTML 
principal, onde será carregado o conteúdo AJAX. 

- No portfólio, deve ser implementada uma galeria dinâmica com JavaScript, em que, ao clicar nas imagens que compõem o referido portfólio, é aberto um se
parador com a imagem grande e as características do projeto (não têm de ser reais). 
Pode fazer um script manualmente ou usar qualquer plugin de galeria JavaScript ou jQuery e adaptá-lo ao website. 
  
- Na secção “Pedido de Orçamento”, o formulário deverá ser dinâmico (e com os campos idênticos aos da imagem), pois irá criar um orçamento com base nas 
opções selecionadas pelo utilizador. As alterações nos campos do formulário serão: 
No campo “Tipo de Página” devem ser colocadas várias opções com preços base diferentes (três ou quatro com taxas inventadas). 
O “Prazo em Meses” será um campo de entrada que só aceitará valores numéricos e, de acordo com o valor informado, será aplicado 5% de desconto sobre o orçamento total de cada mês de prazo que tiver para entrega (máximo 20%), mas não será aplicado um período máximo de meses. 
No campo “Separadores Desejados”, devem ser adicionados 400 euros extras para cada caixa marcada como separadores (antes da aplicação do desconto). 

- Por fim, o campo do orçamento final deve ser atualizado com quais quer alterações feitas no formulário sem atualizar a página, por exemplo, usando um evento onchange. 

- O design deve estar dentro da mesma linha de estilo em toda a página web e os campos devem ser validados antes do envio do formulário.

- A página “Contactos” será composta por um mapa dinâmico, em que, através de uma API, como o Google Maps ou outra API, como o OpenStreetMaps, aparece
rá a localização do escritório, e esta API deve ser usada para calcular um caminho da localização do cliente (usando, por exemplo, HTML5 Geolocation) para a 
morada do escritório.

- A página, para além do mapa e dos dados da empresa, também terá um formulário para deixar os dados de contacto do cliente (verificados com JavaScript): 
Nome, Apelido, Telemóvel, E-mail, Data e o Motivo do Contacto da Reunião (campo multilinha). Todos devem ser preenchidos para enviar. 
Utilize os campos de entrada do HTML5 para fazer uma primeira verificação dos dados mais básicos. 
