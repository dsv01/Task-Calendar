import { HomeDiv, Header, Content, Footer, Logo, LeftSide, RightSide } from "./style";
import ComboView from "../../components/ComboView";
import PeriodView from "../../components/PeriodView";
import SearchBar from "../../components/SearchBar";

import { useState } from 'react';

function reactChangeComboView()
{
    console.log("Mudou combobox")
}

export default function Home()
{
    const optionComboView = ["Day", "Week", "Month"];
    const [periodLabel, setPeriodLabel] = useState<string>("Agosto 26-31");

    return (
        <HomeDiv>
            <Header>
                <Logo>Task Calendar</Logo>
                <ComboView options={optionComboView} onChange={reactChangeComboView}></ComboView>
                <PeriodView label={periodLabel}></PeriodView>
                <SearchBar></SearchBar>
            </Header>

            <Content>
                <LeftSide></LeftSide>
                <RightSide></RightSide>
            </Content>

            <Footer></Footer>
        </HomeDiv>
    )
}