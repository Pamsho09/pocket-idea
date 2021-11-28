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
import TextArea from "../generic/TextArea";
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
    .colors {
      display: grid;
      place-items: center;
      span {
      }
    }
  }
`;

function CreateIdea({ action }: any) {
   
  const { setIdea ,state }:any = useContext(AppContext);
  const user: any = useUser();
  const [form, setForm] = React.useState({
    title: "",
    description: "",

    id: "",
  });
  const handleClick = () => {
    if (form.title == "" && form.description == "") {
      alert("Please fill in all fields");
    } else {
      
      setIdea({ ...form, pocketId: state.pocketSelected.pocket.id });
    }
  };
  const handleChangeInput = (value: string, opt: string) => {
    if (opt === "title") {
      setForm({
        ...form,
        title: value,
      });
    }
    if (opt === "description") {
      setForm({
        ...form,
        description: value,
      });
    
    }
  };
  return (
    <Container>
      <h3>Create Pocket</h3>
      <div className="form">
        <h4>Title of idea </h4>
        <Input
          placeholder="Tiktok videos"
          type={"text"}
          value={form.title}
          action={(value) => handleChangeInput(value, "title")}
        />
        <h4>Description</h4>
        <TextArea
          placeholder="15"
          type={"number"}
          value={form.description}
          action={(value) => handleChangeInput(value, "description")}
        />
        <Button
          label="Create"
          type="primary"
          radius="true"
          action={handleClick}
        />
      </div>
    </Container>
  );
}

export default CreateIdea;
