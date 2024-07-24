
import React, {useEffect, useState} from 'react';

const Register = ({OnBackClick, handleRegisterClick}) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onBackClick =(ev)=>{
    OnBackClick();
  }

  const onRegisterClick = async (ev) =>{
    const response = axios.post('http://localhost:8000/api/users/create/', {
      firstName,
      lastName,
      email,
      password,
  });
  console.log(response.data);
  }

  const handleInput = async (ev, input) => {
    switch (input) {
      case 'first-name':
        setFirstName(ev.value);
        break;

      default:
        break;
    }
  }

  useEffect(() => {
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(password);
  }, [firstName, lastName, email, password]);

  return (

      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
          <div>
              <label htmlFor="first-name" className="sr-only">First Name</label>
              <input id="first-name" name="first-name" type="text" autoComplete="given-name" required value={firstName} onInput={(ev)=>{handleInput(ev, 'first-name')}} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm" placeholder="First Name" />
            </div>
            <div>
              <label htmlFor="last-name" className="sr-only">Last Name</label>
              <input id="last-name" name="last-name" type="text" autoComplete="family-name" required value={lastName} onInput={(ev)=>{handleInput(ev, 'last-name')}} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm" placeholder="Last Name" />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input id="email-address" name="email" type="email" autoComplete="email" required value={email} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm" placeholder="Email address" />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input id="password" name="password" type="password" autoComplete="current-password" required value={password} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm" placeholder="Password" />
            </div>
          </div>

          <div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4  my-1 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500" onClick={onRegisterClick}>
              Register
            </button>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 my-1 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500" onClick={onBackClick}>
              Back
            </button>
          </div>
        </form>
      </div>
  );
};

export default Register;
