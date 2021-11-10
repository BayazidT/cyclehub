import { Search } from "@material-ui/icons";
import styled from "styled-components"
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

const Container = styled.div`

`;
const Title = styled.h1`
margin:20px;
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
const ProductList = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products</FilterText>
                    <Select>
                        <Option disabled selected>Color</Option>
                        <Option>Black</Option>
                        <Option>Skyblue</Option>
                        <Option>Pink</Option>
                        <Option>White</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>Size</Option>
                        <Option>XXL</Option>
                        <Option>XL</Option>
                        <Option>L</Option>
                        <Option>M</Option>
                        <Option>S</Option>
                    </Select>

                </Filter>
                <Filter>
                <FilterText>Short Products</FilterText>
                <Select>
                        <Option disabled selected>Popular</Option>
                        <Option>New Arrival</Option>
                        <Option>Price Desc</Option>
                        <Option>Price Asc</Option>
                        <Option>White</Option>
                        <Option>Green</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products/>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default ProductList
