
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ModalComponent from './ModalComponent';

const Register = ({ OnBackClick }) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('Registration')


  const afterOpenModal = async () => {
    setPassword('');
    setConfirmPassword('');
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  const checkPasswordsMatch = () => {
    return password === confirmPassword
  }

  const onBackClick = (ev) => {
    ev.preventDefault();
    OnBackClick();
  }

  const checkVals = () => {
    return (firstName && lastName && email && password && confirmPassword && checkPasswordsMatch())
  }
  const onRegisterClick = async (ev) => {
    ev.preventDefault();
    console.log(checkVals());
    /*
    if (!firstName) {
      setModalMessage('First Name is required');
      setModalIsOpen(true);
      return;
    }
    if (!lastName) {
      setModalMessage('Last Name is required');
      setModalIsOpen(true);
      return;
    }
    if (!email) {
      setModalMessage('Email is required');
      setModalIsOpen(true);
      return;
    }
    if (!password) {
      setModalMessage('Password is required');
      setModalIsOpen(true);
      return;
    }
    if (!confirmPassword) {
      setModalMessage('Confirm Password is required');
      setModalIsOpen(true);
      return;
    }
    if (!checkPasswordsMatch()) {
      setModalMessage('Passwords do not match');
      setModalIsOpen(true);
      return;
    }
      */

    try {
      const response = await axios.post('http://localhost:8000/api/users/create/', {
        firstName,
        lastName,
        email,
        password,
      });
      console.log(response.data);
    } catch (error) {
      setModalMessage('Registration failed');
      setModalIsOpen(true);
    }
  }

  const handleInput = async (ev, input) => {
    ev.preventDefault();

    let val = ev.target.value;
    switch (input) {
      case 'first-name':
        setFirstName(val);
        break;
      case 'last-name':
        setLastName(val);
        break;
      case 'email':
        setEmail(val);
        break;
      case 'password':
        setPassword(val);
        break;
      // basic check for same password values prior to registrations
      case 'password-confirm':
        setConfirmPassword(val);
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

      <ModalComponent
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        modalMessage={modalMessage}
        afterOpenModal={afterOpenModal}
      />
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>
      </div>
      <form className="mt-8 space-y-6" method="POST">

        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="first-name" className="sr-only">First Name</label>
            <input id="first-name" name="First Name" type="text" autoComplete="given-name" required value={firstName} onInput={(ev) => { handleInput(ev, 'first-name') }} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm" placeholder="First Name" />
          </div>
          <div>
            <label htmlFor="last-name" className="sr-only">Last Name</label>
            <input id="last-name" name="Last Name" type="text" autoComplete="family-name" required value={lastName} onInput={(ev) => { handleInput(ev, 'last-name') }} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm" placeholder="Last Name" />
          </div>
          <div>
            <label htmlFor="email-address" className="sr-only">Email address</label>
            <input id="email-address" name="Email" type="email" autoComplete="email" required value={email} onInput={(ev) => { handleInput(ev, 'email') }} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm" placeholder="Email address" />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input id="password" name="Password" type="password" autoComplete="new-password" required value={password} onInput={(ev) => { handleInput(ev, 'password') }} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm" placeholder="Password" />
          </div>
          <div>
            <label htmlFor="password-confirm" className="sr-only">Confirm Password</label>
            <input id="password-confirm" name="Password Confirm" type="password" autoComplete="new-password" required value={confirmPassword} onInput={(ev) => { handleInput(ev, 'password-confirm') }} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm" placeholder="Confirm Password" />
          </div>
        </div>

        <div>
          <button type="submit" className="group relative w-full flex justify-center py-2 px-4  my-1 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500" onClick={onRegisterClick}>
            Register
          </button>
          <button className="group relative w-full flex justify-center py-2 px-4 my-1 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500" onClick={onBackClick}>
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
