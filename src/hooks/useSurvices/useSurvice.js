import { useEffect, useState } from "react"

const useSurvices=()=>{
    const [survices, setSurvices]= useState([]);

    useEffect(()=>{
        fetch(`https://raw.githubusercontent.com/Munni2244/api/main/survices.json`)
        .then(res=> res.json())
        .then (data => setSurvices(data))
    },[])
    return {
        survices,
        setSurvices
    }
}
export default useSurvices;