import React from 'react'

function RightSection(
    { 
        productName, 
        productDescription, 
        imageURL, 
        learnMore, 
        googlePlay, 
        appStore 
    }
) {
    return (
        <div className="container  ">
           <div className="row mt-5 mb-5">
                <div className="col-1"></div>
                <div className="col-5 p-5 ">
                    <h1 className=' mt-4'>{productName}</h1>
                    <p className='mt-4 mb-4 ' style={{lineHeight:"1.5", fontSize:"16px", width:"90%"}}>{productDescription}</p>
                    <div className=''>
                    
                       <a style={{textDecoration:"none" , marginLeft:"5px"}} href={learnMore}>Leran More &nbsp; <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a> 
                    </div>
                    
                </div>
                 <div className="col-1"></div>
                <div className="col-5  pb-3">
                    <img src={imageURL} alt="" />
                </div>
            </div> 
           
        </div>
    );
}
export default RightSection;