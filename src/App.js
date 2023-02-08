import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from "./components/Banner";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { AboutMe } from './components/AboutMe';

function App() {
  return (
    <div className="App">
      <Banner />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
