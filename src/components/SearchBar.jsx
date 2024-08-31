import { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
const SearchBar=()=>{
    const [searchText , setsearchText] = useState("");
    const [errorText, setErrorText] = useState("");
    const navigate = useNavigate();
    const handleSearch=()=>{
        if(searchText.trim()==""){
            setErrorText("Please enter a search term")
        } else {
            setErrorText("");
            navigate(`/search/${searchText}`);
            setsearchText("");
        }
    }
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
          handleSearch(); // Trigger search on Enter key press
        }
      };
    return (
        <div className="rounded">
             {/* <div className="bg-white p-3 rounded-lg w-full text-black"></div> */}
        <input type="text" onChange={(e)=>setsearchText(e.target.value)} onKeyDown={handleKeyDown} value={searchText} className="rounded-md p-3 w-full outline-none text-lg text-zinc-800" placeholder="Search..."/>

        <button onClick={handleSearch} className="absolute right-6 top-6 md:top-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                    stroke="red" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
        </button>
        {errorText && <p className="text-red-500 mt-2">{errorText}</p>}
        </div>
    )
}

export default SearchBar;

