/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";
import { AppContext } from "../../context/AppContext";
import CreatePocket from "./CreatePocket";
const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  display: grid;
  place-items: center;
  padding: 10px;
  .container {
    position: relative;

    width: 100%;
    height: auto;
    background-color: ${(props) => props.color};
    border-radius: 10px;
    .close {
      position: absolute;
      width: 40px;
      top: 10px;
      right: 10px;
      curson: pointer;
    }
  }
`;
function Modal() {
  const [color, setColor] = React.useState("#fff");
  const { state, setModal }: any = React.useContext(AppContext);

  let modal:any ={
    component:()=><h1>Loading</h1>,
  }

  switch (state.modal.content) {
    case "createPocket":
        modal.component = () => (
        <CreatePocket
          action={(c: any) => {
            console.log(c);
            setColor(c.hex);
          }}
        />
      );
  }
  return (
    <ModalContainer color={color}>
      <div className="container">
        <img
          src="/icons/close.svg"
          alt="close"
          className="close"
          onClick={() => {
            setModal({ isOpen: false, content: "" });
          }}
        />
        {
            modal.component()
        }
      </div>
    </ModalContainer>
  );
}

export default Modal;
