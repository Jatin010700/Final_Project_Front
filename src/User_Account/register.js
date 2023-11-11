import React, { useState } from "react";
import "../CSS/main.css";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "./icon";
import { Preloader } from "../Components/preloader";

export default function Register() {
  const [fNameValue, setFnameValue] = useState("");
  const [lNameValue, setLnameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [userValue, setUserValue] = useState("");
  const [passValue, setPassValue] = useState("");
  let [paraValue, setParaValue] = useState("");
  let [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  // https://car-rental-back.onrender.com/register

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://car-rental-back.onrender.com/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: fNameValue,
            lastName: lNameValue,
            email: emailValue,
            username: userValue,
            password: passValue,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setParaValue(data.message);
        setSuccess(true);

        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } else {
        const errorData = await response.json();
        setParaValue(errorData.error);
        setSuccess(false);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred during registration.");
    }
  };

  const isFormValid = () => {
    return (
      fNameValue === "" ||
      lNameValue === "" ||
      emailValue === "" ||
      userValue === "" ||
      passValue === ""
    );
  };
  return (
    <div className="flex justify-center items-center ">
    <div
      id="container"
      className="flex  w-3/4 mt-16 rounded-2xl justify-between registerDiv"
    >
      <form
        id="register-form"
        className="flex flex-col text-center bg-white p-4  rounded-tl-2xl rounded-2xl h-full sign-in-form"
        onSubmit={handleSubmit}
      >
 <Link
          className="text-L-black text-5xl text-center font-bold transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-150 mb-4 mobileHeader "
          to={"/"}
        >
          <span className="text-B-yellow">Car</span>{" "}
          <i className=" bi bi-car-front-fill"></i> Rental
        </Link>

        <p
          className={`text-center font-bold text-white ${
            success ? "success" : "error"
          }`}
        >
          {paraValue}
        </p>
       
        <h2 className="text-B-yellow text-4xl font-bold">REGISTER</h2>

        <div className="mt-4 input-field">
          <input
            type="text"
            id="firstName"
            className=" mb-2 bg-G-white py-2 px-4 rounded-3xl w-80 border-2 border-B-yellow"
            placeholder="First Name"
            autoComplete="off"
            required
            value={fNameValue}
            onChange={(e) => setFnameValue(e.target.value)}
          />
        </div>

        <div className="input-field">
          <input
            type="text"
            id="lastName"
            className=" mb-2 bg-G-white py-2 px-4 rounded-3xl w-80 border-2 border-B-yellow"
            placeholder="Last Name"
            autoComplete="off"
            required
            value={lNameValue}
            onChange={(e) => setLnameValue(e.target.value)}
          />
        </div>

        <div className="input-field">
          <input
            type="text"
            id="userName"
            className=" mb-2 bg-G-white py-2 px-4 rounded-3xl w-80 border-2 border-B-yellow"
            placeholder="Username"
            autoComplete="off"
            required
            value={userValue}
            onChange={(e) => setUserValue(e.target.value)}
          />
        </div>

        <div className=" input-field">
          <input
            type="email"
            id="email"
            className=" mb-2 bg-G-white py-2 px-4 rounded-3xl w-80 border-2 border-B-yellow"
            placeholder="Email"
            autoComplete="off"
            required
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
          />
        </div>

        <div className="input-field">
          <input
            type="password"
            id="password"
            className="mb-2 bg-G-white py-2 px-4 rounded-3xl w-80 border-2 border-B-yellow"
            placeholder="Password"
            autoComplete="off"
            required
            value={passValue}
            onChange={(e) => setPassValue(e.target.value)}
          />
        </div>

        <div className="flex gap-2">
          <button
            type="submit"
            id="registerBTN"
            className="w-2/4  bg-L-black text-B-yellow 
            hover:bg-L-black hover:text-B-yellow py-2 px-4 rounded-full
             font-bold border-2 border-B-yellow 
             hover:border-B-yellow transition ease-in-out
              hover:scale-110 duration-150 btn"
            disabled={isFormValid()}
          >
            {isLoading ? <Preloader/> : "REGISTER"}
          </button>

          <Link
            className="w-2/4 bg-L-black text-B-yellow 
            hover:bg-L-black hover:text-B-yellow py-2 px-4 
            rounded-full font-bold border-2 border-B-yellow
             hover:border-B-yellow transition ease-in-out
              hover:scale-110 duration-150"
            to="/login"
          >
            LOGIN
          </Link>
        </div>

        <p className="mt-2 loginTxt"> Or Sign Up With </p>
        <div className="flex justify-center gap-2 text-xl mt-2 icon">
          <Icon />
        </div>

        <div className="mt-2 copyright">&copy; 2023</div>
      </form>

      {/*------intro-----*/}
      <div className="divContent">
        <div className="flex flex-col p-4 rounded-2xl ml-2 h-full bg-L-black text-justify">
          <Link
            className="text-B-yellow text-4xl text-center font-bold transition ease-in-out hover:scale-110 duration-150"
            to={"/"}
          >
            CAR <i className="bi bi-car-front-fill"></i> RENTAL
          </Link>
          <p className="text-white p-4">
            Enjoy exclusive benefits: easy reservations, exclusive discounts,
            faster check-ins, and personalized recommendations.
            <p className="mb-2 mt-2">
              <span className="text-B-yellow text-lg">Experience more: </span>
              Sign up and access an enhanced user experience with exclusive
              features and content tailored just for you.
            </p>
            <p className="mb-2">
              <span className="text-B-yellow text-lg">Stay informed:</span> Get
              the latest updates, news, and exciting announcements delivered
              directly to your inbox when you sign up.
            </p>
            <p className="">
              <span className="text-B-yellow text-lg">
                Expand your horizons:
              </span>{" "}
              Access a world of knowledge, resources, and learning materials to
              fuel your personal and professional growth.
            </p>
            <p className=" text-lg text-B-yellow">
              By creating an account you agree to our{" "}
              <span className="hover:text-B-yellow font-bold">
                TERMS & PRIVACY
              </span>
            </p>
          </p>
          <p className="text-white">
            <i className="text-B-yellow bi bi-caret-left-fill"></i> Already a
            member?<span className="text-B-yellow font-bold"> SIGN IN</span>
          </p>
        </div>
      </div>
    </div>
    
    </div>
  );
}
