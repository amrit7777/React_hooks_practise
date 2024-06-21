import axios from 'axios'
import React, { useEffect, useReducer } from 'react'

const initialState={
    loading:true,
    error:'',
    post:{}
}

const reducer=(state,action)=>{
    switch(action.type){
       case 'Fetch_success':
        return{
            loading:false,
            post:action.payload,
            error:''
        }
        case 'Fetch_error':
            return {
                loading:false,
                post:{},
                error:'Something went wrong!'
            }
            default:
                return state


    }
}

function DataFetchingTwo() {
    const [state,dispatch]=useReducer(reducer,initialState)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res=>{
            dispatch({type:'Fetch_success',payload:res.data})

        })
        .catch(err=>{
           dispatch({type:'Fetch_error'})
        })
    },[])
  return (
    <div>{state.loading?'Loading':state.post.title}
    {state.error?state.error:null}</div>
  )
}

export default DataFetchingTwo