import styled from 'styled-components';

const Container = ({ children, customClass }) => {
    return (
        <ContainerSty className={customClass}>
            {children}
        </ContainerSty>
    )
}

const ContainerSty = styled.div`
    display: flex;
    height: 730px;
    align-items: center;
    background-color: #222;

    .section {
    width: 80%;
    height: 70%;
    background-color: #fff;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 4em;
    margin: 0 auto;
    }

    .min_height {
        min-height: 75vh;
    }

    .start {
        justify-content: flex-start;
    }

    .column {
        flex-direction: column;
        justify-content: flex-start;
    }
`
export default Container;