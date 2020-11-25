import React, { createContext, useReducer } from "react"

export const MessageContext = createContext({})

const initialState = {
    message: [
        {
            userID: 1,
            username: 'user1',
            fname: 'Komon',
            lname: 'Wanje',
            message: "Hi"
        },
        {
            userID: 2,
            username: 'user2',
            fname: 'Jonh',
            lname: 'Dept',
            message: "Yo"
        },
        {
            userID: 2,
            username: 'user2',
            fname: 'Jonh',
            lname: 'Dept',
            message: "Yo"
        },
        {
            userID: 2,
            username: 'user2',
            fname: 'Jonh',
            lname: 'Dept',
            message: "Yo"
        },
        {
            userID: 2,
            username: 'user2',
            fname: 'Jonh',
            lname: 'Dept',
            message: "Yo"
        },
        {
            userID: 2,
            username: 'user2',
            fname: 'Jonh',
            lname: 'Dept',
            message: "Yo"
        },
        {
            userID: 2,
            username: 'user2',
            fname: 'Jonh',
            lname: 'Dept',
            message: "Yo"
        },
        {
            userID: 2,
            username: 'user2',
            fname: 'Jonh',
            lname: 'Dept',
            message: "Yo"
        },
        {
            userID: 2,
            username: 'user2',
            fname: 'Jonh',
            lname: 'Dept',
            message: "Yo"
        },
        {
            userID: 2,
            username: 'user2',
            fname: 'Jonh',
            lname: 'Dept',
            message: "last data"
        }
    ]
    
    
}

const messageReducer = (state, action) => {
    switch (action.type) {
        case "ADD_MESSAGE":
            return {
                ...state, // copy state 
                message: [...state.message,action.payload] // set state counter
            }

    }
}

export const MessageProvider = ({ children }) => {
    const [messageState, messageDispatch] = useReducer(
        messageReducer,
        initialState
    )

    const { message } = messageState

    const addMessage = payload =>
        messageDispatch({ type: "ADD_MESSAGE", payload }) // ส่ง type ADD_COUNTER และ payload เพื่อให้ conterReducer ไปใช้งานต่อ

    return (
        <MessageContext.Provider value={{ message, addMessage }}>
            {children}
        </MessageContext.Provider>
    )
}