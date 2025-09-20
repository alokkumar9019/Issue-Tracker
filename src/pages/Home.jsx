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
    <div>
        <h1>GitHub Issue Tracker</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='owner/repo' value={repo} onChange={(e)=>setRepo(e.target.value)} />
            <button type='submit'>Search Issue</button>
        </form>
    </div>
  )
}

export default Home