import { EditTaskFormDiv, EditTaskFormInput, EditTaskFormLabel, EditTaskFormTextArea, 
    EditTaskFormDivLabelInput} from "./style";

type Props = 
{
    title:string,
    description:string,
    date:string,
    duration:string
}

export default function EditTaskForm({title, description, date, duration}:Props)
{
    return (
        <EditTaskFormDiv action="localhost:5000/createTask" method="post">
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
                <EditTaskFormInput type="date" name="Hour"></EditTaskFormInput>
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