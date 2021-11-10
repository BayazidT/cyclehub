import { Search } from "@material-ui/icons";
import styled from "styled-components"
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import { useParams } from "react-router-dom";
import { categories ,popularProducts } from '../data';
import { mobile } from "../responsive";
import Product from '../components/Product';
const Container = styled.div`

`;
const Title = styled.h1`
font-size:35px;
padding-bottom:5px;
margin:10px;
border-bottom: 4px solid teal;
${mobile({fontSize:"24px"})}
`;
const FilterContainer = styled.div`
display:flex;
justify-content:space-between;
`;
const Filter = styled.div`
margin:20px;
`;
const FilterText = styled.span`
font-size:20px;
font-weight:600;
margin-right:20px;
`;
const Select = styled.select`
margin-right:20px;
padding:10px;
`;
const Option = styled.option`

`;
const ProductContainer = styled.div`
padding:20px;
display:flex;
flex-wrap:wrap;
justify-content:space-between;
`;
const ProductPerBrand = () => {
     const {id} = useParams();
     const brandName = categories.find((item) => item.id == id);
     const Name = brandName.title;
     const product = popularProducts.filter((item) => item.brand == Name);

    return (
        <Container>
            <Title>Brand Name : {Name} </Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Cycles</FilterText>
                    <Select>
                        <Option disabled selected>Brand</Option>
                       {categories.map(item =>(
                <Option  key={item.id} >{item.title}</Option>
            )
                       ) }
                    </Select>
                </Filter>
               
            </FilterContainer>
            
           <ProductContainer>
           {product.map(item => (
                <Product item={item} key={item.id} />
            ))}
           </ProductContainer>
        </Container>
    )
}

export default ProductPerBrand
