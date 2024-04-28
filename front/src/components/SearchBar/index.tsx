import { SearchBarDiv, SearchIcon, SearchField} from "./style";

import { FaSearch } from 'react-icons/fa';
import React, { useState } from 'react';

function reactChangeInputSearch(event:React.ChangeEvent<HTMLInputElement>)
{
    console.log(event.target.value);
}

export default function SearchBar()
{
    const [inputSearch, setInputSearch] = useState<string>("");

    return (
        <SearchBarDiv>
            <SearchIcon><FaSearch/></SearchIcon>
            <SearchField onChange={reactChangeInputSearch} placeholder="Pesquisar Task"></SearchField>
        </SearchBarDiv>
    )
}