import useKeyPress from "./hooks/useKeyPress"

function App() {

  const isEnterPressed = useKeyPress('Enter');

  return (
    <div>
      <h1>Premi "Enter" per testare il custom hooks</h1>
      <p>{isEnterPressed ? "Enter premuto!" : "Aspettando input..."}</p>
    </div>
  )
}

export default App
