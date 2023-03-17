import React from 'react';

import Board from './Board';
import Header from '../Design/Header';
import DangerZone from './danger_zone.png';


const TEST_BOARD = {

    title: 'test',
    image: DangerZone,
    enText: 'CAREFUL OF TIDES',


};


const BoardPage = () =>{
    const board = TEST_BOARD;

    return(
        <div>
            <Header></Header>
            <Board title={board.title} image={board.image} enText={board.enText} ></Board>
        </div>



    );




}

export default BoardPage;













