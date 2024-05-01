import { CalendarViewDiv } from "./style"
import { useState } from 'react';

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

function renderEventContent(eventInfo:any)
{
    return(
        <div>
            <b>{eventInfo.timeText}</b>
            <i>{eventInfo.event.title}</i>
        </div>
    )
}

export default function CalendarView()
{
    const [events, setEvents] = useState<Array<object>>([]);

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