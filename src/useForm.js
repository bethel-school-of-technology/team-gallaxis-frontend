import { useState, useEffect } from 'react';



const UseForm = () => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: '',

    })
    const [errors, setErrors] = ({})


    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value

        })
    }

    return { handleChange, values };

};

export default UseForm;