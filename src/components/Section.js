import React from "react";
import { styled } from "styled-components";

function Section({ h1, p, img, rightValue }) {
  return (
    <>
      <Main bg={img}>
        <div>
          <h1>{h1}</h1>
          <p>{p}</p>
        </div>
        <ButtonGroup>
          <LeftButton>Order Now</LeftButton>
          <RightButton>{rightValue}</RightButton>
        </ButtonGroup>
      </Main>
    </>
  );
}

export default Section;

const Main = styled.div`
  margin: auto;
  overflow-x: hidden;
  text-align: center;
  height: 100vh;
  color: white;
  font-size: 40px;
  display: flex;
  flex-direction: column;
  background-image: ${(props) => `url('/images/${props.bg}')`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-top: 20vh;
  justify-content: space-between;
  p {
    color: gray;
    font-size: 20px;
  }
`;
const ButtonGroup = styled.div`
  margin: auto;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  display: flex;
  color: white;
  padding: 20px;
  text-align: center;
  justify-content: center;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  cursor: pointer;
  padding: 20px;
  width: 200px;
  border-radius: 50px;
  background-color: white;
  color: black;
  margin-right: 50px;
  @media (max-width: 768px) {
    margin: 20px;
    padding: 10px;
  }
`;
const RightButton = styled(LeftButton)`
  background-color: gray;
  color: white;
`;
