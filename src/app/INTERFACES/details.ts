// Define la interfaz que representa la estructura de los detalles de una película
export interface MovieDetails {
    backdrop_path: string;
    poster_path: string;
    title: string;
    overview: string;
    genres: { id: number; name: string }[];
    spoken_languages: { english_name: string; name: string }[];
    budget: number;
    production_companies: { id: number; logo_path: string; name: string; origin_country: string }[];
    
  }
