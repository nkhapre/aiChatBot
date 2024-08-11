'use client'

import { TextField, Box, Typography, Button } from "@mui/material"
import { useState } from "react"

interface Message {
  type: 'user' | 'ai';
  text: string;
}
const Chat: React.FC = () => {

    const [message, setMessage] = useState<string>('');
    const [response, setResponse] = useState<Message[]>([]);
    
    const sendMessage = async () => {

      if (message === '') return;
      const newMessage: Message = {type: 'user', text: message}
      setResponse(prevConvo => [...prevConvo, newMessage]);

        try {
          const res = await fetch("/api/chat", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ message }), 
          });
    
          if (!res.ok) {
            throw new Error("Failed to send message");
          }
          
          const data = await res.json();
          const newResponse: Message = {type: 'ai', text: data.response}
          setResponse(prevConvo => [...prevConvo, newResponse]); 
        } catch (error) {
          console.error("Error:", error);
          const errorMessage: Message = {type: 'ai', text: "error getting AI response"};
          setResponse(prevConvo => [...prevConvo, errorMessage]);
        }
        setMessage("");
      };

    return(
        <Box>
          <Box>
          {
            response.map((msg, index) =>(
            <Typography key={index} variant="body1" style={{textAlign: msg.type === 'user' ? 'right' : 'left'}}>
              {msg.text}
            </Typography>
            ))
          }
          </Box>
        <TextField
            fullWidth
            multiline
            value={message}
            onChange={(e) => setMessage(e.target.value)}
        />
        <Button variant="contained" onClick={sendMessage}>
            Send
        </Button>
        
    </Box>
    )
}
export {Chat}