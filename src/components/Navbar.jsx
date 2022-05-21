import React from "react";
import styled from "styled-components";
import playIcon from "../pics/playIcon.svg";
import icon1 from "../pics/icon1.png";
import diamondIcon from "../pics/diamond.svg";
import icon2 from "../pics/icon2.svg";
import { Link } from "react-router-dom";
const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: start;
  align-items: center;
`;
const Image = styled.img`
  width: 1rem;
  height: 1rem;
`;
const ImageContainer = styled.div`
  flex: 1.3;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 2rem 0 0;
`;
const ImageText = styled.span`
  flex: 2;
  font-size: 0.75rem;
  margin-right: 0.5rem;
  cursor: pointer;
`;
const NavebarItemContainer = styled.div`
  height: 10px;
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const ButtonWrapper = styled.div`
  flex: 1;
  margin: 2.5rem 2rem 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px 14px;
  font-family: iranSans;
  border-radius: 6px;
  border: none;
  color: #fff;
  background: linear-gradient(180deg, #4b91f7 0%, #367af6 100%);
  background-origin: border-box;
  box-shadow: 0px 0.5px 1.5px rgba(54, 122, 246, 0.25),
    inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2);
  text-decoration: none;
  cursor: pointer;
  &:focus {
    box-shadow: inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2),
      0px 0.5px 1.5px rgba(54, 122, 246, 0.25),
      0px 0px 0px 3.5px rgba(58, 108, 217, 0.5);
    outline: 0;
  }
  &:hover {
    background-color: #0a65cd;
  }
`;
const Navbar = ({ text }) => {
  return (
    <Container>
      <ImageContainer>
        <NavebarItemContainer>
          <Image src={icon1} style={{ marginRight: "3rem" }}></Image>
          <ImageText style={{ marginRight: "0.5rem" }}>امکانات</ImageText>
        </NavebarItemContainer>
        <NavebarItemContainer>
          <Image src={playIcon}></Image>
          <ImageText>ویدیوی آموزشی</ImageText>
        </NavebarItemContainer>
        <NavebarItemContainer>
          <Image src={diamondIcon}></Image>
          <ImageText>قیمت گذاری</ImageText>
        </NavebarItemContainer>
        <NavebarItemContainer>
          <Image src={icon2} style={{ marginRight: "-1rem" }}></Image>
          <ImageText>همکاری با آژانس ما</ImageText>
        </NavebarItemContainer>
      </ImageContainer>
      <ButtonWrapper>
        <Link to={text === "ورود" ? "/" : "/register"}>
          <Button>{text}</Button>
        </Link>
      </ButtonWrapper>
    </Container>
  );
};

export default Navbar;
