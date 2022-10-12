import React, { useState, useEffect } from 'react'

const Fetch = (url) => {

    const [ data, setData ] = useState([])
    const [ isPending, setIsPending ] = useState(true)
    const [ error, setError ] = useState(null)

    useEffect(() => {
        fetch(url)
        .then( res => {
            if(!res.ok) {
                throw Error("Error Fetching Data")
            }
            return res.json()
        })
        .then( data => {
            setData(data)
            setIsPending(false)
            setError(null)
        })
        .catch( err => {
            setIsPending(false)
            setError(err.message)
        })
    }, [url])

  return {
    data, setData, isPending, error
  }
}

export default Fetch