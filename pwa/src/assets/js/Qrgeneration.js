import React, { useState } from 'react';
import '../css/main.css';
import QRCode from 'qrcode';

function Qrgeneration() {
    const [url,setUrl] = useState('')
    const [qrcode,setQrcode] = useState('')

        const GenerateQRCode = () => {
            QRCode.toDataURL(url, (err,url) => {
                if (err) return console.log(err)
                console.log(url)
                setQrcode(url)
            })
        }

  return (
    <> 
        <div className="generator">
            <h1>QR Generator</h1>
            <input type='text' placeholder='input URL e.g www.google.com' value={url} onChange={(event)=> setUrl(event.target.value)}/>
            <button onClick={GenerateQRCode}> Generate </button>
            <img src={qrcode} alt=' '/>
        </div>
    </>
  );
}

export default Qrgeneration;
