import { MovieCard } from "./MovieCard";


interface MovieProps {
  movies:{
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: Array<{
      Source: string;
      Value: string;
    }>;
    Runtime: string;
  };
  genreTitle: string;
}

export function Content({movies, genreTitle}: MovieProps) {
  // Complete aqui
  return(
    <div className="container">
    <header>
      <span className="category">Categoria:<span> {genreTitle}</span></span>
    </header>

    <main>
      <div className="movies-list">
        {movies.map(movie => (
          <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
        ))}
      </div>
    </main>
  </div>
  )
}
