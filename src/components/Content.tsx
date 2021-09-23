import { MovieCard } from "./MovieCard";


interface MovieProps {
  movie: Array<{
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: Array<{
      Source: string;
      Value: string;
    }>;
    Runtime: string;
  }>;
  selectedGenreTitle: string;
}

export function Content({movie, selectedGenreTitle}: MovieProps) {
  // Complete aqui
  return(
    <div className="container">
        <header>
          <span className="category">Categoria:<span> {selectedGenreTitle}</span></span>
        </header>

        <main>
          <div className="movies-list">
            {movie.map(movie => (
              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
    </div>
  )
}
