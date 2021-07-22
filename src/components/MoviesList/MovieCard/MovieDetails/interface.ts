export interface IMovieDetails {
  title: string;
  image: string;
  actorList: Actors[];
  ratings:{
    imDb: string,
    rottenTomatoes: string,
    theMovieDb: string
  }
}

interface Actors {
  asCharacter: string;
  id: string;
  image: string;
  name: string;
}

