import "./Login.css";

import { auth, provider } from "../../Services/Firebase/firebase";
import { signInWithPopup } from "firebase/auth";

function Login() {
  return (
    <div className="login">
      <div className="top-wrapper">
        <h1>Smigma Chat</h1>
      </div>

      <button
        className="login__button"
        onClick={() => {
          signInWithPopup(auth, provider).catch((error) => {});
        }}
      >
        Roll In
      </button>
    </div>
  );
}

export default Login;
