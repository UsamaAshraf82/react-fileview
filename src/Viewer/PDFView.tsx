import * as React from 'react'
import { pdfjs, Document, Page } from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

interface Props {
  link: string
}
const PDFView: React.FC<Props> = ({ link }) => {
  return (
    <Document file={link} className="view react-pdf__Document">
      <Page pageNumber={1} />
    </Document>
  )
}
export default PDFView
