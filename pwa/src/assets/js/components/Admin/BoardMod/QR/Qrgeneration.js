import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode';

const Qrgeneration = (props) => {
    const [qrcode,setQrcode] = useState('')
    const [revealQr, setRevealQr] = useState(false);

    const GenerateQRCode = (url) =>{
        QRCode.toDataURL(url, (err,url) => {
            if (err) return console.log(err)
            setQrcode(url)
        })
    }

    useEffect(
        () => {
            GenerateQRCode(props.url);
        }

    ,[props.url])


  return (
    <> 
        <div className="generator">
            {revealQr === true && <img src={qrcode} alt=' '/>}
            <button onClick={()=>{setRevealQr(true)}}> Reveal QR Code </button>
            <button onClick={()=>{setRevealQr(false)}}> Hide Qr Code </button>
        </div>
    </>
  );
}
//<input type='text' placeholder='input URL e.g www.google.com' value={url} onChange={(event)=> setUrl(event.target.value)}/>

export default Qrgeneration;
