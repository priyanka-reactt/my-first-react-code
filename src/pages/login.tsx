import { useState, useEffect } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(
      name,email,password
    )
    alert("Form Submitted ✅");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
      <form
        onSubmit={submitHandler}
        className="bg-white p-6 rounded-2xl shadow-xl w-[320px] space-y-4"
      >
        <h1 className="text-xl font-bold text-center text-gray-800">
          Login Form
        </h1>

        <input
          type="text"
          placeholder="Name"
          value={name}
          className="w-full px-4 py-2 border rounded-lg bg-gray-50"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          className="w-full px-4 py-2 border rounded-lg bg-gray-50"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          className="w-full px-4 py-2 border rounded-lg bg-gray-50"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="
    relative
    w-full
    py-2
    rounded-lg
    bg-green-600
    text-white
    font-semibold
    overflow-hidden
    transition
    duration-300
    hover:scale-105
    
    active:scale-95
  "
        >
          Submit
        </button>



      </form>

    </div>
  );
  
}
