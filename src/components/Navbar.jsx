import { Badge } from '@material-ui/core';
import { Search, MoreHorizOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { mobile } from '../responsive';
const Container= styled.div`
height: 60px; border-bottom:.5px solid teal;
 ${mobile({height:"50px"})}
`;
 const Wrapper = styled.div`
 padding:10px 20px;
 display:flex;
 align-items:center;
 justify-content:space-between;
 ${mobile({padding:"10px 0px"})}
 `;
 const Left=styled.div`
 flex:1;
 display:flex;
 align-items:center;
 ${mobile({display:"none"})}
 `;
 const Language = styled.span`
 font-size:14px;
 cursor:pointer;
 `;
 const SearchContainer = styled.div`
 border: 1px solid lightgray;
 display:flex;
 margin-left:25px;
 padding:5px;
 align-items:center;
 border-radius:5px;
 `;
 const Input = styled.input`
 border:none;
 font-size:20px;
 `;
 const Center=styled.div`flex:1;text-align:center;`;
 const Logo = styled.h1`
 font-weight:bold;
 margin-left: 5px;
 cursor:pointer;
 ${mobile({fontSize:"22px",marginLeft:"-45px"})}
 `;
 const Right=styled.div`flex:1;display:flex;align-items:center;justify-content:flex-end;
  ${mobile({justifyContent:"center"})}
 `;
 const MenuItem = styled.div`display:flex;margin-left:25px;cursor:pointer;font-size:14px;
  ${mobile({marginLeft:"10px", fontSize:"18px"})}
 `;

const Navbar = () => {
    const history = useHistory();

    const backToHome = ()=>{
        history.push('/');
    }
    const goToAbout = () =>{
        history.push('/about/cyclehub');
    }
    const goToBlog = () =>{
        history.push('/blog/cyclehub');
    }
    return (
        <Container>
           <Wrapper>
               <Left>
                   <Language>EN</Language>
                   <SearchContainer>
                   <Input placeholder="Search..."/>
                       <Search style={{ color:"gray", fontSize:20}}/>
                       
                   </SearchContainer>
               </Left>
               <Center onClick={backToHome}><Logo>CycleHub</Logo></Center>
               <Right>
                   <MenuItem onClick={goToAbout}>About</MenuItem>
                   <MenuItem onClick={goToBlog}>Blog</MenuItem>
                   <MenuItem>
                   <MoreHorizOutlined/>
                   </MenuItem>

               </Right>

           </Wrapper>
        </Container>
    )
}

export default Navbar

