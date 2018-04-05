function doGet() {
    return HtmlService.createHtmlOutputFromFile('email');
}

function doPost(e) {

    var json = JSON.parse(e.postData.contents);

   // this variable will store the information we want to send to the email
    var response = sendMail({
        name: json.name,
        email: json.email,
        subject: json.subject,
        body: json.body
    })
    
    // this function sends data to sheet
    sendDataToSheet({
        name: json.name,
        email: json.email,
        subject: json.subject,
        body: json.body
    })

    return ContentService.createTextOutput(JSON.stringify(response)).setMimeType(ContentService.MimeType.JSON);
}


function sendMail(data) {
    try {
        var html = HtmlService.createTemplateFromFile('email');
        html.name = data.name;
        html.email = data.email;
        html.subject = data.subject;
        html.body = data.body;


        GmailApp.sendEmail('gabriel.chivoiu@seers.ro', ' [CONTACT FORM - ' + data.subject + '] ', data.body, {
            name: 'Contact Form - Tema examen',
            replyTo: data.email,
            htmlBody: html.evaluate().getContent()
        })

        return {
            code: 'success',
            msg: 'Va multumim!'
        }

    }

    catch (err) {
        return {
            code: 'danger',
            msg: 'Formularul nu a putut fi transmis!'
        }
    }

}

function sendDataToSheet(pDataForSheet) {

    try {

        // add you own 
        var sheet = SpreadsheetApp.openById('1QU9fe0_8cLGb6mFTIKU0lYl5Cer-RQZ8svQFln6pSWA').getActiveSheet();
        sheet.appendRow([pDataForSheet.name, pDataForSheet.email, pDataForSheet.subject, pDataForSheet.body]);
        return 'Success writing to Sheet!';

    }

   catch (err) {

         return 'Error writing to Sheet!';
                         
  }

}
