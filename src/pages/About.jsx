import React from 'react'
import styled from 'styled-components';
import developer from '../images/ourteam/bt.jpg';
import designer from '../images/ourteam/rt.jpg';
import writer from '../images/ourteam/ar.jpg';
import { mobile } from '../responsive';

const Container = styled.div`
padding: 20px;
background: #fff;
`;
const InfoContainer = styled.div`
margin: 5px;
padding: 5px;
display: flex;
justify-content: space-between;
${mobile({flexDirection:"column"})}
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
const About = () => {
    return (
        <Container>
           <InfoContainer>
           <Desc>
               CycleHub is a place where you will find all cycle informations and specifications.
               All the information we provide here is verified and justified. If any wrong information is there 
               please let us know we will take steps as soon as possible.We have started our journey from November 2021 and hope we will continue as much as possible.
               All the information we provide here it's collected from the internet and verified and finally uploaded here.

           </Desc>
           </InfoContainer>
           <Title>Our Mission</Title>
           <InfoContainer>
               <Desc>
                   Our mission is to provide authentic informations of cycle specifications and prices so that people can 
                   buy make their budget accordingly. In the blog section there will be regular updates about new cycles and cycle related different stories.
                   Gradually we will create a platform so that our user can open an account and write their own cycle life story and others information about cycles.
                   In the final stages we will start e-commerce from where our users can buy each and every cycle parts along with different brands cycle. 
               </Desc>
           </InfoContainer>
           <Title>Our Team</Title>
          <InfoContainer>
              <Left>
                  <Image  src={developer} alt="Developer"/>
                  <Info>
                      <Text>Bayazid Talukder</Text>
                      <Text>Developer</Text>

                  </Info>
              </Left>
              
              <Center>
                  
                  <Image  src="https://scontent.fdac2-1.fna.fbcdn.net/v/t1.6435-9/fr/cp0/e15/q65/247068451_3037302199857572_2275590123077280777_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=dd9801&efg=eyJpIjoidCJ9&_nc_eui2=AeHqsJc8yrCJwD-aBaYVwk-DK5VZrL3TTksrlVmsvdNOS8e1KRlmfpb3nzT4qiAmim6dZP6qCpbRNYP2u-v3Ju16&_nc_ohc=7tNOFixTS9QAX-oR1aH&tn=4vfOQT7C7gTZyTWT&_nc_ht=scontent.fdac2-1.fna&oh=36e93277e8b89982f30a4c3d5171f95b&oe=6198014F" alt="Graphics Designer"/>
                  <Info>
                  <Text>Rasel Talukder</Text>
                  <Text>Designer</Text>
                  </Info>
              </Center>
              <Right>
                 
                  <Image  src={writer}alt="Content Writer"/>
                  <Info>
                  <Text>Samir Talukder</Text>
                  <Text>R&D Head</Text>
                  </Info>
              </Right>
          </InfoContainer>

        </Container>
    )
}

export default About
