import { useEffect } from 'react';
import styled from 'styled-components'
import sunje from './sunje.png'

const Container = styled.div`

width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


`

const Image = styled.img`

width: 30%;



`

const RedirectPage = () => {

    useEffect(() => {
    
        window.location.href = 'https://booking.naver.com/booking/3/bizes/1247314/items?endDate=2025-03-02&guests=2&startDate=2025-03-01';
    }, []);

    return (
        <Container>

        <Image src={sunje} />
            <>예약 페이지로 이동중입니다</>
        </Container>





    )
};

export default RedirectPage;