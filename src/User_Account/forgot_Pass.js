import React, { useState } from "react";
import { NavBar } from "../Components/navbar";
import { Footer } from "../Components/footer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../CSS/main.css"

export const ForgotPass = () => {
  const [username, setUsername] = useState("");
  const [passValue, setPassValue] = useState("");
  let [paraValue, setParaValue] = useState("");
  let [success, setSuccess] = useState("");

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("https://car-rental-back.onrender.com/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          newPassword: passValue,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setParaValue(data.message);
        setSuccess(true) // Handle the success message
        setTimeout(() => {
          navigate('/login')
        }, 2500);
        
      } else {
        const errorData = await response.json();
        setParaValue(errorData.error); // Handle the error message
        setSuccess(false)
      }
    } catch (error) {
      console.error("Error:", error);
      setParaValue("An error occurred resetting password.");
    }
  };

  const isFormValid = () => {
    return username === "" || passValue === "";
  };

  return (
    <>
      <NavBar />
      <div className="bg-white p-5 md:p-20 flex justify-center items-center">
        <div className="flex flex-wrap flex-col w-full max-w-md bg-L-black text-white p-4 md:p-8 rounded-2xl">
          <h1 className="font-bold  text-2xl md:text-3xl text-center mb-4">
            Password Reset
          </h1>
          <hr />
          <p
          className={`text-center font-bold text-white mt-2 ${
            success ? "success" : "error"
          }`}
        >
          {paraValue}
        </p>
          <form className="mt-4 flex flex-col" onSubmit={handleSubmit}>
            <label className="p-2">
              Username<span className="text-B-yellow"> *</span>
            </label>
            <input
              type="text"
              className="rounded-full py-2 px-4 bg-G-white text-black  w-full"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label className="p-2">
              New Password<span className="text-B-yellow"> *</span>
            </label>
            <input
              type="password"
              className="rounded-full py-2 px-4 bg-G-white text-black mb-4 w-full"
              placeholder="Enter Password"
              value={passValue}
              onChange={(e) => setPassValue(e.target.value)}
            />
            <div className="flex flex-col gap-2 text-center md:flex-row md:justify-center md:gap-4">
              <Link
                className=" bg-L-black hover:bg-B-yellow hover:text-L-black text-B-yellow py-2 px-4 rounded-full font-bold border-2 border-B-yellow transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-150"
                to="/ConfirmEmail"
              >
                Cancel
              </Link>
              <button
                type="submit"
                className=" bg-L-black hover:bg-B-yellow hover:text-L-black text-B-yellow py-2 px-4 rounded-full font-bold border-2 border-B-yellow transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-150 btn"
                disabled={isFormValid()}
              >
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};
