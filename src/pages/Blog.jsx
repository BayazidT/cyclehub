import React from 'react'
import styled from 'styled-components';
import developer from '../images/ourteam/bt.jpg';
import designer from '../images/ourteam/rt.jpg';
import writer from '../images/ourteam/ar.jpg';
const Container = styled.div`
padding: 20px;
background: #fff;
`;
const InfoContainer = styled.div`
margin: 5px;
padding: 5px;
display: flex;
justify-content: space-between;
`;
const Title = styled.h1`
font-size: 34px;
border-bottom: 2px solid teal;
`;
const Desc = styled.p`
font-size: 18px;
line-height: 1.5;
`;
const Left = styled.div`
height: 300px;
flex: 1;
position: relative;
`;
const Center = styled.div`
flex:1;
position: relative;
`;
const Right = styled.div`
flex:1;
position: relative;
`;
const Image = styled.img`
width: 100%;
height: 280px;
padding: 5px;
margin: 5px;
position: relative;
`;
const Info = styled.div`
position: absolute;
top: 50%;
left: 50%;
background-color: #444;
padding: 10px 20px;
opacity: .5;
transform: translate(-50%, -50%);
  text-align: center;
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0, 0.4); /* Black w/opacity/see-through */
`;
const Test = styled.div`
height: 220px;
width: 220px;
background-color: teal;
`;
const Pic = styled.div``;
const Text = styled.div`
color: white;
`;
const Blog = () => {
    return (
        <Container>
           <InfoContainer>
           <Desc>Blog section is under construction...</Desc>
          </InfoContainer>

        </Container>
    )
}

export default Blog
