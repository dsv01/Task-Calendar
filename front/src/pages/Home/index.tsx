import { HomeDiv, Header, Content, Footer, Logo, LeftSide, RightSide } from "./style";
import ComboView from "../../components/ComboView";
import PeriodView from "../../components/PeriodView";
import SearchBar from "../../components/SearchBar";
import EditTaskForm from "../../components/EditTaskForm";
import CalendarView from "../../components/CalendarView";

import { useState } from 'react';

function reactChangeComboView()
{
    console.log("Mudou combobox")
}

export default function Home()
{
    const optionComboView = ["Day", "Week", "Month"];
    const [periodLabel, setPeriodLabel] = useState<string>("Agosto 26-31");

    // const [title, setTitle] = useState<string>("");
    // const [description, setDescription] = useState<string>("");
    // const [date, setDate] = useState<string>("");
    // const [duration, setDuration] = useState<string>("");

    const [events, setEvents] = useState<Array<object>>([]);

    return (
        <HomeDiv>
            <Header>
                <Logo>Task Calendar</Logo>
                <ComboView options={optionComboView} onChange={reactChangeComboView}></ComboView>
                <PeriodView label={periodLabel}></PeriodView>
                <SearchBar></SearchBar>
            </Header>

            <Content>
                <LeftSide>
                    <EditTaskForm events={events} setEvents={setEvents}></EditTaskForm>
                </LeftSide>
                <RightSide>
                    <CalendarView events={events}></CalendarView>
                </RightSide>
            </Content>

            <Footer></Footer>
        </HomeDiv>
    )
}