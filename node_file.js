const word2pdf = require('word2pdf');
const fs = require('fs');

const convert = async () => {
  const data = await word2pdf('demo.docx')
  fs.writeFileSync('demo.pdf', data);
}