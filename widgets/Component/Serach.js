import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
    const [term, setTerm] = useState('DATA ANALYTICS');
    const [results, setResults] = useState([]);

    // const url = "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=EDMRequest%20URL:%20https://en.wikipedia.org/w/api.php?action=query&list=search&origin=*&format=json&srsearch="
    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
                params: {
                    action: "query",
                    list: "search",
                    origin: "*",
                    format: "json",
                    srsearch: term,
                },
            });
            setResults(data.query.search);
        };

        const timeoutId = setTimeout(() => {
            if(term){
                search()
            }
        },500)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [term])

    // const getData = async () => {
    //     const response = await fetch(url + term);
    //     const users = await response.json();
    //     setResults(users.query.search);
    // };

    // useEffect(() => {
    //     if(term !== null){
    //         getData();
    //     }
    // }, [term]);

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a
                        className="ui button"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">{result.title}</div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                </div>
            </div>
        );
    });
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                        className="input"
                    />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    );
};

export default Search;


    // },[]); --> Means Run At Initial Render
    // }); --> Aun at Initial Render and Run After Every Render
    // },[term]); --> Run At Initial Render and Run after every rerender if data has changed since las render
