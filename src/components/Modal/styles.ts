import styled from "styled-components";

export const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    padding-top: 4rem;
    padding-bottom: 4rem;
    background-color: rgba(30,30,30, 0.4);
    z-index: 50;
`

export const ModalOverlay = styled.button`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    background-color: transparent;
    height: 100%;
`

export const ModalContainer = styled.div`
    z-index: 20;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    width: 420px;
    padding: 4rem 2rem;
    background-color: #fff;
`

export const ModalCloseButton = styled.button`
    position: absolute;
    top: 0.25rem;
    right: 0.25rem;
    z-index: 10;
`