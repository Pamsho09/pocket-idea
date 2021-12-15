import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../context/AppContext";

const Card = styled.div<any>`
  width: 229px;
  min-width: 229px;
  height: 310px;

  ${(props) => (props.state ? "background: #b5b5b5;" : "background: #f2f2f2;")}
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
  box-sizing: border-box;
  ${(props) => (props.state ? "border: 1px solid #a3a3a3;" : "border: 1px solid #d3d3d3;")}
  
  position: relative;
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
  .deleted {
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;
interface Props {
  label?: string;
  id?: string;
  show?: boolean;
  state?: boolean;
}
function CardsIdea({ label, id, show, state }: Props) {
  const { deleteIdeaState }: any = useContext(AppContext);

  return (
    <Card state={state}>
      {show ||
        (state && (
          <div className="deleted">
            <img
              src="/icons/deleted.svg"
              onClick={() => {
                deleteIdeaState(id);
              }}
            />
          </div>
        ))}
      <div className="title_idea">{label}</div>
    </Card>
  );
}

export default CardsIdea;
