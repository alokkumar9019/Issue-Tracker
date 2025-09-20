import React, { useState, useEffect, useReducer } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import IssueCard from '../components/IssueCard'
import FilterControls from '../components/FilterControls';

const initialState={status:"open", label: ""};
function reducer(state,action){
    switch(action.type){
        case "SET_STATUS":
         return {...state, status: action.payload};
        case "SET_LABEL":
            return {...state, label:action.payload};
        default:
            return state;
    }
}

const Issues=()=> {
    const {owner,repo} =useParams();
    const [issues, setIssues] =useState([]);
    const [loading, setLoading]=useState(false);
    const [error, setError]=useState(null);

    const [filters, dispatch]= useReducer(reducer, initialState);

    useEffect(()=>{
        const fetchIssues = async()=>{
        setLoading(true);
        setError(null);
        try {
            let url=`https://api.github.com/repos/${owner}/${repo}/issues?state=${filters.status}`;
            const res = await axios.get(url);
            setIssues(res.data);
        } catch (error) {
            setError("Failed to Fetch Issues");
        } finally{
            setLoading(false);
        }
    }
    fetchIssues();
    },[owner,repo,filters.status]);

    const filteredIssues=issues.filter((issue)=> filters.label? issue.labels.some((l)=> l.name.includes(filters.label)):true);
  return (
    <div className='text-center'>
        <h2 className='font-bold'>Isuues for {owner}/{repo}</h2>
        <FilterControls filters={filters} dispatch={dispatch}/>
        {loading && <p>Loading Issues...</p>}
        {error && <p style={{color:"red"}}>Error</p>}

        {
            filteredIssues.map((issue)=>(
                <IssueCard key ={issue.id} issue={issue}/>
            ))
        }
    </div>
  )
}

export default Issues