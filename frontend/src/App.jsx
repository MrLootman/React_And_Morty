import Router from "./components/navigation/Router"
import NavBar from "./components/globals/NavBar"
import { UserProvider } from "./components/contexts/UserContext"

function App() {
  return (
    <div className="app">
      <UserProvider>
        <NavBar />
        <Router />
      </UserProvider>
    </div>
  )
}

export default App
