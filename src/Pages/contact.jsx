import React, { useState } from "react";
import { IoMdEyeOff } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";

const Contact = () => {
  // states for the form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
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
    subject,
    message,
    password,
    phoneNumber: phone,
    gender,
    image,
  };

  const handleSubmit = () => {
    console.log("the form details are => ", formdetails);
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    setPhone("");
    setPassword("");
    setGender("");
    setImage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="py-20 px-10 grid grid-col-1 lg:grid-cols-2 gap-8 lg:gap-0"
    >
      <div className="text-center">
        <h1 className="relative inline uppercase font-bold text-[24px]">
          Contact
          <span className="absolute left-1/2 bg-gray-500 -bottom-2 -translate-x-1/2 h-[1px] w-[60px]"></span>
        </h1>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col">
          <label htmlFor="">Name (required)</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="p-2 outline-none border border-grey-300 focus:border-gray-200"
          />
        </div>
        <div className="flex flex-col">
          <label>Your Email (required)</label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-2 outline-none border border-white rounded-md focus:border-gray-200"
          />
        </div>
        <div className="flex flex-col">
          <label>Subject</label>
          <input
            type="text"
            placeholder="Enter subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            className="p-2 outline-none border border-white focus:border-gray-200"
          />
        </div>
        <div className="flex flex-col">
          <label>Your Message</label>
          <textarea
            type="text"
            placeholder="Enter message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            col="10"
            rows="10"
            className="resize-none border border-white focus:border-gray-200 outline-none p-2"
          ></textarea>
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Phone number</label>
          <input
            type="text"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className="p-2 outline-none border border-white rounded-md focus:border-gray-200"
          />
        </div>
        <div className="flex flex-col relative">
          <label htmlFor="">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your passwod"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="p-2 outline-gray border border-gray rounded-md focus:border-gray-200"
          />
          {showPassword ? (
            <IoEyeOutline
              onClick={toggle}
              className="absolute top-12 right-10 w-6 h-6"
            />
          ) : (
            <IoMdEyeOff
              onClick={toggle}
              className="absolute top-12 right-10 w-6 h-6"
            />
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Gender</label>
          <input
            type="text"
            placeholder="Enter your gender"
            value={gender}
            onChange={(event) => setGender(event.target.value)}
            className="p-2 outline-none border border-white rounded-md focus:border-gray-200"
          />
        </div>
          <button className="bg-gray-700 text-white hover:bg-teal-600 hover:text-black uppercase duration-300 rounded-full p-2">
            Submit
          </button>
      </div>
    </form>
  );
};

export default Contact;
