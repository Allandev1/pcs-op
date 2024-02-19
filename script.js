function doPost(e) {
    // Capturar os dados do corpo da solicitação POST
    var requestData = JSON.parse(e.postData.contents);
    var comment = requestData.comment;
  
    // Abrir a planilha ativa
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
    // Adicionar uma nova linha com os dados do comentário
    sheet.appendRow([comment]);
  
    // Responder à solicitação
    return ContentService.createTextOutput("Comentário salvo com sucesso no Google Sheets.");
  }