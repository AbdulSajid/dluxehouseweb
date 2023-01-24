import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Thankyou extends Component {
    render() {
        return (
            <div>
                <div className="bg-light py-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mb-0"><Link to="/">Home</Link> <span className="mx-2 mb-0">/</span> <strong className="text-black">Thankyou</strong></div>
                        </div>
                    </div>
                </div>

                <div className="site-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <span className="icon-check_circle display-3 text-success"></span>
                                <h2 className="display-3 text-black">Thank you!</h2>
                                <p className="lead mb-5">Thank you for your order!</p>
                                <p><Link to='/'><div className="btn btn-sm" style={{color  :"black"}}>Back to shop</div></Link></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Thankyou;