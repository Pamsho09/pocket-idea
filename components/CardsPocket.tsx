import React from "react";
import styled from "styled-components";

const CardPocket = styled.div<any>`
  background: ${(props) => props.bg};
  border-radius: 11px;
  height: 126px;
  display: grid;
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
`;
interface IProps {
  name: string;
  onClick?: () => void;
  numberOfIdeas?: number;
  complated?: number;
  colors: string;
}
function CardsPocket({ name, onClick, numberOfIdeas, complated, colors }: IProps) {
  return (
    <CardPocket bg={colors}>
      <span className="title">
        {name} {complated}/{numberOfIdeas}
      </span>
    </CardPocket>
  );
}

export default CardsPocket;
