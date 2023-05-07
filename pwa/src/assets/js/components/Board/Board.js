import React, {useLayoutEffect, useState} from 'react';
import './Board.css'





//Shows how a board as well as its text is displayed.
const Board = (props) =>{


    //Monitors the width of the device currently used. We favor the board text,
    //so it is better to reduce or remove the board image for room for the the board text.
    const [viewWidth, setViewWidth] = useState(window.innerWidth);
    const widthRespond = () =>
    {
        setViewWidth(window.innerWidth)
    }
    useLayoutEffect( () =>{

        //Set the width immediately and then listen for when it changes.
        widthRespond();

        //Listens for the resize event, and handles the display based on the new width of the device.
        window.addEventListener('resize', widthRespond); 

        //When the compoenent is dismounted or useLayoutAffect is called again, remove the previous
        //listener for the size to free up memory.
        return () => window.removeEventListener('resize', widthRespond);

    }


    ,[])

    //Chooses between window display and app display.
    //App display does not show the board image, assumes that the width will not be sufficient to house
    //the image.
    const viewType = viewWidth >= 700 ? '__window' : '__app';

    //Splits up the english text to allow for newline spacing.
    const arrEnText = props.enText.split('\n');
    

    //Displays the board title, the board image(if enough room is given), and the board text.
    return(

        <div className=''>

            
            <h2 className='boardTitle'>{props.title}</h2>
            <div className={'boardBody'+ viewType}>
                {viewType === '__window'&& <img alt= {props.title + ' missing!'} src={props.image} className={'boardImage' + viewType}></img>}
                <div className={'boardText'+ viewType}>
                {arrEnText.map( (text) => {

                        return (
                            [<br></br>,
                            <p >{text}</p>
                            ]
                        );

                    })
                }
                </div>
            </div>
            
            
        </div>




    );







};



//<p className='boardText'>{props.enText}</p>

export default Board;