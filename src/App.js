import './App.css';
import app from './firebase.init';
import Image from './images/facebook.svg'
import { FacebookAuthProvider, getAuth, signInWithPopup } from "firebase/auth";


const auth = getAuth(app);

const facebookProvider = new FacebookAuthProvider();

const handleFacebookEvent = () => {
  signInWithPopup(auth, facebookProvider)
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
          <img className='facebook-image ' src={Image} alt="" />
          <button>SIGN IN WITH FACEBOOK</button>
        </div>
      </div>
    </div>
  );
}

export default App;
