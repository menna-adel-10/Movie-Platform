import { ReactNode, createContext, useReducer } from "react"
import { MovieDataType, moviesData } from "../assets/data"

interface MovieContextProps {
    children: ReactNode
}

interface MovieState {
    movies: MovieDataType[];
}

interface MovieAction {
    type: string,
    id: string
}

const MovieList: MovieDataType[] = moviesData;

const initialMovieState: MovieState = {
    movies: MovieList
};

const MovieReducer = (state: MovieState, action: MovieAction): MovieState => {
    switch (action.type) {
        case "TOGGLE BOOKMARK":
            return {
                ...state,
                movies: state.movies.map((movies) => {
                    if (movies.id === action.id) {
                        return { ...movies, isBookmarked: !movies.isBookmarked };
                    }
                    return movies;
                }),
            };
        default:
            return state;
            
    }
}

export const MovieContext = createContext<{
    state: MovieState,
    dispatch: React.Dispatch<MovieAction>
}>({
    state: initialMovieState,
    dispatch: () => {}
})

export const MovieProvider = ({ children }: MovieContextProps) => {
    const [state, dispatch] = useReducer(MovieReducer, initialMovieState);
    return (
        <MovieContext.Provider value={{ state, dispatch }}>
            {children}
        </MovieContext.Provider> 

    )
}