'use client'

import { useState,useEffect } from "react"


export default function Like(props)
{

    let [count,setCount]=useState('')
 
    useEffect(()=>{
        fetch('/api/post/getpostlike', { method: "POST", body:props.parentId })
        .then((r)=>{
            return r.json()
        })
        .then((result)=>{
            setCount(result)
        })
        
    },[])

    return (
        <span onClick={()=>{
            fetch('/api/post/postlike?id='+props.parentId)
            .then((r)=>{return r.json()})
            .then((result)=>{
                
                setCount(result)
            })
            
        }}>👍 {count}</span>
    )
}