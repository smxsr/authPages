import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import LeftSide from "../components/LeftSide2";
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
  justify-content: center;
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
  align-content: center;
`;
const Form = styled.form`
  width: 100%;
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 1.5rem;
`;
const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem 0;
`;
const Input = styled.input`
  width: ${(props) => props.width};
  margin: 20px 10px 0px 0px;
  font-family: iranSans;
  font-size: 0.5rem;
  font-weight: bold;
  padding: 5px;
  border-radius: 5px;
  background: url(${(props) => props.bac}) no-repeat left;
  background-size: 15px;
  background-color: #ffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover {
    border-color: #113be2;
    border-width: 0.2rem;
  }
`;

const Button = styled.button`
  height: 1.5rem;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: #a8a8ab;
  color: #ffff;
  font-weight: bold;
  font-size: 0.7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  &:hover {
    background-color: #0a65cd;
  }
`;
const InputWrapper = styled.div`
  display: flex;
`;
const FormSpan = styled.span``;
const RightSpan = styled.span`
  flex: 1;
  font-size: 0.75rem;
  font-weight: bold;
  margin-top: 5rem;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;
const ResetPassword = () => {
  const [image, setImage] = useState(null);
  const [timer, setTimer] = useState(false);
  const setInputBackground = (e) => {
    var email = document.getElementById("email");

    if (email.validity.valid) {
      e.target.value !== "5" && setImage(Badge);
    } else {
      setImage(null);
    }
  };
  const setTime = (e) => {
    e.preventDefault();
    setTimer(true);
    const timer = document.getElementById("timer");
    const btn = document.getElementById("btn");
    let i = 121;
    btn.disabled = true;
    setInterval(() => {
      if (i === 0) {
        clearInterval();
        setTimer(false);
        btn.disabled = false;
        timer.innerText = null;
      } else {
        i -= 1;
        timer.innerText = i;
      }
    }, 1000);
  };
  return (
    <Container>
      <Navbar text={"ورود"} />
      <Wrapper>
        <RightSide>
          <RightSpan>
            گذرواژه خود را فراموش کرده اید . هیچ ایرادی نداره
            <br />
            ایمیل خودتون رو برامون بنویسین تا ما یک گذرواژه جدید ارسال کنیم
            <br />
            کد رو وارد کنین و گذرواژه جدیدتون رو بنویسین برامون . به همین سادگی
          </RightSpan>
          <Form>
            <FormWrapper>
              <Input
                placeholder="ایمیل"
                type="email"
                id="email"
                onChange={setInputBackground}
                bac={image}
                width="20vw"
              ></Input>
              ‌
              <ButtonWrapper>
                <label
                  htmlFor="Button"
                  id="timer"
                  style={{ marginLeft: "2px" }}
                ></label>
                <Button onClick={setTime} value="Button" id="btn">
                  {timer ? "دریافت مجدد کد" : "دریافت کد"}
                </Button>
              </ButtonWrapper>
            </FormWrapper>
            <FormWrapper>
              <InputWrapper>
                <Input width="5vw"></Input>
                <Input width="5vw"></Input>
                <Input width="5vw"></Input>
                <Input width="5vw"></Input>
              </InputWrapper>
              <Button>تایید کد</Button>
            </FormWrapper>
            <FormWrapper>
              <Input
                placeholder="گذرواژه جدید"
                type="password"
                width="20vw"
              ></Input>
              <Input
                placeholder="تایید گذرواژه جدید"
                type="password"
                width="20vw"
              ></Input>
            </FormWrapper>
            <FormWrapper>
              <Button style={{ marginRight: "0.7rem" }}>
                ذخیره گذرواژه و ورود
              </Button>
              <FormSpan>
                <Link to="/register">حساب کاربری ندارم!</Link>
              </FormSpan>
            </FormWrapper>
          </Form>
        </RightSide>
        <LeftSide />
      </Wrapper>
    </Container>
  );
};

export default ResetPassword;
