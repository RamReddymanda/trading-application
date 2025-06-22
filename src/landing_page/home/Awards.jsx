import React from 'react'

function Awards() {
    return(<>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-6 p-5">
                        <img src="media/largestBroker.svg"alt="" />
                    </div>
                    <div className='col-6 p-5 mt-3'>
                        <h1>Largest stock broker in India</h1>
                        <p className='mb-5'>2+ million our clients conntibute to over 15% of all retaail order volumes in india daily bt trading and investing in:</p>
                        <div className="row mb-4">
                            <div className='col-6'>
                            <ul >
                            <li><p>Stocks & IPOs</p></li>
                            <li><p>Commodity Derivatives</p></li>
                            <li><p>Mutual Funds</p></li>
                            </ul>
                            </div>
                            <div className='col-6 '>
                            <ul >
                             <li><p>Futures and Options</p></li>
                            <li><p>cuurency Derivatives</p></li>
                            <li><p>Bonds and Govt. Securities</p></li>              
                            </ul>
                            </div>
                            
                        </div>
                        <img src="media/pressLogos.png" style={{width:"95%"}} alt="" />
                    </div>
                </div>
            </div>
        </>);
}
export default Awards;