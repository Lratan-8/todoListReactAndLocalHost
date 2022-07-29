import React, { useState, useEffect } from 'react';

import loader from '../loader.gif'

export default function NewItems(props) {


    const [loaderT, setloaderT] = useState(false);




    let handleDelete = () => {


        setloaderT(true);


        setTimeout(() => {

            //for rendering the new completed array
            setloaderT(false);

            props.setCompletedFunction([...props.completedArr, props.itemToDo]);


            //for rendering the new green array
            let newList = props.stateArr.filter((element, ind) => {

                return props.id !== ind;

            });
            props.setArr(newList);



        }, 1000);

    }



    
    



    return (
        <div style={{ cursor: 'pointer' }} onClick={handleDelete}>

            <div style={{ display: 'flex', width: '100%', wordWrap: 'break-word', minHeight: '50px', justifyContent: 'space-evenly', marginTop: '10px', backgroundColor: 'rgb(20 249 90)', borderRadius: '10px', alignItems: 'center' }}>


               {
               loaderT==true && <img style={{width: '50px', height: '50px'}} src={loader} alt="" srcset="" />

               }

                <div className='content' style={{
                    width: '85%', color: 'white', WebkitTextStroke: '0.07rem black',
                    fontFamily: 'cursive'
                }}>{props.itemToDo}</div>


            </div>




        </div>
    )
}
