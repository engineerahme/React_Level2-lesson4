import Header from "../comp/header";
import Footer from "../comp/Footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const Signin = () => {
  return (
    <>
      <Helmet>
        <title> Sign-In</title>
      </Helmet>
      <Header />

      <main>
        <form action="">
          <input type="email" placeholder="Email :" required/>
          <input type="password" placeholder="Password :" required/>
          <button>Sign in</button>
          <p className="account">
            Do not have an account ? <Link to="Signup">Sign-up</Link>
          </p>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Signin;
