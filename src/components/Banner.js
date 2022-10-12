
import React from 'react'
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <Box>
            <Carousel autoPlay={true} infiniteLoop={true} interval={3500} showThumbs={false} showStatus={false}>
                <div>
                    <img alt="celular sem fundo" src="https://iili.io/S4BkFf.png"></img> 
                </div>
                <div>
                    <img alt="deitado com celular na mao"src="https://nubank.com.br/images-cms/1650480415-man-sitting-with-phone-xs-3x.jpg"></img>
                </div>
                <div>
                    <img alt="segurando o celular" src="https://www.milk-education.co.uk/wp-content/uploads/2017/07/Teacher-Holding-Phone.png"></img>
                </div>
            </Carousel>
        </Box>
    )
}


export default Banner

const Box = styled.div`
    display: flex;
    height: 30%;
    align-items: center;
    justify-content: center;
`;