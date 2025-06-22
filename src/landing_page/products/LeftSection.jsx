import React from 'react'

function LeftSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
}) {
    return (
        <div className="container  ">
           <div className="row mt-5 mb-5">
                <div className="col-1"></div>
                <div className="col-5 p-3 mt-2">
                    <img src={imageURL} style={{width:"90%"}} alt="" />
                </div>
                <div className="col-1"></div>
                <div className="col-5 p-5">
                    <h1 className=' mt-4'>{productName}</h1>
                    <p className='mt-4 mb-4 ' style={{lineHeight:"1.5", fontSize:"16px", width:"90%"}}>{productDescription}</p>
                    <div className='mb-3'>
                        <a style={{textDecoration:"none"}}href={tryDemo}>Try Demo &nbsp; <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a> 
                       <a style={{textDecoration:"none" , marginLeft:"50px"}} href={learnMore}>Leran More &nbsp; <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a> 
                    </div>
                    <div>
                        <a href={googlePlay}><img src='media/googlePlayBadge.svg'/></a>
                        <a className='mx-4' href={appStore}><img src="media/appstoreBadge.svg"/></a>
                    </div>
                </div>
            </div> 
           
        </div>
    );
}
export default LeftSection;