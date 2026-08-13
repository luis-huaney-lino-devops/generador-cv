// ============================================================================
//  cv_lib.js  —  Motor de generación del CV (diseño serif idéntico al original)
//  No editar salvo que quieras cambiar el ESTILO. El CONTENIDO va en
//  contenido_es.js / contenido_en.js. La IA/agente edita el contenido, no esto.
// ============================================================================
const fs = require('fs');
const path = require('path');
const sizeOf = require('image-size');
const {
  Document, Packer, Paragraph, TextRun, AlignmentType, LevelFormat,
  BorderStyle, TabStopType, ExternalHyperlink, ImageRun, PageBreak
} = require('docx');

const FONT = "Times New Roman";
const CONTENT_WIDTH = 9746;                 // A4 (11906) - 2*1080 margen
const RT = [{ type: TabStopType.RIGHT, position: CONTENT_WIDTH }];

const heading = (text) => new Paragraph({
  spacing: { before: 200, after: 100 },
  border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "000000", space: 3 } },
  children: [new TextRun({ text, bold: true, size: 24, font: FONT })],
});

const bullet = (text, size = 22) => new Paragraph({
  numbering: { reference: "bullets", level: 0 },
  spacing: { after: 40 },
  children: [new TextRun({ text, size, font: FONT })],
});

const entry = (leftTitle, location, subtitle, dates, opts = {}) => {
  const paras = [
    new Paragraph({
      spacing: { before: 130, after: 0 }, tabStops: RT,
      children: [
        new TextRun({ text: leftTitle, bold: true, size: 22, font: FONT, allCaps: !!opts.caps }),
        new TextRun({ text: `\t${location}`, bold: true, size: 22, font: FONT }),
      ],
    }),
    new Paragraph({
      spacing: { after: opts.subtitulo ? 0 : 60 }, tabStops: RT,
      children: [
        new TextRun({ text: subtitle, size: 22, font: FONT }),
        new TextRun({ text: `\t${dates}`, italics: true, size: 22, font: FONT }),
      ],
    }),
  ];
  if (opts.subtitulo) {
    paras.push(new Paragraph({
      spacing: { after: 30 },
      children: [new TextRun({ text: opts.subtitulo, italics: true, size: 20, font: FONT, color: "595959" })],
    }));
  }
  return paras;
};

const contactoLine = (label, value) => new Paragraph({
  spacing: { before: 20, after: 60 }, indent: { left: 360 },
  children: [
    new TextRun({ text: `${label}: `, bold: true, size: 20, font: FONT }),
    new TextRun({ text: value, size: 20, font: FONT }),
  ],
});

const skillCat = (label) => new Paragraph({
  spacing: { before: 80, after: 30 },
  children: [new TextRun({ text: label, bold: true, size: 22, font: FONT })],
});

const yearLabel = (y) => new Paragraph({
  spacing: { before: 90, after: 30 },
  children: [new TextRun({ text: y, size: 22, font: FONT })],
});

// -------- Anexo de imágenes (certificados / constancias) --------
function buildAnnex(evidenciasDir, labels) {
  const kids = [];
  const groups = [
    { dir: 'certificados', title: labels.certificados },
    { dir: 'constancias_laborales', title: labels.constancias },
  ];
  let any = false;
  const first = [];
  for (const g of groups) {
    const full = path.join(evidenciasDir, g.dir);
    if (!fs.existsSync(full)) continue;
    const imgs = fs.readdirSync(full)
      .filter(f => /\.(png|jpe?g|gif)$/i.test(f)).sort();
    if (!imgs.length) continue;
    any = true;
    kids.push(new Paragraph({
      spacing: { before: 160, after: 100 },
      border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "000000", space: 3 } },
      children: [new TextRun({ text: g.title, bold: true, size: 24, font: FONT })],
    }));
    for (const file of imgs) {
      const data = fs.readFileSync(path.join(full, file));
      let dim; try { dim = sizeOf(data); } catch { dim = { width: 600, height: 400 }; }
      const maxW = 560;
      const w = Math.min(maxW, dim.width);
      const h = Math.round(w * (dim.height / dim.width));
      const caption = file.replace(/\.(png|jpe?g|gif)$/i, '').replace(/[_-]+/g, ' ');
      kids.push(new Paragraph({
        spacing: { before: 60, after: 20 },
        children: [new TextRun({ text: caption, bold: true, size: 20, font: FONT })],
      }));
      kids.push(new Paragraph({
        spacing: { after: 120 }, alignment: AlignmentType.CENTER,
        children: [new ImageRun({
          data,
          transformation: { width: w, height: h },
          type: /png$/i.test(file) ? 'png' : (/gif$/i.test(file) ? 'gif' : 'jpg'),
        })],
      }));
    }
  }
  if (!any) return [];
  return [new Paragraph({ children: [new PageBreak()] }),
          new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 120 },
            children: [new TextRun({ text: labels.anexos, bold: true, size: 28, font: FONT, allCaps: true })] }),
          ...kids];
}

