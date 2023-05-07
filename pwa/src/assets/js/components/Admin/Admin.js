import React from 'react';
import './Admin.css';
import { useState,useEffect } from "react";
import {db, imgStorage, app} from "../Database/FirebaseConfig";
import {getDownloadURL, ref, uploadBytes, deleteObject} from 'firebase/storage'
import { collection, getDocs, getDoc, doc, updateDoc, setDoc, deleteDoc} from 'firebase/firestore';



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
import CreateBoard from './Create/CreateBoard';




//Main page for sign upload
//You can delete, modify, and create states, parks, and boards.
function Admin() {

    //Gets the state objects from the database
    const stateCollection = collection(db, 'States');
    //State objects used to display states.
    const [states, setStates] = useState([]);
    //Used for determining paths when communicating with the database.
    const [stateName, setStateName] = useState("");
    //Used to filter out states for display.
    const [stateFilter, setStateFilter] = useState("");


    //Used to display parks. These will persist(preventing unnecessary database calls), and can only be called
    //by getting the correct index with the state id.
    const [parks, setPark] = useState({});

    //holds the park ids for determing paths to the database.
    const [parkName, setParkName] = useState("");
    //holds the text for filtering out the parks.
    const [parkFilter, setParkFilter] = useState("");
    //holds the unfiltered parks, later filtered for displaying.
    const parksUnfiltered = parks[stateName];

    
    //Used to display boards. These will persist(preventing unnecessary database calls), and can only be called
    //by getting the correct index with the state id + park id.
    const [boards, setBoards] = useState({}); 
    //holds the board ids for determing paths to the database.
    const [boardName, setBoardName] = useState({}); 
    //Holds index that allows for boards to be called for to display.
    const boardIndex = stateName + '/' + parkName;
    //holds the unfiltered boards, later filtered for displaying.
    const boardsUnfiltered = boards[boardIndex];
    //holds the filter text used for filtering out boards.
    const [boardFilter, setBoardFilter] = useState("");




    //Upload functions

    //The upload functions requires the database id, the object to replace the current
    //database object in firestore, an imagefile(if available).
    //There are two modes, update and upload. Upload replaces the entire object
    //regardless of what was there or not. Update only replaces the parameters filled out and
    //is recommended for keeping the same parks and boards.
    
    //The difference between upload state, upload park, and upload board is just a matter
    //of the paths to modify the corresponding database object in firebase.
    //The state path only requires the state id, but a park requires the state id and the park id
    //to modify it:
    //State path: States/[state_id]
    //Park Path: States[state_id]/Parks/[park_id]
    //Board Path: States[state_id]/Parks/[park_id]/Boards/[board_id]
    const uploadState = async(stateId, newStateObj, imageFile, mode) => {
        //Ref https://firebase.google.com/docs/storage/web/upload-files

        //Only attempt to upload an image if one is defined.
        if(newStateObj.img != undefined) 
        {
            //Get a state image reference and upload it. Get its link to put
            //into the database.
            //https://firebase.google.com/docs/storage/web/download-files
            const stateImgRef = ref(imgStorage, 'states/'+stateId);
            const uploadSnapshot = await uploadBytes(stateImgRef, imageFile);
            newStateObj.img = await getDownloadURL(stateImgRef);
        }

        //Update versus upload. The first updates the parameters modified
        //The second full on replaces the entire object, deleting any exisitng parameters
        //not specified.
        if(mode ==="update")
            await updateDoc( doc(db, 'States', stateId), {...newStateObj});
        else
            await setDoc( doc(db, 'States', stateId), {...newStateObj});

        
        //After updating/uploading, get the object from firestore to see if it was successful.
        const newStateRef = doc(db, 'States', stateId);
        const newStateDoc = await getDoc(newStateRef);
        const newState = {...newStateDoc.data(), id: stateId};

        //Remove the previous object in the states array, and replace it by the one
        //in firebase, hoping that it is new.
        setStates( (prevState) =>{

            let updateState = [...prevState];
            let i = 0;
            let updated = false;


            //Look for the state to update

            for(i = 0; i < prevState.length; i++)
            {
                if(prevState[i].id == stateId)
                {
                    updateState[i] = {...newState};
                    updated = true;
                }
            }

            //If you can't find the state to update, just add it to the beginning of the array.
            if(updated === false)
            {
                updateState.unshift({...newState});
            }


            return updateState;



            
        })






    }



    const uploadPark = async(parkId, newParkObj, imageFile, mode) => {
        //Ref https://firebase.google.com/docs/storage/web/upload-files

        //Only update the park image if one is available.
        if(newParkObj.img != undefined)
        {
            //Upload a park image and get the link back.
            //https://firebase.google.com/docs/storage/web/download-files
            const parkImgRef = ref(imgStorage, 'parks/'+ parkId);
            const uploadSnapshot = await uploadBytes(parkImgRef, imageFile);
            newParkObj.img = await getDownloadURL(parkImgRef);
        }
    
        //Path used to update or upload a park.
        const parkPath = 'States/' + stateName + '/Parks';
        const newParkRef = doc(db, parkPath,  parkId);

        //Update modifies filled out parameters, upload will destroy
        //the object and replace it with the object with filled out parameters.
        if(mode === "update")
            await updateDoc( newParkRef, {...newParkObj})
        else
            await setDoc( newParkRef, {...newParkObj})

        //Get a reference back to the updated or uploaded park document
        const newParkDoc = await getDoc(newParkRef);
        const newPark = {...newParkDoc.data(), id: parkId};
    
        setPark( (prevParks) =>{
    
            let updatePark = {...prevParks};
            let i = 0;

            //if we are updating, attempt to find the original park object in the array. If so, update it.
            //If we are uploading, just put it into the array.
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

    //This function will either upload a board or update it.
    const uploadBoard = async(boardId, newBoardObj, imageFile, mode) => {

        //If there is an image to upload, attempt to upload it.
        if(newBoardObj.img != undefined) 
        {
            //Ref https://firebase.google.com/docs/storage/web/upload-files
            //https://firebase.google.com/docs/storage/web/download-files
            //Get an image reference for the board, and upload it. Get its link
            //to be set to the database.
            const boardImgRef = ref(imgStorage, 'boards/' + boardId);
            const uploadSnapshot = await uploadBytes(boardImgRef, imageFile);
            newBoardObj.img = await getDownloadURL(boardImgRef);
        }
    
        //Get the board path that involves the state, park, and board id.
        //If you upload the doc, delete the previous object and upload a new object
        //with new parameters. Otherwise, you can update the object which keeps the
        //old parameters except for any filled out ones to be updated.
        const boardPath = 'States/' + stateName + '/Parks/' + parkName + '/Boards';
        const newBoardRef = doc(db, boardPath,  boardId);
        if(mode === "update")
            await updateDoc( newBoardRef, {...newBoardObj});
        else
            await setDoc( newBoardRef, {...newBoardObj});



        //Get the new doc that was uploaded and set it as the new object in the boards array.
        const newBoardDoc = await getDoc(newBoardRef);
        const newBoard = {...newBoardDoc.data(), id: boardId};
        setBoards( (prevBoards) =>{
    
            let updateBoards = {...prevBoards};
            let i = 0;


            //If updating, find the object in the array and replace it.
            if(mode == "update")
            {
                for(i = 0; i < updateBoards[boardIndex].length; i++)
                {
                    if(updateBoards[boardIndex][i].id === boardId)
                    {
                        updateBoards[boardIndex][i] = {...newBoard};
                    }

                }
            }
            else
            {
                //If uploading, just add it to the boards array.
                updateBoards[boardIndex].unshift({...newBoard, id:boardId});
            }





            return updateBoards;
    
    
    
            
        })
    
    
    
    
    }

    //delete functions
    //Each delete function follows the same steps.
    //Get the sublevels, an example being that the sublevels for states is parks.
    //Whenever you delete an object, you delete every sublevel as well. This 
    //means the sublevels must also delete their sublevels. This insures no ghosts are 
    //left which are lone collections whose parent collections were deleted.
    const deleteState = async(stateId) =>
    {

        //Get all the parks docs for this state
        const parksDocs = await getDocs(collection(db, 'States/' + stateId + '/Parks'));


        //Delete all the parks for this state.
        //Delete the state itself afterwards.
        parksDocs.forEach( (doc) => {
            deletePark(doc.id, stateId);
        });
        await deleteDoc(doc(db, 'States/', stateId) );

        //Delete the image alongside it.
        const stateImgRef = ref(imgStorage, 'states/'+stateId);
        try{
            await deleteObject(stateImgRef);
        }catch(error)
        {
            console.log(error);   
        }
        


        //Remove the state from the states array.
        setStates( (prevStates) => {
            const newStates = [];
            let i = 0;

            for(i = 0; i < prevStates.length; i++)
            {
                if(prevStates[i].id != stateId)
                {
                    newStates.push(prevStates[i]);
                }
            }

            return newStates;


        })
        deselectState();
    }


    const deletePark = async(parkId, stateId = stateName) =>
    {
        //Get all the boards from this park
        const boardDocs = await getDocs(collection(db, 'States/' + stateId + '/Parks/' + parkId + '/Boards'));

        //Delete all the boards from this park.
        //Delete the park itself afterwards.
        boardDocs.forEach( (doc) =>{    
            deleteBoard(doc.id, stateId, parkId);
        });
        await deleteDoc(doc(db, 'States/'+ stateId + '/Parks', parkId) );

        //Delete the image alongside it.
        const parkImgRef = ref(imgStorage, 'parks/'+parkId);
        try{
            await deleteObject(parkImgRef);
        }catch(error){
            console.log(error);
        }

        //Delete the park within the array so that it does not show up anymore.
        setPark( (prevParks) => {
            let i;

            const newParks = []; 
            const parksNum = prevParks[stateId].length;

            if(parksNum !== undefined)
            {
                for(i = 0; i < prevParks[stateId].length; i++)
                {
                    if(prevParks[stateId][i].id != parkId)
                    {
                        newParks.push(prevParks[stateId][i]);
                    } 
                }

                prevParks[stateId] = newParks;
            }

            return prevParks;

        });

        deselectPark();
    }
    const deleteBoard= async(boardId, stateId = stateName, parkId = parkName) =>
    {
        //Get board and delete it.
        const localBoardIndex = stateId + '/' + parkId;
        await deleteDoc(doc(db, 'States/'+ stateId + '/Parks/' + parkId + '/Boards/', boardId) );



        //Delete the image alongside it.
        const boardImgRef = ref(imgStorage, 'boards/'+boardId);
        console.log(boardImgRef);

        try{
        await deleteObject(boardImgRef);
        }catch(error){
            console.log(error);
        }

        //Remove the board from the boards array.
        setBoards( (prevBoards) => {

            let i;
            if(prevBoards[localBoardIndex]!== undefined)
            {

                const newBoards = []; 
                const boardsNum = prevBoards[localBoardIndex].length;
                {
                    for(i = 0; i < boardsNum; i++)
                    {
                        if(prevBoards[localBoardIndex][i].id != boardId)
                        {
                            newBoards.push(prevBoards[localBoardIndex][i]);
                        } 
                    }
            

                prevBoards[localBoardIndex] = newBoards;

                }
            }
            return prevBoards;

        });

        deselectBoard();
    }


    //deselect functions


    //Deselection occurs when the names in stateName, parkName, and boardName
    //are set to empty.
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
    //Get all the states after the dom is updated, this is the only required database call 
    //when the admin is mounted.
    useEffect( () => {

        const stateGet = async() =>
        {
            const statesDocs = await getDocs(stateCollection);
            setStates( statesDocs.docs.map(   (doc) => ({...doc.data(), id: doc.id}) ) );
        };

        stateGet();
    }, []);


    //Functions to do with selecting a state, park, board.

    //When the state is selected, it gets all of the parks within that state.
    const parkGet = async(calledStateId) =>
    {
        setParkName(""); //Deselects any previous parks
        setBoardName(""); //Deselects any previous parks

        //If the parks already exits in the array, use that.
        //Otherwise get it from the database.
        if(parks[calledStateId] === undefined)
        {
            const parkCollection = collection(db, 'States/'+ calledStateId + '/Parks');
               
            const park = await getDocs(parkCollection);

            setPark( (prevParks) => {
                const newPark = {[calledStateId]: park.docs.map( (doc) =>({...doc.data(), id: doc.id}))};
                const newParks = {...prevParks, ...newPark};


                return newParks;
            
            })


        }
        //Set the state name as it is required to extract the parks from the parks array on reload.
        setStateName(calledStateId);



        

    }


    //When a park is selected, get all of its boards.
    const boardGet = async(calledParkId) =>
    {
        setBoardName(""); //Deselects any previous boards

        //If the board already exists in the boards array, use that.
        //Otherwise get it from the database.
        const localBoardIndex= stateName + '/' + calledParkId;
        if(boards[localBoardIndex] === undefined)
        {
            const boardCollection = collection(db, 'States/'+ stateName + '/Parks/' + calledParkId + '/Boards');
               
            const board = await getDocs(boardCollection);

            setBoards( (prevBoards) => {
                const newBoard = {[localBoardIndex]: board.docs.map( (doc) =>({...doc.data(), id: doc.id}))};
                const newBoards = {...prevBoards, ...newBoard};

                return newBoards;
            
            })


        }
        //Set the park name as that is necessary to load in the boards on reload.
        setParkName(calledParkId);



        

    }


    //The board select merely sets the board name such that the right board
    //is selected on reload.
    const boardSelect = (boardId) => 
    {
        setBoardName(boardId);
    }


    //Filtering
    //Simply uses the filter function within Home.js for state,
    //ParkPage.js for parks, and BoardPage.js for boards.
    let statesFiltered = states.filter( (state) => {return filterState(state, stateFilter)} );

    let parksFiltered = [];
    if(parksUnfiltered != undefined){
        parksFiltered = parksUnfiltered.filter( (park) => {return filterPark(park, parkFilter)})
    }

    let boardsFiltered = [];
    if(boardsUnfiltered != undefined){

        boardsFiltered = boardsUnfiltered.filter( (board) => {return filterBoard(board, boardFilter) } )
    }

    //Displays the required states, parks, and boards.
    return (
        <div style={{background: "black"}}>
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


                            return (<StateMod key ={state.id + '1234'} selected = {state.id === stateName} toUploadState ={uploadState} toDeleteState ={deleteState}  stateName={state.name} stateImage = {state.img} stateId = {state.id} onCallState = {parkGet} onDeselectState={deselectState}></StateMod>)




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

                            return <ParkMod selected = {park.id === parkName}key= {stateName + park.id + '1234'} toUploadPark = {uploadPark} toDeletePark ={deletePark} onCallPark = {boardGet} onDeselectPark={deselectPark}  parkId = {park.id} parkName = {park.name} parkImage = {park.img}  ></ParkMod>




                        }


                    )}
                    </div>
                </div>

                <div className='sign_translation_editor__boards__container'>
                    <div>
                        <BoardFilter setFilter = {setBoardFilter}></BoardFilter>
                    </div>
                    <div>
                        {parkName != "" &&
                            <CreateBoard toUploadBoard = {uploadBoard}></CreateBoard>}
                    </div>
                    <div>
                        {boardsFiltered !== undefined 
                        && boardsFiltered.map( (board) => {
                                //This function also handles the QR link.
                                //Basically, it gets the state name, the park name,
                                //and the board name. They are stripped of the spaces
                                //within the name, and are inserted the following link:
                                //States/[state_name]/Parks/[park_name]/Boards/[board_name]

                                let statesFullName = "";
                                for(let i = 0; i < states.length; i++)
                                {
                                    if(stateName === states[i].id)
                                    {
                                        statesFullName = states[i].name; 
                                        break;
                                    }
                                }
                                let parksFullName = "";
                                for(let i = 0; i < parksUnfiltered.length; i++)
                                {
                                    if(parkName === parksUnfiltered[i].id)
                                    {
                                        parksFullName = parksUnfiltered[i].name;
                                        break;
                                    }

                                }
                                const stateParts = statesFullName.split(" ");
                                const parkParts = parksFullName.split(" ");
                                const boardParts= board.title.split(" ");
                                let stateLinkTitle = "";
                                let parkLinkTitle = "";
                                let boardLinkTitle = "";
                                for( let i = 0; i < stateParts.length; i++)
                                {
                                    stateLinkTitle += stateParts[i];
                                }
                                for( let i = 0; i < parkParts.length; i++)
                                {
                                    parkLinkTitle += parkParts[i];
                                }
                                for( let i = 0; i < boardParts.length; i++)
                                {
                                    boardLinkTitle += boardParts[i];
                                }
                                

                                const boardUrl = window.location.origin + '/' + stateLinkTitle+ '/' + parkLinkTitle+ '/' + boardLinkTitle;
                                return <BoardMod key = {stateName + parkName + board.id + '1234'} selected = {board.id === boardName} toUploadBoard ={uploadBoard} toDeleteBoard={deleteBoard} onCallBoard = {boardSelect} onDeselectBoard={deselectBoard}  boardId = {board.id} boardName={board.title} boardImage = {board.img} boardEngText = {board.en} url={boardUrl}  ></BoardMod>




                            }


                        )}
                    </div>

                </div >

        

        
        
        
        
            </div>
        </div>

    );
}

export default Admin;
