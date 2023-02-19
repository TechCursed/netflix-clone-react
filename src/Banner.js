import React, {useState, useEffect} from 'react'
import requests from './requests';
import axios from './axios';

function Banner() {

const [movie, setMovie] = useState([]);



useEffect(() => {

  
    async function fetchData(){

        const request = await axios(requests.fetchNetflixOriginals);
        console.log(request.data.results[Math.floor(Math.random()*requests.fetchNetflixOriginals.length-1)]);
    }
    fetchData()

  }, [])


  return (
    <header className="Banner">

        <div className="Banner__contents">
             
        </div>

    </header>
  )
}

export default Banner