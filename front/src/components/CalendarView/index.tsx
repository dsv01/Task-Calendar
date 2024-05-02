import { CalendarViewDiv } from "./style"
import { useContext, useState } from 'react';

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

type Props = 
{
    events:Array<object>
}

function renderEventContent(eventInfo:any)
{
    return(
        <div>
            <b>{eventInfo.timeText}</b>
            <i>{eventInfo.event.title}</i>
        </div>
    )
}

export default function CalendarView({events}:Props)
{
    return(
        <CalendarViewDiv>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView='dayGridMonth'
                weekends={true}
                events={events}
                eventContent={renderEventContent}
            />
        </CalendarViewDiv>
    )
}