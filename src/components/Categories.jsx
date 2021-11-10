import React from 'react';
import { categories } from '../data';
import  styled  from 'styled-components';
import CategoryItem from './CategoryItem';


const Container = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-between;
padding:20px;

`;
const Title = styled.h1`
color:#999;
`;
const Categories = () => {
    return (
        <Container>

            { categories.map(item =>(
                <CategoryItem item = {item}/>
            ))}
        </Container>
    )
}

export default Categories
