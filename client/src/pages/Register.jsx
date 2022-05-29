import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const navigate = useNavigate();
  const initialValue = {
    name: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    cpassword: "",
  };
  const [userData, setUserData] = useState(initialValue);

  const onChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(userData);

    const response = await fetch("http://localhost:3001/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    console.log(response, "this is response");

    setUserData(initialValue);
    // alert("Your Account is Created successfully");
    navigate("/login");
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            value={userData.name}
            onChange={onChange}
            name="name"
            placeholder="name"
          />
          <Input
            value={userData.lastName}
            name="lastName"
            onChange={onChange}
            placeholder="last name"
          />
          <Input
            value={userData.userName}
            name="userName"
            onChange={onChange}
            placeholder="username"
          />
          <Input
            value={userData.email}
            onChange={onChange}
            name="email"
            placeholder="email"
          />
          <Input
            value={userData.password}
            name="password"
            type="password"
            onChange={onChange}
            placeholder="password"
          />
          <Input
            value={userData.cpassword}
            name="cpassword"
            type="password"
            onChange={onChange}
            placeholder="confirm password"
          />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
