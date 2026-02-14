import "./MoviesList.css";

const MovieList = ({ movies, actors, onAddMovie, onAddActor, onDelete, onDeleteActor }) => 
	{ 
		return ( 
			<div className="movie-list"> 
			<h2>Movies</h2>
			<ul>
				{movies.map((movie) => ( 
					<li key={movie.id}> 
						{movie.name} 
						({movie.year}) 
					<button onClick={() => onDelete(movie.id)}>Delete</button>
					</li> 
					)
				)}
			</ul> 
				<button onClick={() => onAddMovie()}>Add Movie</button>
			<h2>Actors</h2>
			<ul>
				{actors.map((actor) => ( 
					<li key={actor.id}> 
						{actor.name} 
					<button onClick={() => onDeleteActor(actor.id)}>Delete</button>
					</li> 
					)
				)}
			</ul> 
				<button onClick={() => onAddActor()}>Add Actor</button>
			</div> 
			); 
		}; 

export default MovieList; 
