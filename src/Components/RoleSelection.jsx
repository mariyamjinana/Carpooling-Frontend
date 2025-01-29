import React from 'react'

function RoleSelection() {
    return (
        <div>
            <div className='p-5'>
                <div className="container mt-5 ">
                    <h3 className='text-center text-success' style={{fontWeight:"bold"}}>SELECT YOUR ROLE</h3>
                    <div className="container mt-3">
                        <div className="row">
                            <div className="col-md-6">
                                <div className='border text-center p-4 rounded-4 shadow' >
                                    <h5>BE A DRIVER</h5>
                                    <p>Offer Rides to Passengers and earn Money</p>
                                    <button className='btn btn-success'>Continue as a Driver</button>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className='border text-center p-4 rounded-4 shadow'>
                                    <h5>BE A PASSENGER</h5>
                                    <p>Find and Book Rides for your travel needs</p>
                                    <button className='btn btn-success'>Continue as a Passenger</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoleSelection