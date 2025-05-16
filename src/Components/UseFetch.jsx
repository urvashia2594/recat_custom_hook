import React, {useState, useEffect} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState();
    useEffect(()=>{
        fetch(url)
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.log("Error during fetch",error))
    }, []);
    return [data]
    
}

export default useFetch
