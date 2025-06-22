import React from 'react'

function Home() {
    return(
    <div className='container mb-5'>
        <div className='row text-center'>
            <img src="media\homeHero.png" alt="homeherp" className='mb-5' />
            <h1 className='mt-5'>Invest in Everything</h1>
            <p>Online platfrom to invest in stocks,derivatives,mutal funds, and more</p>
            <button className='p-2 btn btn-primary fs-5' style={{width: "20%",margin:"0 auto"}}>Signup Now</button>
        </div>
    </div>
    )
};

export default Home;