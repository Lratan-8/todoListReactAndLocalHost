import React, { useState } from 'react'

export default function NewItems(props) {

    const [variableWidth, setvariableWidth] = useState('100%');
    const [variableTransition, setvariableTransition] = useState('0s');


    let handleDelete = () => {

        setvariableWidth('0%');
        setvariableTransition('1s');

        setTimeout(() => {


            //for rendering the new completed array

            props.setCompletedFunction([...props.completedArr, props.itemToDo]);


            //for rendering the new green array
            let newList = props.stateArr.filter((element, ind) => {

                return props.id !== ind;

            });
            props.setArr(newList);




        }, 600)






    }



    return (
        <div style={{ cursor: 'pointer', width: variableWidth, transitionDuration: variableTransition }} onClick={handleDelete}>

            <div style={{ display: 'flex', width: '100%', wordWrap: 'break-word', minHeight: '50px', justifyContent: 'space-evenly', marginTop: '10px', backgroundColor: 'rgb(20 249 90)', borderRadius: '10px', alignItems: 'center' }}>


                <div className='content' style={{
                    width: '85%', color: 'white', WebkitTextStroke: '0.07rem black',
                    fontFamily: 'cursive'
                }}>{props.itemToDo}</div>


            </div>




        </div>
    )
}
