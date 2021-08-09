
import './App.css';

function MAIN(props) {
  return (
    < header >
      <h1>SAMPLE APP by {props.name}</h1>
    </header >
  )
}

function CONTENT(props) {
  return (
    < section >
      <h2>How Web  works</h2>
      <ul style={{ textAlign: 'left' }}>
        {
          props.learn.map((item) => <li key={item.id}>{item.name}</li>)
        }
      </ul>
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

const toLearn = [
  'JS',
  'React',
  'CSS'
];

const techStack = toLearn.map((item, i) => ({ id: i + item, name: item }));

function App() {
  return (
    <div className="App">
      <MAIN name="Prassanna S" />
      <CONTENT learn={techStack} />
      <FOOTER year={new Date().getFullYear()} />


    </div>
  );
}

export default App;
