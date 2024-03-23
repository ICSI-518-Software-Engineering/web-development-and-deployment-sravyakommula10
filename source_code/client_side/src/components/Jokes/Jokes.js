import React, { useState } from 'react';
import { Button } from "react-bootstrap";

import { getService } from "../../API/api";

const Jokes = () => {
    const [category, setCategory] = useState('');
    const [jokes, setJokes] = useState([]);

    const fetchJoke = async () => {
        if (!category) return;

        const payload = {
            method: "GET",
            url: `https://v2.jokeapi.dev/joke/${category}`,
        };
        try {
            const response = await getService(payload);

            const newJoke = response.data.setup ? `${response.data.setup} ${response.data.delivery}` : response.data.joke;
            setJokes([...jokes, newJoke]);
        } catch (err) {
            alert(err.response.data);
        }
    };


    const renderTable = () => {
        return (
            <table className='jokesTable'>
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>Joke</th>
                    </tr>
                </thead>
                <tbody>
                    {jokes.map((joke, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{joke}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    };


    return (
        <div className="jokesContainer">
            <h1 className='jokeHeader'>Joke Fetcher</h1>
            <div className="form-group">
                <label htmlFor="category" >Select a Category:</label>
                <select id="category" className='userInput' value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option className="option" value="">Select...</option>
                    <option className="option" value="Programming">Programming</option>
                    <option className="option" value="Miscellaneous">Miscellaneous</option>
                    <option className="option" value="Pun">Pun</option>
                </select>
            </div>
            <Button variant="secondary" onClick={fetchJoke} >Fetch Joke</Button>
            <div className='jokesList'>
                {jokes.length > 0 && (
                    <div>
                        <h3>Jokes List</h3>
                        {renderTable()}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Jokes;
