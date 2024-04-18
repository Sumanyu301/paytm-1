import React from "react";
import ButtonUi from "./ui/ButtonUi";
import Header from "./ui/Header";
import SubHeading from "./ui/SubHeading";
import InputBox from "./ui/InputBox";
import Bottom from "./ui/Bottom";
const Signup = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="p-10 bg-white rounded">
        <div className=" flex justify-center">
          <Header label={"Sign Up"}></Header>
        </div>
        <SubHeading
          label={"Enter your information to create an account"}
        ></SubHeading>

        <InputBox label={"First Name"} placeholder={"John"}></InputBox>
        <InputBox label={"Last Name"} placeholder={"Doe"}></InputBox>
        <InputBox label={"Email"} placeholder={"john@example.com"}></InputBox>
        <InputBox label={"Password"}></InputBox>
        <div className=" flex justify-center mt-2">
          <ButtonUi label={"Sign Up"}></ButtonUi>
        </div>
        <Bottom
          label={"Already have an account?"}
          text={"Sign In"}
          route={"signin"}
        ></Bottom>
      </div>
    </div>
  );
};

export default Signup;
