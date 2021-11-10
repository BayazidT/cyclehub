import React from 'react';
import  styled  from 'styled-components';
import { useHistory } from 'react-router-dom';

const Container = styled.div`
flex: 1;
margin: 5px;
min-width: 280px;
display: flex;
align-items: center;
justify-content: center;
position:relative;
`;
const Info = styled.div`
position:absolute;
width:100%;
height:100%;
top:0;
left:0;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

`;
const Image = styled.img`
width:150px;
min-height:100px;
object-fit:cover;
transition: all 0.5s ease;
&.hover{
    width:160px;
    min-height:110px;
    transform: scale(1.1);
}
`;
const Title = styled.h1`color:white;margin-bottom:20px;background:gray;padding:5px;`;
const Button = styled.button`
border:none;
padding:10px;
background-color:white;
color:gray;
cursor:pointer;
font-weight:600;
`;



const CategoryItem = ({ item }) => {

    const history = useHistory();
    const openByBrand = () => {
        history.push(`/brand/${item.id}`);
      };
    return (
        <Container onClick={openByBrand}>
            <Image src={item.img}/>
        </Container>
    )
}

export default CategoryItem
