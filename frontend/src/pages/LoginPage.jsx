import axios from "../api/axios";
import React, { useContext, useRef, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../store/UserContext";

const LoginPage = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [redirect, setRedirect] = useState(false);
  const { user, setUser } = useContext(UserContext);

  const submitHandler = async (event) => {
    event.preventDefault();
    const userInputs = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    console.log(userInputs);
    try {
      const response = await axios.post(
        "/login",
        JSON.stringify({ ...userInputs }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response.data.user));
      setUser(response.data.user);
      setRedirect(true);
    } catch (error) {
      console.log(error);
    }
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  if (redirect) {
    console.log("user", user);
    return <Navigate to={"/"} />;
  }
  return (
    <div className="mt-4 grow items-center flex justify-around">
      <div className=" mb-64">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form className="max-w-md mx-auto" onSubmit={submitHandler}>
          <input type="email" ref={emailRef} placeholder="your@email.com" />
          <input type="password" ref={passwordRef} placeholder="password" />
          <button className="primary">Login</button>

          <div className="text-center py-2 text-gray-500">
            Don't have an account yet?
            <Link to={"/register"} className="ml-2 underline text-black">
              Register now{" "}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
