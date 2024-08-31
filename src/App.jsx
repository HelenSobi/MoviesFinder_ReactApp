import { Outlet }from 'react-router-dom';
import Header from "./components/Header";
import Footer from './components/Footer';
import useNowPlayingMovies from "./hooks/useNowPlayingMovies";
import useUpcomingMovies from "./hooks/useUpcomingMovies";
import useTopRatedMovies from "./hooks/useTopRatedMovies";
import UpcomingMovies from "./components/UpcomingMovies";
function App() {
  useNowPlayingMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  UpcomingMovies();
  return (
    <>

    <Header/>
    <Outlet/>
    <Footer/>
    </>  
  )
}

export default App;
