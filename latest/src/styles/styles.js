import styled from 'styled-components'

export const Container = styled.div `
        display: flex;
    /* align-items: center; */
    /* justify-content: center; */
    flex-direction: column;
    width: 700px;
    margin: 0 auto;
    padding-inline-start: 2.5rem;
    margin-top: 140px;
    background-color: white;
    border-radius: 18px;
    border-bottom-right-radius: 170px;

    @media(max-width: 375px) {
        width: 330px;
        border-bottom-right-radius: 100px;
        margin-top: 100px;
        padding-inline-start: 1rem;
    }
`