import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoggingIn, setIsLoggingIn] = useState(true);
  function submitHandler() {
    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }
  }

  return (
    <div className="flex-1  text-xs sm:text-sm flex flex-col justify-center items-center gap-2 sm:gap-4">
      <h1 className="font-extrabold select-none text-2xl sm:text-4xl uppercase">
        {isLoggingIn ? "login" : "register"}
      </h1>
      {error && <div className="w-full max-w-[48ch] border-rose-400 text-white py-2">{error}</div>}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address"
        className="outline-none duration-300 border-b-2 border-solid border-white focus:text-cyan-300 text-slate-900
      p-2 w-full max-w-[48ch]"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="outline-none duration-300 border-b-2 border-solid border-white focus:text-cyan-300 text-slate-900
      p-2 w-full max-w-[48ch]"
      />
      <button
        onClick={submitHandler}
        className="w-full max-w-[48ch] border border-white border-solid uppercase py-2
      duration-300 relative after:absolute after:top-0
      after:right-full after:bg-white after:z-10
      after:w-full after:h-full overflow-hidden
      hover:after:translate-x-full after:duration-300 "
      >
        SUBMIT
      </button>
      <h2
        className="duration-300 hover:scale-110 cursor-pointer"
        onClick={() => setIsLoggingIn(!isLoggingIn)}
      >
        {!isLoggingIn ? "Login" : "Register"}
      </h2>
    </div>
  );
}

export default Login;
