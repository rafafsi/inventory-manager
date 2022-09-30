import React from "react";
import styled from "styled-components";

import loading from './../../img/loading.svg'

const Loading = () => {
    return (
        <Background>
            <Img src={loading} alt="Loading" />
        </Background>
    )
}

const Background = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Img = styled.img`
    width: 50px;
`

export default Loading;