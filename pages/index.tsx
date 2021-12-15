import type { NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import React from "react";
import Button from "../components/generic/Button";
import { useRouter } from "next/router";
const HomeContainer = styled.div`
display: grid;
font-family: Poppins;
 width: 100%;
gap: 1rem;
position: relative;
overflow: hidden;
  header {
    background-color: white;
    z-index: 999999999;
    width: 100%;
    position: fixed;
    z-index: auto;
    display: flex;
    height: 6em;
    align-items: center;
    justify-content:space-between;
    max-width: 450px ;
    padding: 0 1rem ; 
    h2 {
      font-size: 2rem;
     
    }
    .buttonLogin{
      width: 30%;
      max-width: 100px ;
    }

    border-radius:  0 0 20px 20px;
    box-shadow:  -3px 5px 10px rgba(0, 0, 0, 0.4);
    
  }
  .ghost{
    width: 100%;
    height: 6em;
  }
  main{
    width: 100%;
    display: grid;
    padding: 1em;
    p{
      font-weight: 700;
      font-family: Poppins;
 
      font-size: 1.5rem;
      
    }
    .image{
      z-index: -17;
    }
    
  }
  footer{
    width: 100%;
    display: grid;
    place-items: center;
    text-align: center;
  }
`;
const Home: NextPage = () => {
  const router = useRouter();
  const handleClickLoging = () => {
    router.push("/login");
  }
  return (
    <HomeContainer>
      <header>
        <h2>Pocket Idea</h2>
       <div className="buttonLogin">
       <Button label="Login" type="primary" action={handleClickLoging} />
       </div>
      </header>
<div className="ghost"></div>
      <main>
       
       <div>
        <p>
        With pocket idea you can save time when making decisions.
        </p>
       <Image
       className="image"
          src={"/home/Processingthoughts.gif"}
          width={400}
          height={400}
        ></Image>

        <p>
        Optimizing your time by randomly choosing your ideas
        </p>
        <Image
          className="image"
          src={"/home/Processingthoughts2.gif"}
          width={400}
          height={400}
        ></Image>

       </div>
      </main>
      <footer>

        <h6>By <a href="https://pamsho.dev/about" target={'_blank'}>Pamsho</a></h6>
      </footer>
    </HomeContainer>
  );
};

export default Home;
