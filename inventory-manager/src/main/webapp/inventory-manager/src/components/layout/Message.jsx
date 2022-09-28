import { useEffect, useState } from "react";
import styled from "styled-components";

const Message = ({ msg, type }) => {

    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if (!msg) {
            setVisible(false)
            return
        }

        setVisible(true)

        const timer = setTimeout(() => {
            setVisible(false)
        }, 3000)

        return () => clearTimeout(timer)
    }, [msg])

    return (
        <>
            {visible && <MessageSty className={type}>{msg}</MessageSty>}
        </>
    )
}
const MessageSty = styled.div`
    width: 90%;
    padding: 1em;
    border: 1px solid #000;
    margin: 0 auto;
    text-align: center;
    border-radius: 5px;

    &.success {
        color: #155724;
        background-color: #d4edda;
        border-color: #c3e6cb;
    }

    &.error {
        color: #721c24;
        background-color: #f8d7da;
        border-color: #f5c6cb;
    }
`






export default Message;