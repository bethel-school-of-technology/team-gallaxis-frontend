
import React, { useState } from 'react';



const Register = () => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: '',

    })



    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value

        })
    }


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
                        id='username'
                        type='text'
                        name='username'
                        className='form-input'
                        placeholder='Enter your username'
                        value={values.username}
                        onChange={handleChange}
                    />
                </div>
                <div className='form-inputs'>
                    <label htmlFor='email'
                        className='form-label'>
                        Email
                    </label>
                    <input
                        id='email'
                        type='email'
                        name='email'
                        className='form-input'
                        placeholder='Enter your Email'
                        value={values.email}
                        onChange={handleChange}
                    />
                </div>
                <div className='form-inputs'>
                    <label htmlFor='email'
                        className='form-label'>

                        Password
                    </label>
                    <input
                        id='Password'
                        type='Password'
                        name='Password'
                        className='form-input'
                        placeholder='Enter your Password'
                        value={values.password}
                        onChange={handleChange}
                    />
                </div>
                <div className='form-inputs'>
                    <label htmlFor='email'
                        className='form-label'>

                        Confirm Password
                    </label>
                    <input
                        id='Password2'
                        type='Password'
                        name='Password2'
                        className='form-input'
                        placeholder='Enter your Password'
                        value={values.password2}
                        onChange={handleChange}
                    />
                </div>
                <button className='form-input-btn'
                    type='submit'>
                    Sign up!
                </button>
                <span className="form-input-login">
                    Already have an account? Login <a href="#">here</a>
                </span>
            </form>
        </div>
    )
};

export default Register;