// ---------------------------- Documento completo ----------------------------
function buildDoc(c, options = {}) {
  const L = c.labels;
  const children = [];

  // HEADER
  children.push(new Paragraph({
    alignment: AlignmentType.CENTER, spacing: { after: 40 },
    children: [new TextRun({ text: c.nombre, bold: true, size: 40, font: FONT, characterSpacing: 30 })],
  }));
  // Titular (línea nueva: rol + stack + años)
  children.push(new Paragraph({
    alignment: AlignmentType.CENTER, spacing: { after: 40 },
    children: [new TextRun({ text: c.titular, size: 22, font: FONT, color: "333333" })],
  }));
  // Contacto
  const cc = c.contacto;
  children.push(new Paragraph({
    alignment: AlignmentType.CENTER, spacing: { after: 60 },
    children: [
      new TextRun({ text: `${cc.ubicacion}  •  `, size: 22, font: FONT }),
      new ExternalHyperlink({ link: cc.portafolioUrl, children: [new TextRun({ text: cc.portafolioTexto, size: 22, font: FONT, color: "0563C1", underline: {} })] }),
      new TextRun({ text: `  •  ${cc.telefono}  •  `, size: 22, font: FONT }),
      new ExternalHyperlink({ link: `mailto:${cc.email}`, children: [new TextRun({ text: cc.email, size: 22, font: FONT, color: "0563C1", underline: {} })] }),
    ],
  }));
  children.push(new Paragraph({
    spacing: { after: 100 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "000000", space: 2 } },
    children: [new TextRun({ text: "", size: 2, font: FONT })],
  }));
  // Perfil
  children.push(new Paragraph({
    alignment: AlignmentType.JUSTIFIED, spacing: { after: 40 },
    children: [new TextRun({ text: c.perfil, italics: true, size: 22, font: FONT })],
  }));

  // EXPERIENCIA
  children.push(heading(L.experiencia));
  for (const e of c.experiencia) {
    children.push(...entry(e.empresa, e.ubicacion, e.cargo, e.fechas, { subtitulo: e.subtitulo }));
    for (const b of e.bullets) children.push(bullet(b));
    if (e.contacto) children.push(contactoLine(L.contacto, e.contacto));
  }

  // EDUCACIÓN
  children.push(heading(L.educacion));
  for (const ed of c.educacion) children.push(...entry(ed.institucion, ed.ubicacion, ed.detalle, ed.fechas, { caps: true }));

  // SKILLS ADICIONALES
  children.push(heading(L.skillsAdicionales));
  for (const s of c.skillsAdicionales) children.push(bullet(s));

  // DESARROLLO PROFESIONAL
  children.push(heading(L.desarrollo));
  for (const grp of c.desarrollo) {
    children.push(yearLabel(grp.anio));
    for (const it of grp.items) children.push(bullet(it));
  }

  // HABILIDADES
  children.push(heading(L.habilidades));
  for (const h of c.habilidades) {
    children.push(skillCat(h.cat));
    for (const b of h.bullets) children.push(bullet(b));
  }

  // IDIOMAS
  children.push(heading(L.idiomas));
  for (const i of c.idiomas) children.push(bullet(i));

  // ANEXOS (solo versión completa)
  if (options.completo && options.evidenciasDir) {
    children.push(...buildAnnex(options.evidenciasDir, L));
  }

  return new Document({
    styles: { default: { document: { run: { font: FONT, size: 22 } } } },
    numbering: { config: [{ reference: "bullets", levels: [{
      level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT,
      style: { paragraph: { indent: { left: 620, hanging: 260 } } }
    }] }] },
    sections: [{
      properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1080, right: 1080, bottom: 1080, left: 1080 } } },
      children,
    }],
  });
}

async function writeDoc(doc, outPath) {
  const buf = await Packer.toBuffer(doc);
  fs.writeFileSync(outPath, buf);
  return outPath;
}

module.exports = { buildDoc, writeDoc };
