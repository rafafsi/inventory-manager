import styled from "styled-components";

const Input = ({ icon, type, text, handleOnChange, placeholder, name, value }) => {
    return (
        <Wrapper>
            <Icon>{icon}</Icon>
            <InputSty
                type={type}
                text={text}
                name={name}
                placeholder={placeholder} 
                onChange={handleOnChange}
                defaultValue={value ? value : ''}
                 />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
`

const InputSty = styled.input`
    padding: 5px 5px 5px 40px;
    border: solid 2px var(--mainBlack);
    border-radius: 10px;
    margin: 0.5em;
    width: 500px;
    font-size: 1em;
`

const Icon = styled.div`
    font-size: 20px;
    position: absolute;
    left: 20px;
    height: 34px;
`
export default Input;