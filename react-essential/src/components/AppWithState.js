import { useState } from 'react';

function AppWithState() {

    const [emotion, setData] = useState('happy');
    return (
        <>
            <h1>Awesome Day Today {emotion}</h1>
            <button onClick={() => setData('Joyful')} >JOY</button>
            <button onClick={() => setData('Peaceful . Relaxed')} >PEACE</button>
        </>

    )

}

export default AppWithState;