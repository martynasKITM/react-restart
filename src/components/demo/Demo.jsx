import {useEffect, useState} from "react";


const Demo = ()=>{
    const [syHi,setSyHi] = useState('');
    useEffect(()=>{ //Side effects
        return function cleanup(){

        }
    },[syHi]) //Component did update



    if(syHi.length===0){
        return(
            <div className="container">
                <button onClick={()=>{setSyHi('Labas')}}>Spausk</button>
            </div>
        )
    }else{
        return (
            <div className="container">
                <p>{syHi}</p>
            </div>
        )
    }


}

export default Demo