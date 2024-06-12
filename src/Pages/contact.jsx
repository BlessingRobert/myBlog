import React, { useState } from "react";
import { IoMdEyeOff } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";

const Contact = () => {
  // states for the form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [image, setImage] = useState("");

  // state for toggle
  const [showPassword, setShowPassword] = useState(false);

  const toggle = () => {
    setShowPassword((current) => !current);
  };

  const formdetails = {
    name,
    email,
    password,
    phoneNumber: phone,
    gender,
    image,
  };

  const handleSubmit = () => {
    console.log("the form details are => ", formdetails);
    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setGender("");
    setImage("");
  };

  return (
    <div>
      <p className="flex justify-center font-bold">Contact</p>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <div className="flex flex-col justify-center p-3 space-y-2">
          <label htmlFor="" className="items-center">
            Image
          </label>
          <input
            type="file"
            placeholder="Enter your image"
            value={image}
            onChange={(event) => setImage(event.target.value)}
            className="outline-none p-2 border border-gray-300 rounded-sm"
          />
        </div>
        <div className="p-3 space-y-2 flex flex-col">
          <label htmlFor="">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="outline-none p-2 border border-gray-300 rounded-sm"
          />
        </div>

        <div className="p-3 space-y-2 flex flex-col">
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="outline-none p-2 border border-gray-300 rounded-sm"
          />
        </div>
        <div className="p-3 space-y-2 flex flex-col">
          <label htmlFor="">Phone number</label>
          <input
            type="text"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className="outline-none p-2 border border-gray-300 rounded-sm"
          />
        </div>
        <div className="p-3 space-y-2 flex flex-col relative">
          <label htmlFor="">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your passwod"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="outline-none p-2 border border-gray-300 rounded-sm"
          />
          {showPassword ? <IoEyeOutline
            onClick={toggle}
            className="absolute top-12 right-10 w-6 h-6"
          />  : <IoMdEyeOff
          onClick={toggle}
          className="absolute top-12 right-10 w-6 h-6"
        />}
        </div>
        <div className="p-3 space-y-2 flex flex-col">
          <label htmlFor="">Gender</label>
          <input
            type="text"
            placeholder="Enter your gender"
            value={gender}
            onChange={(event) => setGender(event.target.value)}
            className="outline-none p-2 border border-gray-300 rounded-sm"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-800 text-white rounded w-fit px-8 py-2 text-sm hover:bg-blue-400"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
