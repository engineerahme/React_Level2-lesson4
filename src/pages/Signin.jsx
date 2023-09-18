import Header from "../comp/header";
import Footer from "../comp/Footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [hasError, sethasError] = useState(false);
  const [firebaseEror, setfirebaseEror] = useState(false);

  return (
    <>
      <Helmet>
        <title> Sign-In</title>
      </Helmet>
      <Header />

      <main>
        <form action="">
          <input
            onChange={(eo) => {
              setemail(eo.target.value);
            }}
            type="email"
            placeholder="Email :"
            required
          />
          <input
            onChange={(eo) => {
              setpassword(eo.target.value);
            }}
            type="password"
            placeholder="Password :"
            required
          />
          <button
            onClick={(eo) => {
              eo.preventDefault();

              signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  // Signed in
                  const user = userCredential.user;
                  console.log(user);
                  navigate("/");

                  // ...
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  console.log(errorMessage);
                  sethasError(true);

                  switch (errorCode) {
                    case "auth/invalid-email":
                      setfirebaseEror("Wrong Email");
                      break;

                    case "auth/too-many-requests":
                      setfirebaseEror(
                        "too-many-requests , please try again later."
                      );
                      break;

                    case "auth/invalid-login-credentials":
                      setfirebaseEror("user not found ");
                      break;

                      case "auth/wrong-password":
                      setfirebaseEror("wrong password");
                      break;

                    

                    case "auth/invalid-password":
                      setfirebaseEror("Wrong password");
                      break;

                    default:
                      setfirebaseEror(errorCode);
                      break;
                  }
                });
            }}
          >
            Sign in
          </button>
          <p className="account">
            Do not have an account ? <Link to="Signup">Sign-up</Link>
          </p>
          {hasError && <h3>{firebaseEror}</h3>}
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Signin;
