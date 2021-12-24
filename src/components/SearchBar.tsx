import React from 'react'

interface Props{
    keyword: string,
    setKeyword: Function
}
const SearchBar:React.FC<Props> = ({keyword,setKeyword}) => {
    const BarStyling = {
        width:"20rem",
        background:"#F2F1F9", 
        border:"none", 
        padding:"0.5rem" };
    return (
    <input
        style = {BarStyling}
        key="random1"
        value={keyword}
        placeholder={"Look for a task"}
        onChange={(e) => setKeyword(e.target.value)}
    />
    );
}

    
export default SearchBar
