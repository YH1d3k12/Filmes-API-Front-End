import React, { useEffect, useState } from "react";

import Requester from "../data/requester.js";


export default function DashboardScreen() {
    // Defines movieData as an empty array.
    // setMovieData is a method which changes the value of movieData.
    const [movieData, setMovieData] = useState([]);

    // When the component is loaded useEffect is executed.
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await Requester("get", "?page=0&size=10", null, (response) => {
                    return response.data;
                });

                console.log("Data", data)

                // Check if data.content is an array before setting the state.
                if (Array.isArray(data.content)) {
                    // console.log("Its an array:", data.content);
                    setMovieData(data.content);
                } 
                else {
                    // console.error("Its not an array:", data);
                }

                // setMovieData(data.content);
            } catch (error) {
                console.error("Error fetching data:", error);
                throw new Error(error);
            }
        };
        // Calls fetchData when fully loaded.
        fetchData();
    // Second parameter of useEffect is a dependency list, if empty, the method is executed once.
    // If given dependencies, useEffect is executed every time a value is changed.
    }, []); 

    return (
        <div className="dashboardScreen">
            <h2>Filmes:</h2>
            {movieData && (
                <ul>{movieData.map(movie => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
                </ul>
            )}
        </div>
    );
};