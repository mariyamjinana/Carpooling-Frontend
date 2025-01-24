import React from 'react'
import bg from '../assets/bg.gif'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            < div style={{ height: "100vh", backgroundColor: "rgb(51, 121, 153)" }}>

                <div className="container">
                    <div className='row pt-5'>
                        <div className='col-md-8 mt-5'>
                            <img src={bg} alt="" className='w-75' />
                        </div>
                        <div className='col-md-4 pt-5 mt-5'>
                            <p className='fs-5 text-light'>Why drive alone when you can share the journey? Join our carpooling community and make every ride more enjoyable and sustainable</p>
                            <Link to={'/login'}>
                                <button className='btn btn-warning px-3 py-2 mt-3'><h5>Get Started</h5></button>

                            </Link>
                        </div>
                    </div>
                </div>
            </ div>
        </>
    )
}

export default Home