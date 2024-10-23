import { useState } from "react";
import "./App.css";

function App() {
  const [photo, setPhoto] = useState();

  function fetchPembroke() {
    const doFetchPembroke = async () => {
      await fetch("https://dog.ceo/api/breed/pembroke/images/random")
        .then((result) => {
          return result.json();
        })
        .then((data) => {
          setPhoto(data.message);
        });
    };

    doFetchPembroke();
  }

  function fetchCardigan() {
    const doFetchCardigan = async () => {
      await fetch("https://dog.ceo/api/breed/corgi/cardigan/images/random")
        .then((result) => {
          return result.json();
        })
        .then((data) => {
          setPhoto(data.message);
        });
    };

    doFetchCardigan();
  }

  function fetchDog() {
    const doFetchDog = async () => {
      await fetch("https://dog.ceo/api/breeds/image/random")
        .then((result) => {
          return result.json();
        })
        .then((data) => {
          setPhoto(data.message);
        });
    };

    doFetchDog();
  }

  return (
    <div className="top-container">
      <div>
        <img className="corgiImg" src={photo} />
      </div>
      <div className="btn-container">
        <div>
          <button className="corgiBtn" onClick={fetchPembroke}>
            I want a new PEMBROKE WELSH CORGI!!!
          </button>
        </div>
        <div>
          <button className="corgiBtn" onClick={fetchCardigan}>
            I want a new CARDIGAN CORGI!!!
          </button>
        </div>
        <div>
          <button className="corgiBtn" onClick={fetchDog}>
            Surprise dog
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
