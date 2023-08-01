import axios from "../api/axios";
import React, { useRef } from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const submitHandler = async (event) => {
    event.preventDefault();
    const userInputs = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      const response = await axios.post(
        "/register",
        JSON.stringify({ ...userInputs }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
    } catch (error) {
      console.log(error);
    }
    nameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };
  return (
    <div className="mt-4 grow items-center flex justify-around">
      <div className=" mb-64">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form className="max-w-md mx-auto" onSubmit={submitHandler}>
          <input type="text" ref={nameRef} placeholder="name" />
          <input type="email" ref={emailRef} placeholder="your@email.com" />
          <input type="password" ref={passwordRef} placeholder="password" />
          <button className="primary">Register</button>

          <div className="text-center py-2 text-gray-500">
            Don't have an account yet?
            <Link to={"/login"} className="ml-2 underline text-black">
              Already a member
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
