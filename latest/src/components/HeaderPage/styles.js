import styled from 'styled-components';


export const WrapperHeader = styled.div`
    
    .containerInfos {
        display: flex;
        flex-direction: start;
        gap: 20px;
        margin-top : 50px
    
    }

    input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
    }

    input[type=number] {
        padding-inline-start: 0.5rem;
        border: none;
        outline:none;
        width: 65px;
        font-size: 24px;
        font-weight: bold;
    }

    #inpPlaceholder::-webkit-input-placeholder {
        color: hsl(0, 1%, 44%);
        font-weight: bold;
        font-size: 24px;
    }

     

    .errorEmpty {
        font-style: italic;
        color: hsl(0, 100%, 67%);
        margin-top: 5px;
    }

    @media(max-width: 375px) {
       
    }

    /* .errorInvalid {
        display: none;
    }

    .errorInvalid.active {
        font-style: italic;
        color: hsl(0, 100%, 67%);
        margin-top: 5px;
    } */
`;

export const Dividers = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    .dividers {
        display: flex;
        align-items:center;
        margin: 0 auto;
    }

    .dividersMobile {
        display: none;
    }

    .lineDividers {
        color: hsl(0, 0%, 86%);
        font-weight: bold;
        font-family: sans-serif;
        margin-left: -30px
    }

    .iconArrow {
        &:hover {
            background-color: hsl(0, 0%, 8%);
        }
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: hsl(259, 100%, 65%);
        border-radius: 50%;
        width: 80px;
        height: 80px;
        margin-left: 3px;
        cursor: pointer;
    }

    @media(max-width: 375px) {
        .lineDividers {
            display: none;
        }

        .dividersMobile {
        display: block;
        position: relative;
        margin-top: 30px;
        margin-bottom: 10px;
    }

    .dividersM {
        color: hsl(0, 0%, 94%);
    }

        .iconArrow {
            display: none;
        }

        .iconArrowM {
            display: flex;
            align-items:center;
            justify-content:center;
            position:absolute;
            right: 40%;
            top: -10px;
            background-color: hsl(259, 100%, 65%);
            border-radius: 50%;
            width: 60px;
            height: 60px;
        }

    }
`

export const InputAge = styled.div`
    &:hover {
        border-color: ${({error}) => error ? 'hsl(0, 100%, 67%)' : ' hsl(259, 100%, 65%)'};
    }
    border: 1px solid ${({error}) => error ? 'hsl(0, 100%, 67%)' : 'hsl(0, 0%, 86%)'};
    border-radius: 12px;
    padding-block: 15px;
    width: 140px;
    caret-color: hsl(259, 100%, 65%);
    cursor:pointer; 

    @media(max-width: 375px) {
        width: 80px;
        padding-block: 10px;
    }    
        
    
    
`;

export const InfoTop = styled.div`
        color: ${({error}) => error ? 'hsl(0, 100%, 67%)' : 'hsl(0, 1%, 44%)'};
        font-weight: bold;
        font-size: 14px;
        letter-spacing: 2px;
        margin-left: 4px;
`