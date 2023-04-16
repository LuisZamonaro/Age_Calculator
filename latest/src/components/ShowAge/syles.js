import styled from 'styled-components'


export const WrapperShowAge = styled.div`

    .infoAge {
        /* display: flex; */
        /* align-items: center; */
        /* justify-content: center; */
        font-size: 90px;
        font-weight: bold;
        font-style: italic;
       
    }
    
    .hyphen {
        color: hsl(259, 100%, 65%);
        font-size: 120px;
        letter-spacing: 10px
    }
    
    @media (max-width: 375px) {
            
        .infoAge {
                font-size: 50px;
                font-weight: 950;
                margin-top: 10px;
            }
        }

        .hyphen {
            font-size: 70px;
            margin-right: -20px;
            font-weight: 950;
        }
`