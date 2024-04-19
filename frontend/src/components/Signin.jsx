import React, { useState } from "react";
import ButtonUi from "./ui/ButtonUi";
import Header from "./ui/Header";
import SubHeading from "./ui/SubHeading";
import InputBox from "./ui/InputBox";
import Bottom from "./ui/Bottom";
import axios from "axios";
const Signin = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");  
  const [password, setPassword] = useState("");

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="p-10 bg-white rounded">
        <div className=" flex justify-center">
          <Header label={"Sign In"}></Header>
        </div>
        <SubHeading
          label={"Enter your credentials to access your account"}
        ></SubHeading>
        <InputBox label={"Email"} placeholder={"john@example.com"}></InputBox>
        <InputBox label={"Password"}></InputBox>
        <div className=" flex justify-center mt-2">
          <ButtonUi label={"Sign In"}></ButtonUi>
        </div>
        <Bottom
          label={"Don't have an account?"}
          text={"Sign Up"}
          route={"signup"}
        ></Bottom>
      </div>
    </div>
  );
};

export default Signin;
