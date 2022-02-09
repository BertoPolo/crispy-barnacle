import "./App.css"
import WarningSign from "./components/WarningSign"
import MyBadge from "./components/MyBadge"

function App() {
  return (
    <>
      <WarningSign message="Danger Alert"></WarningSign>
      <MyBadge string="test123" color="primary"></MyBadge>
    </>
  )
}

export default App
