import React, { useEffect, useState } from 'react';
import Register from './Register';
import axios from 'axios';
const Login = () => {
  const [registration, setRegistration] = useState(false);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const handleRegisterClick  = async (ev) => {
    ev.preventDefault();

    const response = axios.post('http://localhost:8000/api/users/create/', {
        first_name,
        last_name,
        email,
        password,
    });
    console.log(response.data);
    setRegistration(true);
  };

  // if the user decides they don't want to register anymore
  const onBackClick = () => {
    setRegistration(false);
  }


  useEffect(()=>{
    console.log('Registration')
  }, [registration])

  return (
    <>
    {!registration ?

      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm" placeholder="Email address" />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm" placeholder="Password" />
            </div>
          </div>

          <div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 my-1 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              Sign in
            </button>
            <button className="group relative w-full flex justify-center py-2 px-4 my-1 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500" onClick={handleRegisterClick}>
              Register
            </button>
          </div>
        </form>
      </div>
   :<>
      <Register OnBackClick={onBackClick} handleRegisterClick={handleRegisterClick}/>
    </>}

    </>
  );
};

export default Login;
