import React from 'react'
import '../App.css';
import PieTech from './PieTech';
const Logo = () => {
    return (
        <>
            <div className="App">
                <header className="App-header" key={3}>
                    <img src="/logo192.jpg" className="App-logo" alt="logo" />
                    <h2>
                        <code>REACT INTORDUCTION</code> BY PIE TECH YT
                    </h2>
                    <h3 style={{color : "orange"}}>
                        Like, <code>Share</code> & Subscribe
                    </h3>
                  
                </header>
            </div>
        </>
    )
}
export default Logo
