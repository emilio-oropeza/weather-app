import React from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import MicIcon from '@mui/icons-material/Mic';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';

//https://simple-weather2.p.rapidapi.com/weather?location=

const SearchBar = ({setCity, handleKeyDown}) => {
    const handleInput = (e) => {
        let cityLowerCase = e.target.value.toLowerCase();
        setCity(cityLowerCase);
    }


    return (
        <>
            <div className='searchContainer'>
                <SearchRoundedIcon htmlColor="white" />
                <input 
                    type="text"
                    name="searchBar"
                    className='searchContainer--input'
                    onChange={handleInput}
                    onKeyDown={handleKeyDown}
                />
                <MicIcon htmlColor="white" />
                <PhotoCameraOutlinedIcon htmlColor="white" />
            </div>    
        </>
    );
}

export default SearchBar;