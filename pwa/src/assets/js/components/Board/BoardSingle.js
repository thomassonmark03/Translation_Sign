import React, {useState, useEffect} from 'react';

import Board from './Board';
import Header from '../Design/Header';
import DangerZone from './danger_zone.png';

import { db } from '../Database/FirebaseConfig';
import { doc, getDoc } from "firebase/firestore";

const TEST_BOARD = {

    title: 'test',
    image: DangerZone,
    enText: 'CAREFUL OF TIDES',


};


const BoardSingle = (props) =>{
    //const board = TEST_BOARD;


    //const [board, setBoard] = useState([]);

    const board = props.board;


    /*useEffect( () => {

        const getBoard = async() =>{

            const docRef = doc(db, 'Board', 'Board2');// ref https://rajatamil.medium.com/firebase-9-firestore-get-a-document-by-id-using-getdoc-d9192894d86b
            const boardDoc = await getDoc(docRef)
            try{setBoard(boardDoc.data()) ; console.log(boardDoc.data());}
            catch(error){console.log(error)};





        };
        getBoard();
    }, [])*/
    


    return(
        <div>
            <Header></Header>
            <Board title={board.title} image={board.img} enText={board.en} ></Board>
        </div>



    );




}

export default BoardSingle;













