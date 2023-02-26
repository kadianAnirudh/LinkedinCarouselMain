import React from 'react'
import { Textarea } from '@nextui-org/react';
import DeleteIcon from '@mui/icons-material/Delete';


const ChatMessage = ({message}) => {
  return (
        <div className='flex items-center justify-center mt-12 '>
        <Textarea
         labelPlaceholder="What AI Vet Thinks"
          width='70%'
          bordered
          color='default'
        //   value={`${message.message}`}
        />
        <DeleteIcon className="icon " sx={{ fontSize: 40 }}/>
        {/* <button className='ml-6 rounded-xl w-20 border-2 border-sky-600 '>
    Submit
</button> */}
    </div>
  )}

export default ChatMessage