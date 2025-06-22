import React from 'react'

function Universe(){
    return(
        <div className="container ">
            <div className="row mt-5 text-center mb-5">
            <p className=' mb-5' style={{lineHeight:"1.5", fontSize:"20px"}}>Want to know more about our technology stack? Check out the <a href="" style={{textDecoration:"none"}}>Zerodha.tech</a> blog.</p>
            <h1 className=' mt-5 mb-4 fs-3'>The Zerodha Universe</h1>
            <p className=' mb-5 ' style={{lineHeight:"1.5", fontSize:"16px"}}>Extend your trading and investment experience even further with our partner platforms</p>
                    
            
                <div className="col-4 p-3 mt-5">
                    <img src="media/smallcaseLogo.png" alt="" />
                    <p className='text-muted mt-3' style={{fontSize:"12px", fontWeight:"lighter"}}>Thematic investing platfrom</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media\zerodhaFundhouse.png" style={{height:"40%", width:"50%"}} alt="" />
                    <p className='text-muted mt-3' style={{fontSize:"12px", fontWeight:"lighter"}}>Asset management</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/streakLogo.png"  style={{height:"40%", width:"50%"}} alt="" />
                    <p className='text-muted mt-3' style={{fontSize:"12px", fontWeight:"lighter"}}>algo & strategy platfrom</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/sensibullLogo.svg" style={{height:"40%", width:"50%"}} alt="" />
                    <p className='text-muted mt-3' style={{fontSize:"12px", fontWeight:"lighter"}}>Options trading platfrom</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/goldenpiLogo.png" alt="" />
                    <p className='text-muted mt-3' style={{fontSize:"12px", fontWeight:"lighter"}}>TBonds trading platfrom</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media\dittoLogo.png" style={{height:"40%", width:"40%"}}   alt="" />
                    <p className='text-muted mt-3' style={{fontSize:"12px", fontWeight:"lighter"}}>Insurence</p>
                </div>
                            <button className='p-2 mb-5 btn btn-primary fs-5' style={{width: "20%",margin:"0 auto"}}>Signup For Free</button>
            </div> 
        </div>
        
    )
}
export default Universe;