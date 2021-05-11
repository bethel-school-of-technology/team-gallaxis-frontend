import React from 'react';
import App from '../App';

const Register = () => {
    return (
        <div className='form-content-right'>
            <form className='form'>
                <h1> Get Registered Today with Nestly Neighborhood and Join the CommUNITY, Your CommUNITY </h1>
                <div className='form-inputs'>
                    <label htmlFor='username'
                        className='form-label'>
                        UserName
                    </label>
                    <input
                        type='text'
                        name='username'
                        className='form-input'
                        placeholder='Enter your username'
                    />
                </div>
                <div className='form-inputs'>
                    <label htmlFor='email'
                        className='form-label'>

                        Email
                    </label>
                    <input
                        type='email'
                        name='email'
                        className='form-input'
                        placeholder='Enter your Email'
                    />
                </div>
            </form>
        </div>
    )
};

export default Register;