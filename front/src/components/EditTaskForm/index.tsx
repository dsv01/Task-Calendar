import { throws } from "assert";
import { EditTaskFormDiv, EditTaskFormInput, EditTaskFormLabel, EditTaskFormTextArea, 
    EditTaskFormDivLabelInput} from "./style";

import { useState } from 'react';

type Props = 
{
    // title:string,
    // description:string,
    // date:string,
    // duration:string

    events:Array<object>
    setEvents:Function
}

export default function EditTaskForm({setEvents, events}:Props)
{
    const handleSubmit = (event:any) =>
    {
        // event.preventDefault();
    }
    return (
        <EditTaskFormDiv id="formTask" action="http://localhost:5000/task/createTask" onSubmit={handleSubmit} method="post">
            <EditTaskFormDivLabelInput>
                <EditTaskFormLabel>Nome</EditTaskFormLabel>
                <EditTaskFormInput type="text" name="Name"></EditTaskFormInput>
            </EditTaskFormDivLabelInput>

            <EditTaskFormDivLabelInput>
                <EditTaskFormLabel>Descrição</EditTaskFormLabel>
                <EditTaskFormTextArea name="Description"></EditTaskFormTextArea>
            </EditTaskFormDivLabelInput>

            <EditTaskFormDivLabelInput>
                <EditTaskFormLabel>Horário</EditTaskFormLabel>
                <EditTaskFormInput type="datetime-local" name="Hour"></EditTaskFormInput>
            </EditTaskFormDivLabelInput>

            <EditTaskFormDivLabelInput>
                <EditTaskFormLabel>Duração</EditTaskFormLabel>
                <EditTaskFormInput type="time" name="Duration"></EditTaskFormInput>
            </EditTaskFormDivLabelInput>

            <EditTaskFormDivLabelInput>
                <EditTaskFormInput type="submit"></EditTaskFormInput>
            </EditTaskFormDivLabelInput>
        </EditTaskFormDiv>
    )
}