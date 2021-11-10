import styled from "styled-components"
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { useParams } from "react-router-dom";
import { popularProducts } from '../data';
import { PopularCycle } from "../components/Headings";
import { useHistory } from "react-router-dom";
import { mobile } from "../responsive";

const Container = styled.div`

`;
const Wrapper = styled.div`
padding:50px;
display:flex;
${mobile({flexDirection:"column", padding:"10px"})}
`;
const ImgContainer = styled.div`
flex:1;
`;
const Image = styled.img`
width:100%;
object-fit:cover;
`;
const InfoContainer = styled.div`
flex:1;
padding:0px 50px;
${mobile({padding:"5px"})}
`;
const Title = styled.h1`

`;
const Des = styled.p`
line-height: 2;
`;
const Price = styled.span`
font-weight:bold;
font-size:20px;
line-height:2;
`;
const UpdateTime = styled.p`

`;
const BackButton = styled.button`
padding:10px;
margin: 10px 0px;
border:0;
border-radius: 5px;
color:#fff;
background-color: teal;
`;
const Product = (res, req) => {

    const history = useHistory();

    const { id } = useParams();
    const specificCycle = popularProducts.find((item) => item.id==id);
    const goBack = () =>{
        history.goBack();
    }
    return (
        <Container>
            <Wrapper>
                <ImgContainer>
                <Image src={specificCycle.img}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>{specificCycle.title}</Title>
                    <Des>{specificCycle.description}
                    </Des>
                    <Price>Price : {specificCycle.price}</Price>
                    <UpdateTime>Updated on : 20 October 2021</UpdateTime>
                    
                    <BackButton onClick={goBack}> Go Back</BackButton>
                </InfoContainer>
            </Wrapper>
           

        </Container>
    )
}

export default Product
