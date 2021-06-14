import React from "react";


function App() {
  return (
    <section>
      <form>
            <input type="text" placeholder="Titulo"></input>
            <textarea placeholder="Escreva sua nota..."></textarea>
            <button> Criar Nota </button>
      </form>
      <ul>
        <li>
            <section> 
              <header>
                <h3>
                  Título
                </h3>
                <p>
                  Escreva sua nota
                </p>
              </header>
            </section>
        </li>
      </ul>
    </section>
   
  );
}

export default App;
