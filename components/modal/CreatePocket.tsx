import React from "react";
import styled from "styled-components";
import Input from "../generic/Input";
import { CirclePicker } from "react-color";
import Button from "../generic/Button";
import Circle from "react-color/lib/components/circle/Circle";
const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;
  .form {
    display: grid;
    gap: 10px;
    h4 {
      margin: 0;
    }
    .colors{
        display: grid;
        place-items: center;
        span{
            
        }
    }
  }
`;
function CreatePocket({ action }: any) {
  return (
    <Container>
      <h3>Create Pocket</h3>
      <div className="form">
        <h4>Number of ideas</h4>
        <Input
          placeholder="Tiktok videos"
          type={"text"}
          value=""
          action={() => null}
        />
        <h4>Number of ideas</h4>
        <Input placeholder="15" type={"number"} value="" action={() => null} />
        <h4>Colors for card</h4>
        <div className="colors">
         
        <Circle onChange={action} onSwatchHover={(e)=>{
            console.log("hover",e)
        }}/>
        </div>
        <Button label='Create' type="primary" radius="true" action={()=>null}/>
      </div>
    </Container>
  );
}

export default CreatePocket;
