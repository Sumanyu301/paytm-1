import React from "react";
import ButtonUi from "./ui/ButtonUi";
import Header from "./ui/Header";
import SubHeading from "./ui/SubHeading";
import InputBox from "./ui/InputBox";
import Bottom from "./ui/Bottom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="p-10 bg-white rounded">
        <div className=" flex justify-center">
          <Header label={"Sign Up"}></Header>
        </div>
        <SubHeading
          label={"Enter your information to create an account"}
        ></SubHeading>
        <InputBox
          label={"First Name"}
          placeholder={"John"}
          onPress={(e) => {
            setFirstName(e.target.value);
          }}
        ></InputBox>
        <InputBox
          label={"Last Name"}
          placeholder={"Doe"}
          onPress={(e) => {
            setLastName(e.target.value);
          }}
        ></InputBox>
        <InputBox
          label={"Email"}
          placeholder={"john@example.com"}
          onPress={(e) => {
            setUserName(e.target.value);
          }}
        ></InputBox>
        <InputBox
          label={"Password"}
          onPress={(e) => {
            setPassword(e.target.value);
          }}
        ></InputBox>
        <div className=" flex justify-center mt-2">
          <ButtonUi
            label={"Sign Up"}
            onPress={async () => {
              const response = await axios.post(
                "http://localhost:3000/api/v1/user/signup",
                {
                  username,
                  firstName,
                  lastName,
                  password,
                }
              );
              localStorage.setItem("token", response.data.token);
              navigate("/dashboard");
            }}
          ></ButtonUi>
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
