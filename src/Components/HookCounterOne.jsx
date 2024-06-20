import React, { useEffect, useState } from 'react';

function HookCounterOne() {
    const [count,setCount]=useState(0)
    const [name,setName]=useState('')
    useEffect(()=>{
        console.log('running useeffect')
        document.title=`You clicked ${count} times`
    },[count])
  return (
    <div>
        <input type='text'value={name} onChange={e=> setName(e.target.value)}/>
        <button onClick={()=>setCount(count+1)}>click {count} times</button>
    </div>
  );
}

export default HookCounterOne