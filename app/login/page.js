"use client"
import { signIn } from "next-auth/react";
import Image from "next/image";


const Login = () => {
  return (
    <div className="min-h-screen text-white flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-8 flex gap-2">Login to <img src="/pay.svg" alt="" width={30} height={30} />GlobalPay</h1>

      <div className="space-y-4 w-full max-w-xs">
        <button
          onClick={() => signIn("google" ,{ callbackUrl: "/editprofile" })}
          className="w-full py-2 px-4 bg-red-400 rounded-lg hover:bg-red-600 focus:outline-none flex justify-center items-center gap-2"
        >
          Login with Google
          <Image
            src="/google.png"
            alt="Get Me a Chai Logo"
            width={20}
            height={20}

          />
        </button>
        <button
          onClick={() => signIn("apple")}
          className="w-full py-2 px-4 bg-gray-700 rounded-lg hover:bg-gray-800 focus:outline-none flex justify-center items-center gap-2"
        >
          Login with Apple
          <Image
            src="/apple-logo.png"
            alt="Get Me a Chai Logo"
            width={20}
            height={20}

          />
        </button>
        <button
          onClick={() => signIn("facebook")}
          className="w-full py-2 px-4 bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none flex justify-center items-center gap-2"
        >
          Login with Facebook
          <Image
            src="/facebook.png"
            alt="Get Me a Chai Logo"
            width={20}
            height={20}

          />
        </button>
      </div>
    </div>
  );
};

export default Login;
