import {useReducer, useState} from 'react';

function AppWithUseReducer() {

    const [check,toggle] = useReducer(
        (check) => !check,
        false);
 


    return(
        <>

            <input type="checkbox" value={check} onChange={toggle} />
            <p>{check ? "checked" : "Not checked"}</p>
        </>
    );

}

export default AppWithUseReducer;