
import './App.css';

function MAIN(props) {
  return (
    < header >
      <h1>SAMPLE APP by {props.name}</h1>
    </header >
  )
}

function CONTENT() {
  return (
    < section >
      <h2>How react works</h2>
    </section >
  )
}

function FOOTER(props) {
  return (
    <footer>
      <h3>passion to learn new features and techologies </h3>
      <p> Copyright {props.year}</p>
    </footer>
  );
}
function App() {
  return (
    <div className="App">
      <MAIN name="Prassanna S" />
      <CONTENT />
      <FOOTER year={new Date().getFullYear()} />


    </div>
  );
}

export default App;
