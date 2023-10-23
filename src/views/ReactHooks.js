// ReactHooks.js

import React from 'react';
function MissedGoal(){
    return<h1>Missed</h1>
}

function Passed(){
    return <h1>Passed</h1>
}
function Goal(props){
    const isGoal = props.isGoal;
    return(
        <>
        {isGoal ? <MissedGoal/>: <Passed/>}
        </>
    )
}


const ReactHooks = () => {
    return (
        <div>
            <p>
                <code>
                <Goal isGoal={false} />

                </code>
            </p>
        </div>
    )
}



export default ReactHooks;
