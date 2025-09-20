import React, {memo} from 'react'

const IssueCard =memo(({issue})=>{
    return (
        <div>
            <h3>{IssueCard.title}</h3>
            <p>#{issue.number} openned by {issue.user.login}</p>
            <div>
                {
                    issue.labels.map((label)=>(
                        <span
                            key={label.id}
                            style={{background:`${label.color}`, color:'white', margin:"auto", borderRadius:"5px"}}
                        >
                            {label.name}

                        </span>
                    ))
                }
            </div>
        </div>
    )
})

export default IssueCard