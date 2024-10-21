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



/*
<body>
<div class="container">
<div class="to-do">
    <h1>Lindas TO-DO list</h1>
    <div class="row">
        <input type="text" id="input-box" placeholder="Mer som ska göras"/>
        <p id="error-message" style="color: red; display: none;">Skriv din nya uppgift!</p>
        <button>Lägg till</button>
    </div>
    <ul id="list">
        <li role="img" aria-label="Unchecked item">Item 1 <span>&times;</span></li>
        <li role="img" aria-label="Checked item" class="checked">Item 2 <span>&times;</span></li>
    </ul>
</div> 
<footer>
    <h2>“När man skjuter upp det man måste göra, riskerar man 
    att aldrig kunna göra det.”</h2>
    <h3>Charles Baudelaire</h3>
</footer>
</div>
</body> */