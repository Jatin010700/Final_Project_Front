import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../User_Action/action";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "./icon";
import { Preloader } from "../Components/preloader";
import { setUsernameState } from "../Store/store";

export default function Main() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userValue, setUserValue] = useState("");
  const [passValue, setPassValue] = useState("");
  let [paraValue, setParaValue] = useState("");
  let [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // https://car-rental-back.onrender.com/login

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      const response = await fetch(
        "https://car-rental-back.onrender.com/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: userValue,
            password: passValue,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setParaValue(data.message);

        setTimeout(() => {
          setParaValue("");
        }, 1000);

        setSuccess(true);

      //      // Assuming your JWT token is returned in data.token
      // const token = data.token;

      // // Store the token in a secure way (e.g., localStorage or cookies)
      // localStorage.setItem("token", token);

        dispatch(setUsernameState(userValue))
        dispatch(login());
        setTimeout(() => {
          navigate("/");
        }, 2500);
      } else {
        const errorData = await response.json();
        setParaValue(errorData.error);
        
        setTimeout(() => {
          setParaValue("");
        }, 1000);

        setSuccess(false);
        setIsLoading(false)
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred during login.");
    }
  };

  const isFormValid = () => {
    return userValue === "" || passValue === "";
  };

  return (
    <div className="flex justify-center items-center ">

    <div
      id="container"
      className="flex justify-center w-3/4 gap-2 mt-28 rounded-2xl loginDiv"
    >
      
      <form
        id="login-form"
        className="flex flex-col text-center bg-white p-4 rounded-tl-2xl rounded-2xl h-full"
        onSubmit={handleSubmit}
      > 
      
      <Link
          className="text-L-black text-5xl text-center font-bold transition ease-in-out hover:scale-105 duration-150 mb-4 mobileHeader "
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
       
        <h2 className="text-B-yellow text-4xl font-bold">LOG IN</h2>

        <div className="mt-4 input-field">
          <input
            type="text"
            id="getUsername"
            className="mb-2 bg-G-white  py-2 px-4  rounded-3xl w-80 border-2 border-B-yellow"
            placeholder="Username"
            autoComplete="off"
            value={userValue}
            onChange={(e) => setUserValue(e.target.value)}
            required
          />
        </div>

        <div className="input-field">
          <input
            type="password"
            id="getPassword"
            className="mb-2 bg-G-white  py-2 px-4 rounded-3xl w-80 border-2 border-B-yellow"
            placeholder="Password"
            autoComplete="off"
            value={passValue}
            onChange={(e) => setPassValue(e.target.value)}
            required
          />
        </div>

        <Link className="flex justify-left mt-2 mb-2 text-sm hover:text-B-yellow font-bold"
        to="/ConfirmEmail">
          Forgot Password?
        </Link>

        <div className="flex gap-2">
          <button
            type="submit"
            id="loginBTN"
            className="w-2/4 bg-L-black text-B-yellow hover:bg-L-black hover:text-B-yellow py-2 px-4 rounded-full font-bold border-2 border-B-yellow hover:border-B-yellow transition ease-in-out hover:scale-110 duration-150 btn"
            disabled={isFormValid()}
            onClick={handleSubmit}
          >
            {isLoading ? <Preloader/> : "LOGIN"}
          </button>

          <Link
            className="w-2/4 bg-L-black text-B-yellow hover:bg-L-black hover:text-B-yellow py-2 px-4 rounded-full font-bold border-2 border-B-yellow hover:border-B-yellow transition ease-in-out hover:scale-110 duration-150"
            to="/register"
          >
            REGISTER
          </Link>
        </div>

        <p className="mt-2 loginTxt"> Or Connect With </p>
        <div className="flex justify-center gap-2 text-xl mt-2 icon">
          <Icon />
        </div>

        <div className="mt-2 copyright">&copy; 2023</div>
      </form>

      {/*------intro-----*/}
      <div className="divContent ">
        <div className="flex flex-col p-4 rounded-2xl h-full bg-L-black text-justify">
          <Link
            className="text-B-yellow text-4xl text-center font-bold transition ease-in-out hover:scale-110 duration-150"
            to={"/"}
          >
            CAR <i className="bi bi-car-front-fill"></i> RENTAL
          </Link>
          <p className="text-white p-4">
            Welcome to our car rental website! We offer a wide range of vehicles
            and flexible rental options to suit your needs. With exceptional
            customer service and affordable rates, we make renting a car easy
            and stress-free. Browse our selection and discover the convenience
            of renting with us.
            <span className="text-B-yellow text-lg ml-2">
              Start journey with us!
            </span>
          </p>
          <p className="text-white">
            <i className="text-B-yellow bi bi-caret-left-fill"></i> Don't have
            an Account?<span className="text-B-yellow font-bold"> SIGN UP</span>
          </p>
        </div>
      </div>
    </div>
    
    </div>
  );
}
