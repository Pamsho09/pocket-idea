import React, { useEffect, useState } from "react";
import { loginWithGoogle, onAuthStateChanged ,logingWithEmail, createUserWithEmailAndPassword} from "../firebase/config";
import { useRouter } from "next/router";
import useUser, { USER_STATES } from "../hook/useUser";
import Input from "../components/generic/Input";
import Container from "../components/generic/Container";
import styled from "styled-components";
import Button from "../components/generic/Button";
const LoginC = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .logo {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 64px;
    line-height: 66px;

    letter-spacing: 1px;

    color: #14142b;
  }
  .or {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 26px;
    line-height: 66px;
    letter-spacing: 1px;
    color: #14142b;
    width: 100%;
    text-align: center;
  }
  .login {
    width: 100%;
    display: grid;
    gap: 16px;
  }
`;
function Singin() {
  const user = useUser();
  const router = useRouter();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  useEffect(() => {
    user && router.replace("/home");
  }, [router, user]);
  const handleClick = () => {
    loginWithGoogle()
      .then()
      .catch((err) => {
        console.log(err);
      });
  };
  const handleChangeInput = (value: string, opt: string) => {
    if (opt === "username") {
      setForm({ ...form, username: value });
    }
    if (opt === "email") {
      setForm({
        ...form,
        email: value,
      });
    }
    if (opt === "password") {
      setForm({
        ...form,
        password: value,
      });
    }
  };
  const handleClickRegister = () => {

    if(form.email.length === 0 || form.password.length === 0 || form.username.length === 0){
      alert("Por favor ingrese todos los campos")
    }
    else{
      createUserWithEmailAndPassword(form.email,form.password,form.username)
        .then(()=>{
            router.replace("/home")
        })
        .catch((err)=>{
            alert(err.message)
        })
    }

  }
  
  return (
    <Container>
      <LoginC>
        <h1 className="logo">Pocket Idea</h1>
        <div className="login">
        <Input
            placeholder="Username"
            action={(value) => {
                handleChangeInput(value, "username")
            }}
            value={form.username}
            type="text"
          />
          <Input
            placeholder="Email"
            action={(value) => {
                handleChangeInput(value, "email")
            }}
            value={form.email}
            type="email"
          />
          <Input
            placeholder="Password"
            action={(value) => {
                handleChangeInput(value, "password")
            }}
            value={form.password}
            type="password"
          />
          <Button label="Register" type="primary" action={handleClickRegister} />
          <Button label="Loging" type="secondary" action={()=>{
            router.push("/loging")
          }} />
          <h2 className="or">Or</h2>
          <Button label="Sign in with Google" type="primary"  action={handleClick}/>
        </div>
      </LoginC>
    </Container>
  );
}

export default Singin;
