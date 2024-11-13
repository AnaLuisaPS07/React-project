import React, { useState } from "react";
import "./style.css";

function App() {
  const [isRandomButtonHovered, setRandomButtonHovered] = useState(false);
  const [isBottomButtonHovered, setBottomButtonHovered] = useState(null);

  const handleRandomClick = () => {
    alert("Botão de Recomendação Aleatória clicado!");
  };

  return (
    <div className="container">
      <header className="header">KlimaX</header>
      <main className="main-content">
        <h1 className="title">Recomendação Aleatória</h1>
        <p className="description">
          Sem ideias do que assistir? Aperte o botão e deixe a escolha com a
          gente!
        </p>
        <button
          className={`random-button ${isRandomButtonHovered ? "hover" : ""}`}
          onMouseEnter={() => setRandomButtonHovered(true)}
          onMouseLeave={() => setRandomButtonHovered(false)}
          onClick={handleRandomClick}
        >
          Recomendação Aleatória
        </button>
      </main>
      <footer className="footer">
        <button
          className={`bottom-button ${
            isBottomButtonHovered === "left" ? "hover" : ""
          }`}
          onMouseEnter={() => setBottomButtonHovered("left")}
          onMouseLeave={() => setBottomButtonHovered(null)}
        ></button>
        <button
          className={`bottom-button ${
            isBottomButtonHovered === "right" ? "hover" : ""
          }`}
          onMouseEnter={() => setBottomButtonHovered("right")}
          onMouseLeave={() => setBottomButtonHovered(null)}
        ></button>
      </footer>
    </div>
  );
}

export default App;

