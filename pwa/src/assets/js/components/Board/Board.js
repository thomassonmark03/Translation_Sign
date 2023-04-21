import React, {useLayoutEffect, useState} from 'react';
import './Board.css'






const Board = (props) =>{


    const [viewWidth, setViewWidth] = useState(window.innerWidth);

    const widthRespond = () =>
    {
        setViewWidth(window.innerWidth)
    }

    useLayoutEffect( () =>{

        widthRespond();

        window.addEventListener('resize', widthRespond); 

        return () => window.removeEventListener('resize', widthRespond);

    }


    ,[])

    const viewType = viewWidth >= 700 ? '__window' : '__app';

    const arrEnText = props.enText.split('\n');
    

    console.log(viewWidth);




    

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