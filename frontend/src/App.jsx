import Router from "./components/navigation/Router"
import NavBar from "./components/globals/NavBar"
import Footer from "./components/globals/Footer"

function App() {
  return (
    <div className="app">
      <NavBar />
      <Router />
      <Footer />
    </div>
  )
}

export default App
