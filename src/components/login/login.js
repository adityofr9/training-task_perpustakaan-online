import React from 'react';
import './login.css';

// Export Functional Component
export { Login };

function Login() {
    return(
        <div className="modal modal-signin d-block py-5" role="dialog" id="modalSignin">
            <div className="modal-dialog" role="document">
                <div className="modal-content rounded-4 shadow">
                    <div className="modal-header d-flex flex-column p-5 pb-4 border-bottom-0">
                        <img src={process.env.PUBLIC_URL + '/assets/logonobg.png'} className="mx-auto d-block" alt='logo' />
                        <h2 className="fw-bold mt-3 mb-0 mx-auto">Welcome Back!</h2>
                    </div>
                    <div className="modal-body p-5 pt-0">
                        <form className="">
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control rounded-3" id="floatingInput" placeholder="name@example.com" required />
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control rounded-3" id="floatingPassword" placeholder="Password" required />
                                <label for="floatingPassword">Password</label>
                            </div>
                            <hr className="my-4"/>
                            <button className="w-100 mb-2 btn btn-lg btn-danger rounded-3" type="submit">LOGIN</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}