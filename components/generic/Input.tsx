import { type } from 'os'
import React from 'react'
import styled from 'styled-components'
const InputC = styled.input`
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
padding: 12px 15px;
border: 2px solid #000000;
box-sizing: border-box;
border-radius: 4px;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 13px;
line-height: 15px;
letter-spacing: 0.5px;

color: #000000;
&:placeholder {
    font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 13px;
line-height: 15px;
letter-spacing: 0.5px;

color: #78858F;
}
`

interface InputProps {
placeholder: string
action: (value: string) => void
value: string
type: string
}
function Input({placeholder,action,value,type}:InputProps) {
    return (
        <>
            <InputC  placeholder={placeholder} value={value} onChange={(e)=>{
                action(e.target.value)
            }}
            type={type}
            />
            
        </>
    )
}
 
export default Input
