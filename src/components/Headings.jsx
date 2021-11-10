import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
background-color:white;
padding:20px;
`;
const Title = styled.h1`
font-size:45px;
padding-bottom:5px;
border-bottom: 4px solid teal;
${mobile({fontSize:"24px"})}
`;
export const Brands =()=>{
    return(
        <Container>
            <Title>Brands</Title>
        </Container>
        
    )

}
export const PopularCycle =()=>{
    return(
        <Container>
            <Title>Popular Cycles</Title>
        </Container>
        
    )

}