import { ChangeEventHandler } from "react"
import { ComboViewDiv, ComboSelect } from "./style"

type Props = 
{
    options:Array<string>,
    onChange:ChangeEventHandler<HTMLSelectElement>
}

export default function ComboView({options, onChange}:Props)
{
    return(
        <ComboViewDiv>
            <ComboSelect onChange={onChange}>
                {
                    options.map((option) => { return(
                        <option>
                            {option}
                        </option>
                    )})
                }
            </ComboSelect>
        </ComboViewDiv>
    )
}