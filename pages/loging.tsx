import React, { useContext, useEffect, useState } from "react";
import { loginWithGoogle, onAuthStateChanged ,logingWithEmail} from "../firebase/config";
import { useRouter } from "next/router";
import Input from "../components/generic/Input";
import Container from "../components/generic/Container";
import styled from "styled-components";
import Button from "../components/generic/Button";
import { AppContext } from "../context/AppContext";
import useUser, { USER_STATES } from "../hook/useUser";
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
function Loging() {
  const user = useUser();
const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const {state}:any=useContext(AppContext);
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
  const handleClickLoging = () => {

    if(form.email.length === 0 || form.password.length === 0){
      alert("Por favor ingrese todos los campos")
    }
    else{
        logingWithEmail(form.email,form.password)
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
          <Button label="Loging" type="primary" action={handleClickLoging} />
          <Button label="Singin" type="secondary" action={()=>{
            router.push("/singin")
          }}/>
          <h2 className="or">Or</h2>
          <Button label="Sign in with Google" type="primary"  action={handleClick}/>
        </div>
      </LoginC>
    </Container>
  );
}

export default Loging;
