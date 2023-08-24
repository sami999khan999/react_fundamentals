import Hello from "./components/FunctionalComponent";
import HelloAgain from "./components/ClassComponent";
import Counter from "./components/Counter";
import PropsDrilling from "./components/PropsDrilling";

function App() {
  return (
    <div>
      <Hello />
      <HelloAgain />
      <Counter />
      <PropsDrilling name="Luffi" birthYear={2003} />
      <PropsDrilling name="Zoro" birthYear={2001} />
      <PropsDrilling name="Sanji" birthYear={2001} />
      <PropsDrilling name="Usapp" birthYear={2003} />
    </div>
  );
}

export default App;
