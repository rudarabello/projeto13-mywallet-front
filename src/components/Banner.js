
import React from 'react'
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <Box>
            <Carousel autoPlay={true} infiniteLoop={true} interval={3500} showThumbs={false} showStatus={false}>
                <div>
                    <img alt="celular sem fundo" src="https://nubank.com.br/images-cms/1650480044-digital-account-phone-main-screen-md-2x.png"></img> 
                </div>
                <div>
                    <img alt="deitado com celular na mao"src="https://nubank.com.br/images-cms/1650480415-man-sitting-with-phone-xs-3x.jpg"></img>
                </div>
                <div>
                    <img alt="segurando o celular" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Gi5n78Qy2RjBwBV1G5tiiOromPp34deQeishyIqsp49s8l8oyZYMW3AW5lpDoHGQPHI&usqp=CAU"></img>
                </div>
            </Carousel>
        </Box>
    )
}

export default Banner

const Box = styled.div`
    display: flex;
    img{
    height: 100%;
}
`;