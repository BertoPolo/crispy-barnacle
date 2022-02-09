import "./App.css"
import WarningSign from "./components/WarningSign"
import MyBadge from "./components/MyBadge"
import SingleBook from "./components/SingleBook"

function App() {
  return (
    <>
      <WarningSign message="Danger Alert"></WarningSign>
      <MyBadge string="test123" color="primary"></MyBadge>
      <SingleBook></SingleBook>
    </>
  )
}

export default App
