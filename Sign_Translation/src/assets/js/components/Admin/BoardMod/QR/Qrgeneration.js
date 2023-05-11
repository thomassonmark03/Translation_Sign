import React, { useState, useEffect, useRef} from 'react';
import QRCode from 'qrcode';
import {useReactToPrint} from 'react-to-print';
import './QR.css';


//Generates the QR code based on the input props.url
const Qrgeneration = (props) => {
    const [qrcode,setQrcode] = useState('')
    const [revealQr, setRevealQr] = useState(false);

    //Create a reference to be used for the QR Component. Then, assign it to to an image
    //tag with the image of our QR code. This component will last past rerenders.
    const QR_ref = useRef();
    const QR_component = <img ref= {QR_ref} className= 'QR_img' src={qrcode} alt=' '/>;

    //Generates a url based 
    const GenerateQRCode = (url) =>{
        QRCode.toDataURL(url, (err,url) => {
            if (err) return console.log(err)
            setQrcode(url)
        })
    }

    //https://www.npmjs.com/package/react-to-print
    //Allows a person to print using React, though not recommended.
    const printQRCode = useReactToPrint( {
            content: () => QR_ref.current,
        })


    //After DOM is generated, create the QR code using props.url, however, if it changes,
    //generate it again.
    useEffect(
        () => {
            GenerateQRCode(props.url);
        }

    ,[props.url])



  //Displays the QR code(if revealed) reveal button, a hide button, and print button once the QR code is revealed.
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

export default Qrgeneration;
