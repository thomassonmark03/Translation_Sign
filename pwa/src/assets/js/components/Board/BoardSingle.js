import React, {memo} from 'react';

import Board from './Board';
import Header from '../Design/Header';
import BackButton from '../Design/BackButton';


//Works alongside the Board component to show the header, backbutton, and board + board text.
const BoardSingle = (props) =>{

    const board = props.board;



    return(
        <div>
            <Header></Header>
            <div style={{background: '#24252a'}}>
                <BackButton text='Return to Board Hub'></BackButton>
            </div>
            <Board title={board.title} image={board.img} enText={board.en} ></Board>
        </div>



    );




}

export const MemoBoardSingle = memo(BoardSingle);













