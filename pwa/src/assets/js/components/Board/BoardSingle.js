import React, {useState, useEffect, memo} from 'react';

import Board from './Board';
import Header from '../Design/Header';
import DangerZone from './danger_zone.png';

import { db } from '../Database/FirebaseConfig';
import { doc, getDoc } from "firebase/firestore";


const BoardSingle = (props) =>{

    const board = props.board;



    return(
        <div>
            <Header></Header>
            <Board title={board.title} image={board.img} enText={board.en} ></Board>
        </div>



    );




}

export const MemoBoardSingle = memo(BoardSingle);













