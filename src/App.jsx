import useDate from "./hooks/useDate";

function App() {

  const currentDate = useDate();

  return (
    <div>
      <h1>Data e ora Attuali:</h1>
      <p>{currentDate.toLocaleString()}</p>
    </div>
  )
}

export default App
