import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
    const [repo, setRepo] =useState("");
    const navigate =useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!repo.includes("/")){
            alert("Enter repo in format: owner/repoName");
            return;
        }
         const [owner, repoName] =repo.split("/");
         navigate(`/repo/${owner}/${repoName}`);
    }
  return (
    <div className='font-bold text-center'>
        <h1 className='font-bold text-center mb-5'>GitHub Issue Tracker</h1>
        <form onSubmit={handleSubmit}>
            <input className='border-1' type="text" placeholder='owner/repo' value={repo} onChange={(e)=>setRepo(e.target.value)} />
            <button className='bg-green-300 hover:bg-green-600 ml-2' type='submit'>Search Issue</button>
        </form>
    </div>
  )
}

export default Home