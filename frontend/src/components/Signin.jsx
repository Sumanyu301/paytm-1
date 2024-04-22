import React, { useState } from "react";
import ButtonUi from "./ui/ButtonUi";
import Header from "./ui/Header";
import SubHeading from "./ui/SubHeading";
import InputBox from "./ui/InputBox";
import Bottom from "./ui/Bottom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="p-10 bg-white rounded">
        <div className=" flex justify-center">
          <Header label={"Sign In"}></Header>
        </div>
        <SubHeading
          label={"Enter your credentials to access your account"}
        ></SubHeading>
        <InputBox
          label={"Email"}
          placeholder={"john@example.com"}
          onPress={(e) => setUsername(e.target.value)}
        ></InputBox>
        <InputBox
          label={"Password"}
          onPress={(e) => setPassword(e.target.value)}
        ></InputBox>
        <div className=" flex justify-center mt-2">
          <ButtonUi
            label={"Sign In"}
            onPress={async () => {
              const response = await axios.post(
                "http://localhost:3000/api/v1/user/signin",
                {
                  username,
                  password,
                }
              );
              localStorage.setItem("token", response.data.token);
              navigate("/dashboard");
            }}
          ></ButtonUi>
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
