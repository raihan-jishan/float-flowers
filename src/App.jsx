import Hero from "./components/Hero";
import Navbar from "./components/shared/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero /> 
      <h1 className="text-5xl mt-24">
      hello world
    </h1>
    </div>
  )
}
export default App;