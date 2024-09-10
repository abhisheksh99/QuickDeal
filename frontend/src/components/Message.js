import React from 'react'
import { Alert } from 'react-bootstrap'

const Message = ({varient,children}) => {
  return (
    <Alert varient={varient="info"}>
        {children}
      
    </Alert>
  )
}


export default Message
