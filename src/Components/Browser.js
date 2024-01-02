
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import Header from './Header';
import MainContainer from './MainContainer';
import { SecondaryContainer } from './SecondaryContainer';

 const Browser = () => { 

  useNowPlayingMovies();
  return (
    <div>
      
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
      </div>
  );
};

export default Browser;