import qr from 'qr-image';
import * as fs from 'fs'
import qrcode from 'qrcode'
import base64 from 'base64-js'
export const GetQr = async (req, res) => {
  const { id } = req.params;
  const urlToEncode = 'http:http://localhost:3000/qr/' + id;
  // Configuración del código QR
  const qrCode = qr.image(urlToEncode, { type: 'png' });

  // Almacenar la imagen en un búfer
  let buffer = Buffer.alloc(0);

  qrCode.on('data', (chunk) => {
    buffer = Buffer.concat([buffer, chunk]);
  });

  qrCode.on('end', () => {
    // Obtener la representación en base64
    const base64Image = base64.fromByteArray(buffer);

    // Enviar la representación en base64 como respuesta
    res.status(200).json({ qrCode: base64Image,url:urlToEncode });
  })

}