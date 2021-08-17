import {useState,useEffect} from 'react';

function ApiHook({login}){

     let apiURL = '';

    const [data,setData] = useState(null);

    const [loading,setLoading] = useState(false);

    const [error,setError] = useState(null);

    useEffect(()=>{

       
        if(!login) return;

        setLoading(true);


        

        fetch(`https://api.github.com/uses/${login}`).
            then((response) => response.json()).
            then(setData).
            then(()=>setLoading(false)).catch(setError);

    },[])

    if(loading){
        return(
            <> loading ...
            </>
        );
    }

    if(error){
        return(
            <>
                <pre>{JSON.stringify(error,null,2)}</pre>
            </>
        );
    }

    if(data){
        return(
            <>
                {JSON.stringify(data)}
                <img alt={data.login} src={data.avatar_url} />
            </>
        );
    }
    else{
        return(
            <>
                No Data Available
            </>
        );
    }



}

export default ApiHook;