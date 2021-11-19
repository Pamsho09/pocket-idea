import React,{useContext} from 'react'
import styled ,{
createGlobalStyle}from 'styled-components'
import { AppContext } from '../../context/AppContext'
import Modal from '../modal/Modal'

const ContainerC = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 33px;
overflow: scroll;
`
const GlobalStyle = createGlobalStyle`
padding: 0;
margin: 0;
font-family: 'Roboto', sans-serif;
`
function Container({children}:JSX.ElementChildrenAttribute) {
  const {state}:any= useContext(AppContext)
    return (
        <ContainerC>
            {
                children
            }
            {
state.modal.isOpen && <Modal/>
            }
            <GlobalStyle></GlobalStyle>
        </ContainerC>
    )
}

export default Container
