import React from 'react';
import './Admin.css';
import { useState,useEffect } from "react";
import {db, imgStorage} from "../Database/FirebaseConfig";
import {getDownloadURL, ref, uploadBytes} from 'firebase/storage'
import { collection, getDocs, getDoc, doc, updateDoc, setDoc} from 'firebase/firestore';

import Header from '../Design/Header';

import StateFilter from '../Home/StateFilter';
import {filterState} from '../Home/Home'

import ParkFilter from '../Parks/ParkFilter';
import {filterPark} from '../Parks/ParksPage'

import BoardFilter from '../Board/BoardFilter';
import {filterBoard} from '../Board/BoardPage';



//import NotFoundImg from './not_found.png';

import StateMod from './StateMod/StateMod';
import ParkMod from './ParksMod/ParkMod';
import BoardMod from './BoardMod/BoardMod';

//Creating imports
import CreateState from './Create/CreateState';
import CreatePark from './Create/CreatePark';


const NotFoundImgState = 'https://www.online-tech-tips.com/wp-content/uploads/2022/03/image-41.jpeg';
const NotFoundImgPark = 'https://community.librenms.org/uploads/default/original/2X/7/759793552edd033b80526884b06a706fdd1a06ba.png';
const NotFoundImgBoard = 'https://i.ytimg.com/vi/K94i1ALQ-H4/mqdefault.jpg'


const TEST_BOARDS = [

    {
        name: 'Board1',
        enText: 'Safety jargon smargon',
        image: NotFoundImgBoard,
    },

    {
        name: 'Board2',
        enText: 'SKIP',
        image: NotFoundImgBoard,
    }


];


const TEST_PARKS = [

    {
        name: 'Park1',
        description: 'Poland',
        image: NotFoundImgPark,
        board: [TEST_BOARDS[0]]
    },

    {
        name: 'Park2',
        description: 'England',
        image: NotFoundImgPark,
        board: [TEST_BOARDS[1]]
    }


];

const TEST_STATES = [

    {
        name: 'Texas',
        description: 'Big Texas',
        image: NotFoundImgState,
        parks: [TEST_PARKS[0]],
    },

    {
        name: 'California',
        description: 'Hot and Dry',
        image: NotFoundImgState,
        parks: [TEST_PARKS[1]],
    }


];




