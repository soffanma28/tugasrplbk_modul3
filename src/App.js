import React from "react";
import "./App.css";
import TicTacToe from "./components/TicTacToe";

function App() {
  return (
    <div className="App">
      <div className='kelompok'>
        <h3>Tugas Modul 2 - Kelompok 29</h3>
          <h5>Rizaldy Imam Khadafi - 21120119140119</h5>
          <h5>Kevin Ryo Pratama - 21120119130098</h5>
          <h5>Soffan Marsus Ahmad - 21120119130042</h5>
      </div>
      <div>
      <TicTacToe />
      </div>
    </div>
  );
}

export default App;