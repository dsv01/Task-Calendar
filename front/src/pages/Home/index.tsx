import { HomeDiv, Header, Content, Footer, Logo, LeftSide, RightSide } from "./style";

export default function Home()
{
    return (
        <HomeDiv>
            <Header>
                <Logo>Task Calendar</Logo>
            </Header>

            <Content>
                <LeftSide></LeftSide>
                <RightSide></RightSide>
            </Content>

            <Footer></Footer>
        </HomeDiv>
    )
}