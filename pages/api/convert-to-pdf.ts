import type { NextApiRequest, NextApiResponse } from 'next'
const html_to_pdf = require('html-pdf-node');
import { CONFIG } from '../../config';
import { Portfolio } from '../../model/portfolio';
import { Skill } from '../../model/skill';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  // simple lists
  // const portfolioHtml =  (req.body.portfolio as Portfolio[]).map(p => `<li>${p.title}</li>`)
  // const skillsHtml =  (req.body.skills as any[]).map(s => `<li>${s.title}</li>`)
  const portfolioHtml =  (req.body.portfolio as Portfolio[]).map(p => `<div>${p.title} <br>${p.description}</div>`)
  const skillsHtml =  (req.body.skills as Skill[]).map(s => `<li>${s.title} <br>${s.description}</li>`)

  let file = { content: `
    <div>
      <h1 style="margin-bottom: 20px">${CONFIG.yourname}</h1>
      <h2 style="margin-bottom: 20px">${CONFIG.headline}</h2>
      <p style="margin-bottom: 20px">${CONFIG.bio}</p>
      <h1>Portfolio</h1>
      <ul>
        ${portfolioHtml.join('<br/>')}
      </ul>
      <hr>
      <h1>Skills</h1>
      <ul>
        ${skillsHtml.join('<br/>')}
      </ul>
    </div>
  `};

  html_to_pdf.generatePdf(file, { format: 'A4' }).then((pdfBuffer: any) => {
    res.setHeader('Content-Type', 'application/pdf')
    res.setHeader('Content-Disposition', 'attachment; filename=name.Pdf')
    res.setHeader('Content-Length', pdfBuffer.length)
    res.end(pdfBuffer)
  });
}
