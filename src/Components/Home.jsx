import React from 'react'
import pdf from '../pdf/Blue Professional Modern CV Resume.pdf'
import myImage from '../assets/myImage/me.jpg'; // adjust path as needed


const Home = () => {
  return (
    <>
    <div className="container home">
        <div className="left">
            <h1>Hii! I am Sampanna Mishra</h1>
            <a href={pdf} download={"Blue Professional Modern CV Resume.pdf"} className="btn btn-outline-warning">Download Resume</a>
        </div>
        <div className="right">
            <div className="img">
                <img src={myImage} alt="me" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Home
