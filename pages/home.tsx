import React ,{useContext}from "react";
import Container from "../components/generic/Container";
import useUser from "../hook/useUser";
import styled from "styled-components";
import Button from "../components/generic/Button";
import CardsPocket from "../components/CardsPocket";
import { AppContext } from "../context/AppContext";
import { logout } from "../firebase/config";
const HomeC = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  .logo {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 47px;
    line-height: 66px;
    /* or 140% */

    letter-spacing: 1px;

    color: #000000;
  }
  .user {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 37px;
    line-height: 43px;

    color: #000000;
  }
  .buttonContainer {
    width: 100%;
    display: grid;
    grid-template-columns: 58% 52%;
  }
  .containerCards {
    margin-top: 30px;
    width: 100%;
    height: auto;
    min-height: 50vh;
    display: grid;
    grid-auto-rows: 90px;
    overflow-y: scroll;
    overflow-x: hidden;
  }
`;
function Home() {
  const user: any = useUser();
  const {state,setModal}:any=useContext(AppContext);
  return (
    <Container>
      <HomeC>
        {" "}
        <h2 className="logo">Pocket Idea</h2>
        <h3 className="user">Hi {user && user.username}</h3>
        <div className="buttonContainer">
          <Button
            action={() => setModal({isOpen:true,content:'createPocket'})}
            type="primary"
            label="create pocket"
            radius="true"
          />
        </div>
        <div className="containerCards">
          {state.pocket.map((item:any) => {
            return <CardsPocket key={item.id} {...item} />;
          })}
        </div>
        <Button action={()=>{
          logout();
        }} type="secondary" label="LOg out" radius="true"/>
  
      </HomeC>
       </Container>
  );
}

export default Home;
