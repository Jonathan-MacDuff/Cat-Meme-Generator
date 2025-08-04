import React, {useState} from 'react';
import './App.css';
import CatCard from './components/CatCard';

function App() {

    const [cats, setCats] = useState([]);

  const getCatImg = async () => {
    const resp = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
    const json = await resp.json();
    return json[Math.floor(Math.random() * 10)].url;
  };

  const getNiceQuote = async () => {
    const resp = await fetch("http://localhost:5000/api/affirmation");
    const json = await resp.json();
    return json.affirmation;
  };

  const getBadassQuote = async () => {
    const resp = await fetch("http://localhost:5000/api/badass");
    const json = await resp.json();
    return json.quote;
  };

  const getMeanQuote = async () => {
    const resp = await fetch("http://localhost:5000/api/insult");
    const json = await resp.json();
    return json.insult;
  };

  const handleNiceCat = async () => {
    try {
      const imgUrl = await getCatImg();
      const quote = await getNiceQuote();
      const newCat = {
        imgUrl,
        quote,
        type: 'nice'
      };
      setCats(prev => [newCat, ...prev]);
    } catch (err) {
      console.error("Error generating nice cat:", err);
    }
  };

  const handleBadassCat = async () => {
    try {
      const imgUrl = await getCatImg();
      const quote = await getBadassQuote();
      const newCat = {
        imgUrl,
        quote,
        type: 'badass'
      };
      setCats(prev => [newCat, ...prev]);
    } catch (err) {
      console.error("Error generating badass cat:", err);
    }
  };

  const handleMeanCat = async () => {
    try {
      const imgUrl = await getCatImg();
      const quote = await getMeanQuote();
      const newCat = {
        imgUrl,
        quote,
        type: 'mean'
      };
      setCats(prev => [newCat, ...prev]);
    } catch (err) {
      console.error("Error generating mean cat:", err);
    }
  };

  return (
    <div className="app-container">
      <header>
        <h1>Cat Meme Generator</h1>
      </header>
      <main>
        <div className="button-group">
          <button onClick={handleNiceCat} id="nice-cat-button" className="cat-button">Nice Cat</button>
          <button onClick={handleBadassCat} id="badass-cat-button" className="cat-button">Badass Cat</button>
          <button onClick={handleMeanCat} id="mean-cat-button" className="cat-button">Mean Cat</button>
        </div>
        <div id="cat-container" className="cat-container">
        {cats.map((cat, index) => (
          <CatCard key={index} imgUrl={cat.imgUrl} quote={cat.quote} type={cat.type} />
        ))}
        </div>
      </main>
    </div>
  );
}

export default App;
