var toPdf = require("office-to-pdf")
var fs = require("fs")
var wordBuffer = fs.readFileSync("demo.docx")

toPdf(wordBuffer).then(
  (pdfBuffer) => {
    fs.writeFileSync("demo.pdf", pdfBuffer)
  }, (err) => {
    console.log(err)
  }
)