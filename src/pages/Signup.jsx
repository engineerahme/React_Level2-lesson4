import Header from "../comp/header";
import Footer from "../comp/Footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { auth } from '../firebase/config';
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";


const Signup = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");


  return (
    <>
      <Helmet>
        <title> Sign-up</title>
      </Helmet>
      <Header />

      <main>
        <form action="">
          <p style={{ fontSize: "25px", marginBottom: "22px" }}>
            Creat a new account <span>🧡</span>
          </p>
          <input onChange={(eo) => {
            setemail(eo.target.value)
          }}
          type="email" placeholder="Email :" required />
          <input onChange={(eo) => {
            setpassword(eo.target.value)
          }}
           type="password" placeholder="Password :" required />
          <button
            onClick={(eo) => {
              eo.preventDefault();
              
              createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  // Signed in
                  const user = userCredential.user;
                  console.log("doneeee")
                  // ...
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  console.log(errorMessage)
                  // ..
                });
            }}
          >
            Sign up
          </button>
          <p className="account">
            Already have an account ? <Link to="Signup">Sign-up</Link>
          </p>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Signup;
