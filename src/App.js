import "core-js/stable";
import "regexp-polyfill";
import React from 'react';
import './App.css';
import { LoginForm } from "./pages/loginForm";

function App() {
  return (
    <div className="App">
      <LoginForm />
    </div>
  );
}

export default App;
