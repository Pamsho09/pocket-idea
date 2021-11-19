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
  title: string;
  onClick?: () => void;
  total?: number;
  complated?: number;
  bg: string;
}
function CardsPocket({ title, onClick, total, complated, bg }: IProps) {
  return (
    <CardPocket bg={bg}>
      <span className="title">
        {title} {complated}/{total}
      </span>
    </CardPocket>
  );
}

export default CardsPocket;
