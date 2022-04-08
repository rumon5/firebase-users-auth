import './App.css';
import app from './firebase.init';
import facebookImage from './images/facebook.svg';
import googleImage from './images/google.svg';
import { FacebookAuthProvider, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [registered, setRegistered] = useState(false);

  const handleLogInAndSignUp = event => {
    setRegistered(event.target.checked);
    console.log(event.target.checked);
  }

  const handleFacebookEvent = () => {

    // Facebook authentication handler seating 
    const facebookProvider = new FacebookAuthProvider();
    signInWithPopup(auth, facebookProvider)
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.log(error);
      })
  }

  // Google authentication handler seating
  const googleProvider = new GoogleAuthProvider();
  const handleGoogelEvent = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.log(error);
      })
  }


  return (
    <div>
      <div className='sign-in-form'>
        <h2 className='text-green'>Please {registered ? 'Log In' : 'Sign In'}!!!</h2>
        <div className="get-user-info">
          <form>
            <div className='registered'>
              {
                !registered ? <input
                  className='name- input'
                  type="text"
                  name="name"
                  id="name"
                  placeholder='Enter your name' /> : ''
              }
              <input
                className='email-input input'
                type="email"
                name="email" id="email"
                placeholder='Enter your email' />
              <input
                className='password-input input'
                type="password"
                name="password"
                id="password"
                placeholder='Enter your password' />
            </div>
            <input onChange={handleLogInAndSignUp} type="checkbox" name="checkbox" id="checkbox" />
            <label htmlFor="checkbox"> {
              registered ? 'Create new account' : 'Already have a account?'
            }</label>
            <br />
          </form>
        </div>

        {
          registered ? <button className='log-in-button'>LOG IN</button> :
            <div>
              <div onClick={handleFacebookEvent} className="facebook-auth-container">
                <img className='facebook-image ' src={facebookImage} alt="" />
                <button>SIGN IN WITH FACEBOOK</button>
              </div>
              <div onClick={handleGoogelEvent} className="google-auth-container">
                <img className='google-image ' src={googleImage} alt="" />
                <button>SIGN IN WITH GOOGLE</button>
              </div>
              <div>
                <button className='sign-in-button'>SIGN IN</button>
              </div>
            </div>
        }
      </div>
    </div>
  );
}

export default App;
