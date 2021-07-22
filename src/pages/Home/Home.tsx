import { FC, useEffect } from "react";
import { getMoviesByTitles } from "api";
import AppBar from "components/AppBar";

const Home: FC = () => {
  useEffect(() => {
    // this code is just for testing
    async function fetchMyAPI() {
      let response = await getMoviesByTitles("sin");
      console.log(response.data.results);
    }

    fetchMyAPI();
  }, []);
  return <AppBar />;
};

export default Home;
