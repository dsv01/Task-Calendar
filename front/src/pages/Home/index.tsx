import { HomeDiv, Header, Content, Footer, Logo, LeftSide, RightSide } from "./style";
import ComboView from "../../components/ComboView";

function reactChangeComboView()
{
    console.log("Mudou combobox")
}

export default function Home()
{
    const optionComboView = ["Day", "Week", "Month"];

    return (
        <HomeDiv>
            <Header>
                <Logo>Task Calendar</Logo>
                <ComboView options={optionComboView} onChange={reactChangeComboView}></ComboView>
            </Header>

            <Content>
                <LeftSide></LeftSide>
                <RightSide></RightSide>
            </Content>

            <Footer></Footer>
        </HomeDiv>
    )
}