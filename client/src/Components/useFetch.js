import { useState, useEffect } from "react"

const useFetch=(url)=>{

    const [data, setData] = useState([])
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        fetch(url)
        .then(res=>{
            if(!res.ok){
                throw Error("Sorry!, Unable to Fetch Data")
            }
            return res.json()
        })
        .then(data =>{
            setData(data)
            setIsPending(false)
            setError(null)
        })
        .catch(err=>{
           setIsPending(false)
           setError(err.message)
        })
    }, [url])

    return {data, setData,  isPending, error}
}

export default useFetch