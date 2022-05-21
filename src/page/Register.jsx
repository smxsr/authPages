import React, { useState } from "react";
import LeftSide from "../components/LeftSide2";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import google from "../pics/google.svg";
import Badge from "../pics/Badge.png";
import { Link } from "react-router-dom";

const Container = styled.div`
  background-color: #f5f7f7;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: end;
`;
//RightSide
const RightSide = styled.div`
  flex: 1;
  height: 70vh;
  width: 45vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  width: ${(props) => props.width};
  margin: 20px 10px 0px 0px;
  padding: 5px;
  font-family: iranSans;
  font-size: 0.5rem;
  font-weight: bold;
  border-radius: 5px;
  background: url(${(props) => props.bac}) no-repeat left;
  background-size: 15px;
  background-color: #ffff;
  &:hover {
    border-color: #113be2;
    border-width: 0.2rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;
const Button = styled.button`
  padding: 5px 10px;
  border-radius: 5%;
  border: none;
  border-radius: 5px;
  background-color: #a8a8ab;
  color: #ffff;
  font-weight: bold;
  font-size: 0.7rem;
  align-content: center;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  border: none;
  &:hover {
    background-color: #0a65cd;
  }
`;
const LoginSpan = styled.span`
  margin-right: 7.5rem;
  font-size: 0.66rem;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
`;
const Image = styled.img`
  width: 0.7rem;
  height: 0.6rem;
  margin-right: 0.8rem;
  margin-top: 0.1rem;
`;
const InputSetter = styled.div`
  display: flex;
`;

const Register = () => {
  const [image, setImage] = useState(null);
  const setInputBackground = (e) => {
    var email = document.getElementById("email");

    if (email.validity.valid) {
      e.target.value !== "" && setImage(Badge);
    } else {
      setImage(null);
    }
  };
  return (
    <Container>
      <Navbar text={"ورود"} />
      <Wrapper>
        <RightSide>
          <Form>
            <Input
              placeholder="نام و نام خانوادگی"
              bac={null}
              width="35vw"
            ></Input>
            <Input
              placeholder="ایمیل"
              type="email"
              id="email"
              onChange={setInputBackground}
              bac={image}
              width="35vw"
            ></Input>
            <InputSetter>
              <Input
                placeholder="گذرواژه"
                type="password"
                bac={null}
                width="16.2vw"
              ></Input>
              <Input
                placeholder="تایید گذرواژه"
                type="password"
                bac={null}
                width="16.2vw"
              ></Input>
            </InputSetter>
          </Form>
          <ButtonWrapper>
            <Button style={{ marginLeft: "1rem" }}>عضویت</Button>
            <Button>
              <LoginSpan
                style={{
                  fontSize: "0.7rem",
                  textDecoration: "none",
                  marginRight: "0",
                }}
              >
                حساب گوگل
              </LoginSpan>
              <Image src={google} />
            </Button>
            <LoginSpan>
              <Link to="/">حساب کاربری دارم</Link>
            </LoginSpan>
          </ButtonWrapper>
        </RightSide>
        <LeftSide />
      </Wrapper>
    </Container>
  );
};

export default Register;
