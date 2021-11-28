import React from "react";
import styled from "styled-components";
const Card = styled.div`
  width: 229px;
  min-width: 229px;
  height: 310px;
  background: #f2f2f2;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
  box-sizing: border-box;
  border: 1px solid #d3d3d3;
  .title_idea {
    box-sizing: border-box;
    padding: 5px;
    display: flex;
    flex-word-wrap: break-word;
  align-items: center;
  justify-content: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 37px;
    line-height: 48px;
    text-align: center;
    width: 100%;
  

    text-transform: uppercase;

    /* Gray 1 */

    color: #333333;
  }
`;
interface Props {
  label?: string;
}
function CardsIdea({ label }: Props) {
  return (
    <Card>
      <div className="title_idea">{label}</div>
    </Card>
  );
}

export default CardsIdea;