function Admin() {

    const stateCollection = collection(db, 'States');
    const [states, setStates] = useState([]);
    const [stateName, setStateName] = useState("");
    const [stateFilter, setStateFilter] = useState("");

    console.log(states);



    //const [states, setState] = useState(TEST_STATES);
    //const parks = TEST_STATES[0].parks;
    const [parks, setPark] = useState({});
    const [parkName, setParkName] = useState("");

    const [parkFilter, setParkFilter] = useState("");
    const parksUnfiltered = parks[stateName];

    const [boards, setBoards] = useState({}); 
    const [boardName, setBoardName] = useState({}); 
    const boardsUnfiltered = boards[parkName];
    const [boardFilter, setBoardFilter] = useState("");




    //Updating functions
    const uploadState = async(stateId, newStateObj, imageFile, mode) => {
        console.log('in upload state');
        //Ref https://firebase.google.com/docs/storage/web/upload-files

        if(newStateObj.img != undefined) 
        {
            const stateImgRef = ref(imgStorage, 'states/'+stateId);
            const uploadSnapshot = await uploadBytes(stateImgRef, imageFile);
            console.log(uploadSnapshot);

            //https://firebase.google.com/docs/storage/web/download-files


            newStateObj.img = await getDownloadURL(stateImgRef);
        }

        if(mode ==="update")
            await updateDoc( doc(db, 'States', stateId), {...newStateObj});
        else
            await setDoc( doc(db, 'States', stateId), {...newStateObj});

        
        const newStateRef = doc(db, 'States', stateId);
        const newStateDoc = await getDoc(newStateRef);
        const newState = {...newStateDoc.data(), id: stateId};

        setStates( (prevState) =>{

            let updateState = [...prevState];
            let i = 0;
            let updated = false;

            for(i = 0; i < prevState.length; i++)
            {
                if(prevState[i].id == stateId)
                {
                    updateState[i] = {...newState};
                    updated = true;
                }
            }

            if(updated === false)
            {
                updateState.unshift({...newState});
            }

            console.log("Updated state:");
            console.log(updateState);

            return updateState;



            
        })






    }



    const uploadPark = async(parkId, newParkObj, imageFile, mode) => {
        console.log('in upload park');
        //Ref https://firebase.google.com/docs/storage/web/upload-files

        if(newParkObj.img != undefined)
        {
            const parkImgRef = ref(imgStorage, 'parks/'+ parkId);
            const uploadSnapshot = await uploadBytes(parkImgRef, imageFile);
            console.log(uploadSnapshot);
    
            //https://firebase.google.com/docs/storage/web/download-files
            newParkObj.img = await getDownloadURL(parkImgRef);
        }
    
        const parkPath = 'States/' + stateName + '/Parks';
        const newParkRef = doc(db, parkPath,  parkId);

        if(mode === "update")
            await updateDoc( newParkRef, {...newParkObj})
        else
            await setDoc( newParkRef, {...newParkObj})

        const newParkDoc = await getDoc(newParkRef);
        const newPark = {...newParkDoc.data(), id: parkId};
    
        setPark( (prevParks) =>{
    
            let updatePark = {...prevParks};
            let i = 0;

            if(mode === "update")
            {
                for(i = 0; i < updatePark[stateName].length; i++)
                {
                    if(updatePark[stateName][i].id === parkId)
                    {
                        updatePark[stateName][i] = {...newPark};
                    }

                }
            }
            else
            {
                updatePark[stateName].unshift({...newPark, id: parkId});
            }






            return updatePark;
    
    
    
            
        })
    
    
    
    
    }

    const uploadBoard = async(boardId, newBoardObj, imageFile, mode) => {
        console.log('in upload board');

        if(newBoardObj.img != undefined) 
        {
            //Ref https://firebase.google.com/docs/storage/web/upload-files
            const boardImgRef = ref(imgStorage, 'boards/' + boardId);
            const uploadSnapshot = await uploadBytes(boardImgRef, imageFile);
            console.log(uploadSnapshot);
    
            //https://firebase.google.com/docs/storage/web/download-files
            newBoardObj.img = await getDownloadURL(boardImgRef);
        }
    
        const boardPath = 'States/' + stateName + '/Parks/' + parkName + '/Boards';
        const newBoardRef = doc(db, boardPath,  boardId);

        if(mode === "update")
            await updateDoc( newBoardRef, {...newBoardObj});
        else
            await setDoc( newBoardRef, {...newBoardObj});

        const newBoardDoc = await getDoc(newBoardRef);
        const newBoard = {...newBoardDoc.data(), id: boardId};
    
        setBoards( (prevBoards) =>{
    
            let updateBoards = {...prevBoards};
            let i = 0;


            console.log("previous boards: ");
            console.log(prevBoards);
            console.log("attempted parkName: ");
            console.log(parkName);

            if(mode == "update")
            {
                for(i = 0; i < updateBoards[parkName].length; i++)
                {
                    if(updateBoards[parkName][i].id === boardId)
                    {
                        updateBoards[parkName][i] = {...newBoard};
                    }

                }
            }
            else
            {
                updateBoards[parkName].unshift({...newBoard, id:boardId});
            }





            return updateBoards;
    
    
    
            
        })
    
    
    
    
    }

    const deselectState = () =>
    {
        setStateName("");
        setParkName("");
        setBoardName("");
    }

    const deselectPark = () =>
    {
        setParkName("");
        setBoardName("");
    }

    const deselectBoard = () =>
    {
        setBoardName("");
    }



    //Getting from database

    useEffect( () => {

        const stateGet = async() =>
        {
            const statesDocs = await getDocs(stateCollection);
            setStates( statesDocs.docs.map(   (doc) => ({...doc.data(), id: doc.id}) ) );
        };

        stateGet();
    }, []);


    //Functions to do with selecting a state, park, board.

    //Select state.
    const parkGet = async(calledStateId) =>
    {
        setParkName(""); //Deselects any previous parks
        setBoardName(""); //Deselects any previous parks
        if(parks[calledStateId] === undefined)
        {
            const parkCollection = collection(db, 'States/'+ calledStateId + '/Parks');
               
            const park = await getDocs(parkCollection);

            setPark( (prevParks) => {
                const newPark = {[calledStateId]: park.docs.map( (doc) =>({...doc.data(), id: doc.id}))};
                const newParks = {...prevParks, ...newPark};
                console.log("Here are the new parks:");
                console.log(newParks);


                return newParks;
                //return {...prevParks, [calledStateName]: park.docs.map( (doc) =>({...doc.data(), id: doc.id}))}
            
            })


        }
        setStateName(calledStateId);

        console.log(parks);


        

    }


    //Select park
    const boardGet = async(calledParkId) =>
    {
        setBoardName(""); //Deselects any previous boards
        if(boards[calledParkId] === undefined)
        {
            const boardCollection = collection(db, 'States/'+ stateName + '/Parks/' + calledParkId + '/Boards');
               
            const board = await getDocs(boardCollection);

            setBoards( (prevBoards) => {
                const newBoard = {[calledParkId]: board.docs.map( (doc) =>({...doc.data(), id: doc.id}))};
                const newBoards = {...prevBoards, ...newBoard};
                console.log(newBoards);

                return newBoards;
                //return {...prevParks, [calledStateName]: park.docs.map( (doc) =>({...doc.data(), id: doc.id}))}
            
            })


        }



        setParkName(calledParkId);


        

    }


    //Select board
    const boardSelect = (boardId) => 
    {
        setBoardName(boardId);
    }


    //Filtering

    let statesFiltered = states.filter( (state) => {return filterState(state, stateFilter)} );

    let parksFiltered = [];
    if(parksUnfiltered != undefined){
        parksFiltered = parksUnfiltered.filter( (park) => {return filterPark(park, parkFilter)})
    }

    let boardsFiltered = [];
    if(boardsUnfiltered != undefined){

        boardsFiltered = boardsUnfiltered.filter( (board) => {return filterBoard(board, boardFilter) } )
    }

    return (
        <div style={{background: "black"}}>
            <Header></Header>
            <div className='sign_translation_editor_container'>
                <div className='sign_translation_editor__states__container'>
                    <div>
                        <StateFilter setFilter = {setStateFilter}></StateFilter>
                    </div>
                    <div>
                        <CreateState toUploadState = {uploadState}></CreateState>
                    </div>
                    <div>
                    {statesFiltered.map( (state) => {


                            return (<StateMod key ={state.id + '1234'} selected = {state.id === stateName} toUploadState ={uploadState}  stateName={state.name} stateImage = {state.img} stateId = {state.id} onCallState = {parkGet} onDeselectState={deselectState}></StateMod>)




                        }


                    )}
                    </div>

                </div>
                <div className='sign_translation_editor__parks__container'>
                    <div>
                        <ParkFilter setFilter = {setParkFilter}></ParkFilter>
                    </div>
                    {stateName != "" && <div>
                        <CreatePark toUploadPark = {uploadPark}> </CreatePark>
                    </div>}
                <div>

                    {parksFiltered !== undefined &&
                    
                     parksFiltered.map( (park) => {

                            return <ParkMod selected = {park.id === parkName}key= {stateName + park.id + '1234'} toUploadPark = {uploadPark} onCallPark = {boardGet} onDeselectPark={deselectPark}  parkId = {park.id} parkName = {park.name} parkImage = {park.img}  ></ParkMod>




                        }


                    )}
                    </div>
                </div>

                <div className='sign_translation_editor__boards__container'>
                    <div>
                        <BoardFilter setFilter = {setBoardFilter}></BoardFilter>
                    </div>
                    <div>
                        {boardsFiltered !== undefined 
                        && boardsFiltered.map( (board) => {


                                return <BoardMod key = {stateName + parkName + board.id + '1234'} selected = {board.id === boardName} toUploadBoard ={uploadBoard} onCallBoard = {boardSelect} onDeselectBoard={deselectBoard}  boardId = {board.id} boardName={board.title} boardImage = {board.img}  ></BoardMod>




                            }


                        )}
                    </div>

                </div >

        

        
        
        
        
            </div>
        </div>

    );
}

export default Admin;
