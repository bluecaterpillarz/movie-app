import { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";

// pure function to add a new movie 
const addMovie = (movieList, movie) => [...movieList, movie];
const addActor = (actorList,actor) =>[...actorList,actor];

// pure function to delete a movie 
const deleteMovie = (movieList, id) => 
	movieList.filter((movie) => movie.id !== id);
const deleteActor=(actorList,id) =>
	actorList.filter((actor) => actor.id !==id);

// define an array of initial movies 
const initialMovies = [ 
	{ id: 1, name: "Wizard of Oz", year: 1939 }
	, { id: 2, name: "The Matrix", year: 1999 }
	,]
	;
const arrayActor = [
	{id:1, name: "Leonardo DiCaprio"},
];

const App = () => {
// state variable, setter, and initial value for movies 

const [movies, setMovies] = useState(initialMovies);
const [actors, setActors] = useState(arrayActor);

// event handler that uses a pure function to add a movie 

const handleAddMovie = () => 
	setMovies(
				addMovie(movies, { id: 3, name: "Inception", year: 2010 }) 
			);
const handleAddActor =()=>
	setActors(
		addActor(actors,{id:2,name:"Jeremy Pope"})
	);

// event handler that uses a pure function to delete a movie 
const handleDeleteMovie = (id) => 
	setMovies(deleteMovie(movies, id));
const handleDeleteActor =(id) =>
	setActors(deleteActor(actors,id));


// return JSX for the App component 
	return ( 
		<div className="container"> 
			<header className="header"> 
				<h1>My Movies</h1>
			</header> 
			<main className="main-content"> 
				<MovieList 
					movies={movies} 
					actors={actors}
					onAddMovie={handleAddMovie} 
					onAddActor={handleAddActor}
					onDelete={handleDeleteMovie}
					onDeleteActor={handleDeleteActor}
				/>
			</main> 
			<footer className="footer"> 
				<p>© My Movies. All rights reserved.</p>
			</footer> 
		</div> 
		); 

	}; 

export default App;


