import React, { useState } from "react"
import Counter from "./Counter"
import CounterHooks from "./CounterHooks"

export const ThemeContext = React.createContext()

function App() {
  const [theme, setTheme] = useState("red")
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      <h1>Counter Class</h1>
      <Counter initialCounter={0} />
      <h1>Counter Hooks</h1>
      <CounterHooks initialCounter={0} />
      <button onClick={() => setTheme(prevTheme => {
        return prevTheme == "red" ? "blue" : "red"
      })}>Toggle button</button>
    </ThemeContext.Provider>
  )
}

export default App