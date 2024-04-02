import { createContext, useContext, useReducer } from "react";

const notificationReducer = (state, action) => {
    switch(action.type) {
        case 'SET_NOTIFICATION':
            setTimeout(() => action.dispatch({type: 'RESET_NOTIFICATION'}), 5000)
            return action.payload
        case 'RESET_NOTIFICATION':
            return ''
        default:
            return state;
    }
}

const NotificationContext = createContext()

export const NotificationContextProvider = (props) => {
    const [notification, notificationDispatch] = useReducer(notificationReducer, '')
    return (
        <NotificationContext.Provider value={[notification, notificationDispatch]}>
            {props.children}
        </NotificationContext.Provider>
    )
}

export const useNotificationDispatch = () => {
    const notificationAndDispatch = useContext(NotificationContext)
    return notificationAndDispatch[1]
}

export default NotificationContext