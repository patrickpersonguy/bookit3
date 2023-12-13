import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import bookdbtest from '../bookdbtest.js';

const useStyles = makeStyles((theme) => ({
  dataResult: {
    top: "75px",
    width: "800px",
    height: "100px",
    zIndex: 999,
    backgroundColor: "#27353D",
    color: "#FDF6EA",
    borderRadius: "10px",
    overflow: "hidden",
    overflowY: "auto",
    marginBottom: "2px",
    padding: "10px",
  },
}));

function SearchBar({ placeholder, data }) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const classes = useStyles();

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = bookdbtest.filter((value) => {
            return value.BookName.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    };

    return (
        <div className="search">
            <div className="searchInputs">
                <input
                    type="text"
                    placeholder={placeholder}
                    value={wordEntered}
                    onChange={handleFilter}
                    style={{ 
                      backgroundColor: "#27353D", 
                      color: "#FDF6EA", 
                      fontFamily: "Outfit", 
                      fontSize: "15px", 
                      border: "none", 
                      outline: "none", 
                      width: "700px", 
                      height: "50px", 
                      paddingLeft: "20px",
                      borderRadius: "10px", }}
                />
                <div className="searchIcon">
                    {filteredData.length === 0 ? (
                        <span></span>
                    ) : (
                        <span onClick={clearInput}></span>
                    )}
                </div>
            </div>
            {filteredData.length !== 0 && (
                <div className={classes.dataResult}>
                    {filteredData.slice(0, 15).map((value, key) => {
                      return (
                        <a
                          className="dataItem"
                          href={value.BookOnlineRead}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            color: "#FDF6EA",
                            fontFamily: "Outfit",
                            fontSize: "15px",
                          }}
                        >
                          <p>{value.BookName}</p>
                        </a>
                      );
                    })}
                </div>
            )}
        </div>
    );
}

export default SearchBar;
