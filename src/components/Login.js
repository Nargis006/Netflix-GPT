import { useState } from "react";
import Heder from "./Heder";

export default function Login() {
  const [isLogin, setLogin] = useState(false);
  return (
    <div>
      <Heder />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="backgroundlogo"
        />
      </div>
      <form className="w-3/12 absolute bg-black my-40 p-12 mx-auto right-0 left-0 text-white bg-opacity-95">
        {isLogin ? (
          <h1 className="font-bold text-3xl py-4">Sign In</h1>
        ) : (
          <h1 className="font-bold text-3xl py-4">Sign Up</h1>
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-3 m-2 mx-0 bg-gray-800  w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 m-2 ml-0  bg-gray-800 w-full"
        />
        {isLogin ? '' : <input
        type="password"
        placeholder="Re-enter Password"
        className="p-3 m-2 ml-0  bg-gray-800 w-full"
      />}
        <button
          type="submit"
          className="bg-red-700 p-4 m-8 ml-0 rounded-md  w-full"
        >
          Sign In
        </button>
        <h1 className="text-xl" onClick={()=> setLogin(!isLogin)}>
          {!isLogin ? 'Already have account? sign In' : 'New to Netflix? Sign up now.'}
        </h1>
        <p className="py-6">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          Learn more.
        </p>
      </form>
    </div>
  );
}
