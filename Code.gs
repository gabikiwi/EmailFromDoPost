function doGet() {
   return HtmlService.createHtmlOutputFromFile('email');
 }

function doPost(e) {
  
  var json = JSON.parse(e.postData.contents);
  
  var response = sendMail({
    name: json.name,
    email: json.email,
    subject: json.subject,
    body: json.body   
  })
  
  return ContentService.createTextOutput(JSON.stringify(response)).setMimeType(ContentService.MimeType.JSON);
}


function sendMail(data) {
  try { 
    var html     = HtmlService.createTemplateFromFile('email');
    html.name    = data.name;
    html.email   = data.email;
    html.subject = data.subject;
    html.body    = data.body;
    
  
   GmailApp.sendEmail('gabriel.chivoiu@gmail.com', data.subject + ' [CONTACT FORM]', data.body, {
                       name : 'Contact Form',
                       replyTo : data.email,
                       htmlBody : html.evaluate().getContent()
                     })
       
  return {
    code : 'success',
    msg: 'Va multumim pentru sugestie!'
  }
                     
  }
  
  catch (err){    
    return {
    code : 'danger',
    msg: 'Formularul nu a putut fi transmis!' 
  }}
  
}