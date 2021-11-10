import  styled  from 'styled-components';
import React from 'react';
import { popularProducts } from '../data';
import { MenuItem } from '@material-ui/core';
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${Info}{
    opacity: 1;
    transform: scale(1.1);
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
width:180px;
  z-index: 2;
  border-radius:20px;
`;

const Icon = styled.div`
  height: 40px;
  display: flex;
  font-size:24px;
  font-weight:bold;
  color:teal;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
`;
const Product = ({ item }) => {
  const history = useHistory();
  const openPost = () => {
    history.push(`/${item.id}`);
  };


    return (
        <Container onClick={openPost}>
           
           <Circle />
           <Image src={item.img} />
           <Info>
               <Icon>
                   {item.title}
               </Icon>
               <Icon>
                  
               </Icon>
               <Icon>
                   {item.price}
               </Icon>
           </Info>
        </Container>
    )
}

export default Product
