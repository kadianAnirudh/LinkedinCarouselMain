import React, {useState} from 'react'
// import { Input, Textarea } from '@chakra-ui/react'
import TextField from '@mui/material/TextField'
import { Textarea } from '@nextui-org/react';
import { Input } from '@nextui-org/react';
import { Button} from "@nextui-org/react";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import DeleteIcon from '@mui/icons-material/Delete';
import ChatMessage from './ChatMessage';

const AIVet = () => {

const [input, setInput] = useState('')

const [chatLog, setchatLog] = useState('')

const handleChange = (e) => {
setInput(e.target.value)
}

async function handleSubmit(e){
e.preventDefault();
setInput('')
// setchatLog([...chatLog, ])
const response = await fetch("http://localhost:3000", {
    method: 'POST',
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify
})
}

    return (
    <div className="h-screen flex items-center justify-center">
    <div className="justify-center h-3/5 w-full">

    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl text-center">
    Ask Ollie's AI Vet
    </h1>

        <p className="mt-3 text-lg leading-8 text-gray-600 text-center">
    Ask anything from Dog Nutrition to behavior
        </p>

        <div className='flex items-center justify-center mt-14'>
        {/* <TextField id="outlined-basic" label="Ask AI Vet" variant="outlined"   sx={{width: '80%', color: 'success.main'}}/> */}
        <form onSubmit={handleSubmit} className="w-full flex justify-center">
         <Input 
        onChange={handleChange}
        bordered
        color='default'
        labelPlaceholder="Ask AI Vet"
        width='70%'
        value={input}
         />
<button type='submit' className='ml-6 rounded-xl w-20 border-2 border-sky-600 '>
    Submit
</button>
</form>
        {/* <ArrowCircleRightIcon className="icon"  sx={{ fontSize: 40 }}/>
         */}
    </div>

<ChatMessage/>

        <div className='flex justify-center mt-5'>
            <a href="https://calendly.com/anirudh2024kadian/30min">
        <p className="mt-3 text-md leading-8 text-gray-600 cursor-pointer">
    Need a better answer? Book a FREE consultation 
        </p>
        </a>
        </div>
  </div>
  </div>
  )
}


export default AIVet