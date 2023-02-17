import React from 'react'
import "../App.css"
import { useLocation } from 'react-router-dom'
function Home() {
    const location = useLocation()
    console.log(location)
    return (
        <div className='bg'>
            <div>
                <br />
                <h1 className='ms-5'>
                    Hello {location.state.frName}
                </h1>
            </div>
            <div className='ms-5 bg2'>
                <h4>
                    full Name : {location.state.frName}-{location.state.lsname}
                </h4>
                <h4>
                    Email login : {location.state.Email}
                </h4>
            </div>
        </div>
    )
}

export default Home