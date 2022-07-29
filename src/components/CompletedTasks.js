import React from 'react'

let CompletedTasks = (props) => {
    return (
        <div>

            <div style={{  display: 'flex',wordWrap: 'break-word', width: '100%', minHeight: '50px', justifyContent: 'space-evenly', marginTop: '10px', backgroundColor: 'rgb(247 104 104)', borderRadius: '10px', alignItems: 'center' }}>
                <div className='content' style={{
                    fontFamily: 'cursive',color: 'blue', textDecorationLine: 'line-through',
                    width: '85%'
                }}>{props.itemCompleted}</div>

            </div>
        </div>
    )
}


export default CompletedTasks;