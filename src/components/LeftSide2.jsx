import React from "react";
import styled from "styled-components";
import light from "../pics/light.svg";
import mp from "../pics/Frame2.svg";
import me from "../pics/me.svg";
const Container = styled.div`
  flex: 1;
  height: 70vh;
  width: 45vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
`;
const Image = styled.img``;
const LeftSide2 = () => {
  return (
    <Container dir="ltr">
      <Image
        src={light}
        style={{ width: "3rem", height: "3rem", margin: "0 0 30px 170px " }}
      />
      <Image src={mp} />
      <Image src={me} />
    </Container>
  );
};
export default LeftSide2;
