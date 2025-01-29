import React from 'react'

function UserDetails() {
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4 text-center">
                        <div class="card shadow" style={{ width: "18rem" }}>
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Name</h5>
                                <p class="card-text">email@gmail.com</p>
                                <span className='bg-success rounded-3 text-light px-3 py-1'>Active</span>
                                <p class="card-text mt-2">Address : abc</p>
                                <p class="card-text">Phone : +91 xxxxxxxxx</p>
                                <p class="card-text">License: </p>

                                <div className='d-flex '>
                                    <a href="#" class="btn btn-danger me-2 ms-4">Suspend</a>
                                    <a href="#" class="btn btn-secondary border border-dark">Send Message</a>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-4">
                                    <div class="card" >
                                        <div class="card-body text-center">
                                            <h5 class="card-title">Total Rides</h5>
                                            <h3 class="card-text">450</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div class="card" >
                                        <div class="card-body text-center">
                                            <h5 class="card-title">Total Earnings</h5>
                                            <h3 class="card-text">450</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div class="card" >
                                        <div class="card-body text-center">
                                            <h5 class="card-title">Average Rating</h5>
                                            <h3 class="card-text">4.5</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <h4 style={{ fontWeight: "bolder" }}>Ride Detaills</h4>
                            <table class="table table-hover text-center border border-1">
                                <thead>
                                    <tr>
                                        <th scope="col"  className='border border-1'>#</th>
                                        <th scope="col"  className='border border-1'>Date</th>
                                        <th scope="col" className='border border-1'>Passenger</th>
                                        <th scope="col" className='border border-1'>Earnings</th>
                                        <th scope="col" className='border border-1'>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td  className='border border-1'>Mark</td>
                                        <td  className='border border-1'>Otto</td>
                                        <td  className='border border-1'>870</td>
                                        <td  className='border border-1'><span className='bg-success rounded-3 text-light px-3 py-1'>Completed</span></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td className='border border-1'>Jacob</td>
                                        <td className='border border-1'>Thornton</td>
                                        <td className='border border-1'>300</td>
                                        <td className='border border-1'><span className='bg-danger rounded-3 text-light px-3 py-1'>Cancelled</span></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td className='border border-1'>Larry</td>
                                        <td className='border border-1'>ram</td>
                                        <td className='border border-1'>230</td>
                                        <td className='border border-1'><span className='bg-success rounded-3 text-light px-3 py-1'>Completed</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetails