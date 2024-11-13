import React from "react";
import "./style.css";

function App() {
  const simboloUrl =
    "https://raw.githubusercontent.com/AnaLuisaPS07/React-project/1fc1765c503e88a852240191a78859a0d91b52c9/src/shuffle_3580337%20(1).png";

  return (
    <div className="container">
      <header className="header">KlimaX</header>
      <main className="main-content">
        <h1 className="title">Recomendação Aleatória</h1>
        <img src={simboloUrl} alt="Símbolo" className="symbol-image" />
        <p className="description">
          Sem ideias do que assistir? Aperte o botão e deixe a escolha com a
          gente!
        </p>
        <button
          className="random-button"
          onClick={() => alert("Botão de Recomendação Aleatória clicado!")}
        >
          Recomendação Aleatória
        </button>
      </main>
      <footer className="footer">
        <button className="bottom-button">
          <img src={simboloUrl} alt="Símbolo" className="symbol-image" />
        </button>
        <button className="bottom-button">
          <img src={simboloUrl} alt="Símbolo" className="symbol-image" />
        </button>
      </footer>
    </div>
  );
}

export default App;
