import './App.css';
import app from './firebase.init';
import facebookImage from './images/facebook.svg';
import googleImage from './images/google.svg';
import { FacebookAuthProvider, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const auth = getAuth(app);

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


function App() {
  return (
    <div>
      <div className='sign-in-form'>
        <div onClick={handleFacebookEvent} className="facebook-auth-container">
          <img className='facebook-image ' src={facebookImage} alt="" />
          <button>SIGN IN WITH FACEBOOK</button>
        </div>
        <div onClick={handleGoogelEvent} className="google-auth-container">
          <img className='google-image ' src={googleImage} alt="" />
          <button>SIGN IN WITH GOOGLE</button>
        </div>
      </div>
    </div>
  );
}

export default App;
