import {useState,useEffect} from 'react';

function AppWithUseEffect() {

    const [emotion,setEmotion] = useState('happy');
    const [day,setDay] = useState('Sunday');


    useEffect(()=>{
        console.log(`Todays an ${emotion} day`);
    },[emotion])

    useEffect(()=>{
        console.log(`Todays an ${day} `);
    },[day])

 
    return(
        <>
            <h1>Today's an {emotion} day and its a {day} </h1>
            <button onClick={()=> setEmotion('Awesome')}> Awesome </button>
            <button onClick={()=> setDay('Monday')}> Monday</button>
        </>
    );


}

export default AppWithUseEffect;