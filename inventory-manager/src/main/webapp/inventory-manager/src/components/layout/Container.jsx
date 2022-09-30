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
    min-height: 80vh;
    width: 100vw;
    align-items: center;
    background-color: var(--mainOrange);
    border-bottom: 10px solid var(--mainOrange);
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;


    .section {
    width: 80vw;
    height: 60vh;
    padding: 4em;
    border-radius: 40px;
    margin: 10px auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: var(--white); 
    }

    .min_height {
        min-height: 75vh;
    }

    .start {
        justify-content: flex-start;
    }

    .column {
        flex-direction: column;
        justify-content: space-around;
    }
`
export default Container;