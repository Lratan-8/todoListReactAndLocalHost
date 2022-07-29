import React, { useState, useEffect } from 'react'
import CompletedTasks from './CompletedTasks';
import NewItems from './NewItems';


//to set from local storage

const getIncomplete = () => {

    let addedList = localStorage.getItem('newItems');
    if (addedList) {
        return JSON.parse(localStorage.getItem('newItems'))
    } else {
        return [];
    }
}


const getCompleted = () => {

    let completedList = localStorage.getItem('completed');

    if (completedList) {
        return JSON.parse(localStorage.getItem('completed'));
    } else {
        return [];
    }
}



let Todo = () => {

    const [listItem, setlistItem] = useState(getIncomplete());
    const [completedItem, setcompletedItem] = useState(getCompleted())
    const [value, setvalue] = useState('');



    //to add new items to the list

    let addItem = () => {

        if (value === '') {
            alert("You need to add some item")
        } else {

            setlistItem([...listItem, value]);
            setvalue('');
        }
    }


    //style for the todolist container

    let myStyle = {
        margin: 'auto',
        width: '350px',
        minHeight: '400px',
        borderRadius: '20px',
        postition: 'relative',
        backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,1) 24%, rgba(203,210,255,1) 97%)',
        paddingTop: '15px',
        boxSizing: 'border-box',
        padding: '0.5%',
        filter: 'drop-shadow(0 0 1.30rem black)',
        marginTop: '70px'


    }

    let handleChange = (event) => {
        setvalue((event.target.value))
    }

    let ulStyle = {
        width: '100%',
        borderRadius: '20px',
        postition: 'relative',
        padding: '0',
    }

    //clear all content of the list and local storage

    let clearAll = () => {
        setlistItem([]);
        setcompletedItem([]);

    }


    //add items to local storage

    useEffect(() => {

        localStorage.setItem('newItems', JSON.stringify(listItem));

    }, [listItem]);

    useEffect(() => {

        localStorage.setItem('completed', JSON.stringify(completedItem))


    }, [completedItem]);


    //stying and postitioning for reset button

    const resetButton = {

        position: 'absolute',
        marginTop: '0vh',
        marginLeft: '30vw',
        cursor: 'pointer',
        height: '50px',
        width: '50px',
        padding : '0',
        borderRadius: '50%',


    }


    return (

        <>
            <button onClick={clearAll} style={resetButton}><img style={{height: '100%'}} src="https://cdn-icons-png.flaticon.com/512/6532/6532052.png" alt="" srcset="" /></button>

           

            <div style={myStyle}>



                <img style={{ width: '15%' }} src="https://static.thenounproject.com/png/850545-200.png" alt="" />
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-evenly', marginTop: '10px', backgroundColor: 'white', borderRadius: '10px', height: '50px', alignItems: 'center' }}>
                    <img src="https://cdn-icons-png.flaticon.com/512/4693/4693312.png" alt="" style={{ height: '30px' }} />
                    <input id='inputBox' onChange={handleChange} value={value} placeholder='add items' style={{ border: 'none', height: '95%', width: '70%' }}></input>
                    <img alt='' onClick={addItem} src="https://cdn-icons-png.flaticon.com/128/1828/1828925.png" style={{ height: '20px', cursor: 'pointer' }} />

                </div>

                <ul style={ulStyle}>

                    {listItem.map((element, index) => {

                        return <NewItems stateArr={listItem} itemToDo={element} key={index} id={index} setArr={setlistItem} completedArr={completedItem} setCompletedFunction={setcompletedItem} />

                    })}


                    {completedItem.map((element) => { return <CompletedTasks itemCompleted={element} /> })}




                </ul>










            </div>
        </>
    )
}

export default Todo;
