import useCustomPointer from "./hooks/useCustomPointer";

function App() {

  const CustomPointer = useCustomPointer("🔥");

  return (
    <div>
      <h1>Muovi il mouse per vedere il puntatore custom</h1>
      {CustomPointer}
    </div>
  )
}

export default App
