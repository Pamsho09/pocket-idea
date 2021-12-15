/* eslint-disable @next/next/no-img-element */
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../../context/AppContext";
import CreateIdea from "./CreateIdea";
import CreatePocket from "./CreatePocket";
const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 100;
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
      cursor: pointer;
    }
  }
`;
function Modal() {
  const [color, setColor] = useState("#fff");
  const { state, setModal }: any = useContext(AppContext);
  let modal:any ={
    component:()=><h1>Loading</h1>,
  }
  switch (state.modal.content) {
    case "createPocket":
        modal.component = () => (
        <CreatePocket
          action={(c: any) => {
            setModal({ isOpen: false, content: "" });
          }}
        />
      );
      break;
    case "createIdea":
      modal.component = () => <CreateIdea action={(c: any) => {
        setModal({ isOpen: false, content: "" });
      }}
      
    />
    break;
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
