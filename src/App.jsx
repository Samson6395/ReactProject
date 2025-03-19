import HeaderComponent from "./Components/Header/Header.jsx";
import CoreConcepts from "./Components/CoreConcepts/CoreConcepts.jsx";
import Button from "./Components/MenuButtons/Button.jsx";
import { CORE_CONCEPTS } from "./data.js";
import { useState } from "react";

function App() {
  const [selectedButton, setSelectedButton] = useState(null);

  function handleClick(selectedButton) {
    setSelectedButton(selectedButton);
    console.log(selectedButton);
  }

  return (
    <div>
      <HeaderComponent />
      <main>
        <section id="core-concepts">
          <h2> Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((coreConcept, index) => (
              <CoreConcepts key={index} {...coreConcept} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <Button onButtonClick={() => handleClick("Component")}>
              Component
            </Button>
            <Button onButtonClick={() => handleClick("Props")}>Props</Button>
            <Button onButtonClick={() => handleClick("JSX")}>JSX</Button>
            <Button onButtonClick={() => handleClick("State")}>State</Button>
          </menu>
        </section>
        {selectedButton}
      </main>
    </div>
  );
}

export default App;
