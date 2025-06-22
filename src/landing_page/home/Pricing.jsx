import React from 'react'

function Pricing(){
    return(
        <div className='container mt-5 mb-5'>
            <div className="row">
                <div className="col-4 p-4 ">
                    <h1 className='mb-4 fs-2'>Unbeatable pricing</h1>
                    <p>we pioneered the concept of discount broking and price transparency in india. Flat and no hidden charges.</p>
                    <a href="" style={{textDecoration:"none"}}>See pricing &nbsp; <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className='col-2'></div>
                <div className="col-6 ">
                    <div className="row text-center">
                        <div className='col border p-4'>
                            <h1>₹0</h1>
                            <p className='mt-3'>Free equity delivery and <br />direct mutul funds</p>
                        </div>
                        <div className="col border p-4">
                            <h1>₹0</h1>
                            <p className='mt-3'>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Pricing;