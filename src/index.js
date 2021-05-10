import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';//
import { useFormik } from 'formik';

const HomeComponent = () => {
  const formik = useFormik({
    initialValues: {
      Id: '',
      Name: '',
      email: '',
      Neighborhood: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values));
    }
  });
  return (
    <div>
      <h2> Welcome To NESTLY!</h2>

      <form onSubmit={formik.handleSubmit}>
        <p>
          <form>
            <label>
              UserName:
    <input type="text" name="UserName" />
            </label>

          </form>
          <form>
            <label>
              Password:
    <input type="text" name="Password" />
            </label>
            <input type="submit" value="Sign In" />
          </form>
          <form>
            <label>
              Register:
    <input type="text" name="Register" />
            </label>
            <input type="submit" value="Register" />
          </form>
        </p>

      </form>
    </div>




  )
}



const element = <HomeComponent></HomeComponent>

ReactDOM.render(element, document.getElementById('root'));


