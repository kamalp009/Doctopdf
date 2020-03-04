var docxConverter = require('docx-pdf');

docxConverter('demo.docx','demo.pdf',function(err,result){
  if(err){
    console.log(err);
  }
  console.log('result'+result);
});