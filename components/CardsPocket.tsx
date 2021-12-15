import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../context/AppContext";

const CardPocket = styled.div<any>`
  background: ${(props) => props.bg};
  border-radius: 11px;
  height: 126px;
  display: grid;
  position: relative;
  place-items: center;
  .title {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 66px;
    /* or 388% */

    letter-spacing: 1px;

    color: #0d0d0d;
  }
  .deleted-pocket{
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;
interface IProps {
  name: string;
  onClick: (id:string) => void;
  numberOfIdeas?: number;
  complated?: number;
  colors: string;
  id : string;
  userId: string;
}
function CardsPocket({ name, onClick, numberOfIdeas, complated, colors,id ,userId}: IProps) {
  const {deletePocketState}:any = useContext(AppContext);
  return (
    <CardPocket bg={colors} >
       <div className="deleted-pocket">
        <img
          src="/icons/deleted.svg"
          onClick={() => {
            deletePocketState(id,userId)
          }}
        />
      </div>
     <div className="allCard" onClick={()=>{
      onClick(id)
    }}> <span className="title">
        {name} {complated}/{numberOfIdeas}
      </span></div>
    </CardPocket>
  );
}

export default CardsPocket;
