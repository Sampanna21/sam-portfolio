import React from 'react'
import education from './Data/education.json'

const Education = () => {
  return (
    <>
    <div className="container ed">
      <h1>Education</h1>
      {
        education.map((data)=>{
          return(
            <>
            <div key={data.id} className='ed-items text-center'>
              <div className="left">
              </div>
              <div className='right'>
                <h2>{data.role}</h2>
                <h4>
                  <span style={{color: "plum"}}>
                    {data.startDate}-{data.endDate} {" "}
                  </span>
                  </h4>
                <h4> 
                  <span style={{color: "peachpuff"}}>
                    {data.organisation}, {data.location}
                    </span></h4>
              </div>
            </div>
            </>
          )
        })
      }
    </div>
    </>
  )
}

export default Education
