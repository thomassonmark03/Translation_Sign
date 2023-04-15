import React, { useState, useEffect, useRef} from 'react';
import QRCode from 'qrcode';
import {useReactToPrint} from 'react-to-print';
import './QR.css';

const Qrgeneration = (props) => {
    const [qrcode,setQrcode] = useState('')
    const [revealQr, setRevealQr] = useState(false);

    const QR_ref = useRef();
    const QR_component = <img ref= {QR_ref} className= 'QR_img' src={qrcode} alt=' '/>;

    const GenerateQRCode = (url) =>{
        QRCode.toDataURL(url, (err,url) => {
            if (err) return console.log(err)
            setQrcode(url)
        })
    }

    //https://www.npmjs.com/package/react-to-print
    const printQRCode = useReactToPrint( {
            content: () => QR_ref.current,
        })


    useEffect(
        () => {
            GenerateQRCode(props.url);
        }

    ,[props.url])



  return (
    <> 
        <div className="generator">
            {revealQr === true && QR_component}
            {revealQr === true && 

                <button onClick={printQRCode}>Print QR Code</button>


            }
            <button onClick={()=>{setRevealQr(true)}}> Reveal QR Code </button>
            <button onClick={()=>{setRevealQr(false)}}> Hide Qr Code </button>

        </div>
    </>
  );
}
//<input type='text' placeholder='input URL e.g www.google.com' value={url} onChange={(event)=> setUrl(event.target.value)}/>

export default Qrgeneration;
