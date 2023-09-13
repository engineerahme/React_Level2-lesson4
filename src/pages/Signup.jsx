import Header from "../comp/header";
import Footer from "../comp/Footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <Helmet>
        <title> Sign-up</title>
      </Helmet>
      <Header />

      <main>
        <form action="">
          <p style={{fontSize:"25px" , marginBottom:"22px"}}>Creat a new account <span>🧡</span></p>
          <input type="email" placeholder="Email :" required/>
          <input type="password" placeholder="Password :" required/>
          <button>Sign up</button>
          <p className="account">
            Already have  an account ? <Link to="Signup">Sign-up</Link>
          </p>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Signup;