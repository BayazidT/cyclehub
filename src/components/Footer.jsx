import {Facebook, Instagram, LinkedIn, Pinterest, Twitter,Room,Phone,Email } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { mobile } from '../responsive';



const Container = styled.div`
display:flex;
${mobile({flexDirection:"column"})}

`;
const Left = styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;

`;
const Logo = styled.h1``;
const Description = styled.p`
margin:20px 0px;
`;
const SocialContainer = styled.div`
display:flex;
`;
const SocialIcon = styled.div`
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color: #${props=>props.color};
display:flex;
align-items:center;
justify-content:center;
margin-right:20px;
`;

const Center = styled.div`
flex:1;
padding:20px;

`;
const Title =styled.h3`
margin-bottom:30px;
`;
const List =styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;
`;
const ListItem =styled.li`
width:50%;
margin-bottom:10px;
`;

const Right = styled.div`
flex:1;
padding:20px;
`;

const ContactItem =styled.div`
margin-bottom:20px;
display:flex;
align-items:center;
`;
const CustomLink = styled.a`

`;

const Footer = () => {
    return (
        <Container>
            <Left>
               <Logo> CycleHub</Logo>
               <Description>
                   CycleHub is the place where you will find everything you need for your cycle.
                   So, don't forget to subscribe our page by providing your email in the newsletter.
               </Description>
               <SocialContainer>
                   <SocialIcon color="3B5999" onClick={()=>window.open("https://web.facebook.com/bdcyclehub", "_blank")}>
                       <Facebook />
                   </SocialIcon>
                   <SocialIcon color="E4405F">
                       <Instagram/>
                   </SocialIcon>
                   <SocialIcon color="55ACEE">
                       <Twitter/>
                   </SocialIcon>
                   <SocialIcon color="3B5999">
                       <LinkedIn/>
                   </SocialIcon>
                   <SocialIcon>
                       <Pinterest/>
                   </SocialIcon>
               </SocialContainer>

            </Left>
            <Center>
                <Title>Useful Link</Title>
                <List>
                    <ListItem ><Link  to="/">Home</Link></ListItem>
                    <ListItem><Link  to="/about/cyclehub">About</Link></ListItem>
                    <ListItem><Link  to="/blog/cyclehub">Blog</Link></ListItem>
                    <ListItem><CustomLink  href="https://moricika.netlify.app/posts" target="_blank">Moricika</CustomLink></ListItem>
                    <ListItem><CustomLink  href="https://pistonbd.netlify.app/" target="_blank">PistonBD</CustomLink></ListItem>
                    <ListItem><Link  to="/">JToJob</Link></ListItem>
                    <ListItem><Link  to="/">BikeHub</Link></ListItem>
                    <ListItem><Link  to="/">CarHub</Link></ListItem>
                   
                </List>

            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><Room style={{marginRight:"10px"}}/>Road#2,Sector#13,Uttara, Dhaka-1230</ContactItem>
                <ContactItem><Phone style={{marginRight:"10px"}}/>+8801772242616</ContactItem>
                <ContactItem><Email style={{marginRight:"10px"}}/>btnirob13@gmail.com</ContactItem>

            </Right>
        </Container>
    )
}

export default Footer
