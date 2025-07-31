import useSwitch from "./hooks/useSwitch"

function App() {

  const [isOn, toggle] = useSwitch();

  return (
    <div>
      <h1>Il valore è : {isOn ? `true` : `false`}</h1>
      <button onClick={toggle}>{isOn ? `OFF` : `ON`}</button>
    </div>
  )
}

export default App
