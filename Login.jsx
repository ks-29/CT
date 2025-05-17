import React from 'react'
import {Link} from 'react-router-dom'
import Home from './Home'

const Login = () => {
    return (
            <div className='Ngilo-user'>
                <div className='user-login'>
                    <h2>Log In</h2>
                    <from>
                        <label>Username</label>
                        <input/>
                        <label>Password</label>
                        <input/>
                    
                    </from>
                    <br/>
                    <Link key={Home}
                          to={'./Home'}
                          className='user-btn'
                          type="submit"
                          >
                            Log In
                          </Link>
                    
                </div>
            </div>
           )
}
export default Login;