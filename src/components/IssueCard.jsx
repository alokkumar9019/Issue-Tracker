import React, {memo} from 'react'

const IssueCard =memo(({issue})=>{
    return (
        <div className='m-3'>
            <h3>{IssueCard.title}</h3>
            <p>#{issue.number} openned by {issue.user.login}</p>
            <div>
                {
                    issue.labels.map((label)=>(
                        <span
                            key={label.id}
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