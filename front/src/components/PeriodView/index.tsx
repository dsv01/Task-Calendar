import {PeriodViewDiv, PeriodLabel} from "./style"

type Props = 
{
    label:string
}

export default function PeriodView({label}:Props)
{
    return (
        <PeriodViewDiv>
            <PeriodLabel>{label}</PeriodLabel>
        </PeriodViewDiv>
    )
}