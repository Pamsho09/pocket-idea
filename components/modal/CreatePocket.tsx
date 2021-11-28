import React, { useContext } from "react";
import styled from "styled-components";
import Input from "../generic/Input";
import { CirclePicker } from "react-color";
import Button from "../generic/Button";
import Circle from "react-color/lib/components/circle/Circle";
import { createData } from "../../firebase/config";
import { Console } from "console";
import { AppContext } from "../../context/AppContext";
import { IUseInitialState } from "../../hook/useInitialState";
import useUser from "../../hook/useUser";
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
  const state: any = useContext(AppContext)
  const { setPocket
  } = state
  const user: any = useUser();
  const [form, setForm] = React.useState({
    name: '',
    colors: '',
    numberOfIdeas: 0,
    id: ''
    , userId: ''

  });
  const handleClick = () => {
    if (form.name === '' || form.colors === '' || form.numberOfIdeas === 0) {
      alert('Please fill all the fields')
    }
    else {
      setPocket({...form,userId: user.id})
      action()
    }

  }
  const handleChangeInput = (value: string, opt: string) => {
    if (opt === "name") {
      setForm({
        ...form,
        name: value,
      });
    }
    if (opt === "colors") {
      setForm({
        ...form,
        colors: value,
      });
    }
    if (opt === "numberOfIdeas") {
      setForm({
        ...form,
        numberOfIdeas: +value,
        
      });
    }

  };
  return (
    <Container>
      <h3>Create Pocket</h3>
      <div className="form">
        <h4>Name</h4>
        <Input
          placeholder="Tiktok videos"
          type={"text"}
          value={form.name}
          action={(value) => handleChangeInput(value, "name")}
        />
        <h4>Number of ideas</h4>
        <Input placeholder="15" type={"number"} value={form.numberOfIdeas.toString()} action={(value) => handleChangeInput(value, "numberOfIdeas")} />
        <h4>Colors for card</h4>
        <div className="colors">

          <Circle onChange={(c) => {
          
            handleChangeInput(c.hex, "colors")

          }} />
        </div>
        <Button label='Create' type="primary" radius="true" action={handleClick} />
      </div>
    </Container>
  );
}

export default CreatePocket;
