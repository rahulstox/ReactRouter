import React, { useEffect, useState } from 'react'
import { useLoaderData} from 'react-router-dom'

function Github() {
  const data = useLoaderData()
  // const [data, setData] = useState([])
  //   useEffect(() => {
  //       fetch('https://api.github.com/users/rahulstox')
  //       .then(response => response.json)
  //       .then(data => {
  //         console.log(data);
  //         setData(data)
  //       })
  //   }, [])
  return (
    <div className='text-3xl bg-gray-600 m-4 p-2 text-center text-white'> Github followers: {data.followers} 
    <img className= 'text-center' src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () =>{
  const response = await fetch('https://api.github.com/users/rahulstox')
  return response.json()
}