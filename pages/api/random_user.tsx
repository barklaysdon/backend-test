import * as React from "react";
import Head from "next/head";
import { useState, useEffect } from "react";

const Random_User = () => {
    const [loading,  setLoading] = useState(true);
    const [person,  setPerson] = useState(null);
    const [error,setErrors] = useState(false)

   
    async function getPers() {
       
      const res = await fetch("https://api.randomuser.me/");

      res.json()
      .then(res => setPerson(res.results[0])
      ).then(() => setLoading(false))
      .catch(err => setErrors(err))
        
          console.log(person);
   
  }
    useEffect(() => {
     
      getPers();
    },[])

  return (
    <div className="w-100 h-100">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="" >
        <div className="flex fullsize center">
          {loading ? (<div>Loading...</div>) : (<div style={{color:"red"}}>{person.name.title} {person.name.first} </div>) }
        </div>
      </main>
    </div>
  );
};

export default Random_User;
