import React from 'react'
import '../css/LandingPage.css'
import GoogleSignInButton from '../components/GoogleSignInButton'



function LandingPage() {

    return (
        <div className='LandingPage'>
            <div className="landing-content">
                <div className="title-container">
                    <h1>
                        <span style={{
                            color: 'rgb(232, 76, 138, 1)',
                            fontSize: '100px',
                            }}>
                            W
                            </span> {''}
                        <span style={{
                            color: 'rgba(43, 181, 132, 1)',
                            fontSize: '100px'}}>
                            Chat!
                        </span>
                    </h1>
                </div>
                <div className="landing-page-status">
                    <div className="circle" id="circle1"></div>
                    <div className="circle" id="circle2"></div>
                    <div className="circle" id="circle3"></div>
                </div>

                <GoogleSignInButton />
            </div>
        </div>
    )
}

export default LandingPage
