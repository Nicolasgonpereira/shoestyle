"use client";

import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import styled from "styled-components";

const InputWrapper = styled.div`
    position: relative;
    align-items: center;
    
`;

const StyledInput = styled.input`
    width: 100%;
    padding: 4px 12px 4px 32px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background: #ccc;
    font-size: 1rem;
    outline: none;

    &:focus {
        border-color: #000;
    }
`;

const SearchIcon = styled(CiSearch)`
    position: absolute;
    left: 0px;
    top: 50%;
    transform: translateY(-50%);
    color: #6b6b6b;
    pointer-events: none;
    width: 24px;
    height: 24px;
    margin: 0 0 0 6px;
    pointer-events: none;
`;


export default function Search () {

    const [search, setSearch] = useState<string>("");
    const [isMounted, setIsMounted] = useState<boolean>(false);

    useEffect(()=>{
        setIsMounted(true);
    },[]);

    if (!isMounted) {
        return null;
    }

    return (
        <InputWrapper>
            <SearchIcon />
            <StyledInput
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e)=>setSearch(e.target.value)}/>
        </InputWrapper>
    );
}
