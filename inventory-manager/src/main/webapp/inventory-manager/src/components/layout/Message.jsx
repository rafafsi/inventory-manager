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
    border: 1px solid var(--mainBlack);
    margin: 0 auto;
    text-align: center;
    border-radius: 5px;

    &.success {
        color: var(--success);
        background-color: var(--backSuccess);
        border-color: var(--borderSuccess);
    }

    &.error {
        color: var(--error);
        background-color: var(--backError);
        border-color: var(--borderError);
    }
`






export default Message;