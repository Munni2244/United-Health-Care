import { useEffect, useState } from "react"

const useSurvices=()=>{
    const [survices, setSurvices]= useState([]);

    useEffect(()=>{
        fetch('/survices.json')
        .then(res=> res.json())
        .then (data => setSurvices(data))
    },[])
    return {
        survices,
        setSurvices
    }
}
export default useSurvices;