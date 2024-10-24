import './App.css';
import Header from "./Components/Header.tsx";
import FlexContainer from './Components/FlexContainer.tsx';
import Footer from './Components/Footer.tsx';

function App() {
  return (
    <>
      <Header />
      <FlexContainer />
      <Footer 
        footerTxt="“När man skjuter upp det man måste göra, riskerar man att aldrig kunna göra det.”" 
        footerAuthor="Charles Baudelaire" 
      />
    </>
  );
}

export default App;



