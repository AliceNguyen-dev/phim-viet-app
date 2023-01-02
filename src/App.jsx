import Navbar from "./navbar/Navbar"
import Serie from "./pages/Serie"
import Film from "./pages/Film"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Home from "./pages/Home"


import Serie01 from "./pages/Serie01"
import Serie02 from "./series/Serie02"
import Serie03 from "./series/Serie03"
import Serie04 from "./series/Serie04"
import Serie05 from "./series/Serie05"
import Serie06 from "./series/Serie06"
import Serie07 from "./series/Serie07"
import Serie08 from "./series/Serie08"
import Serie09 from "./series/Serie09"

import Movie01 from "./movies/Movie01"

function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break;
    case "/serie":
      component = <Serie />
      break;
    case "/about":
      component = <About />
      break;
    case "/film":
      component = <Film />
      break;
    case "/serie01":
      component = <Serie01 />
      break;
    case "/serie02":
      component = <Serie02 />
      break;
    case "/serie03":
      component = <Serie03 />
      break;
    case "/serie04":
      component = <Serie04 />
      break;
    case "/serie05":
      component = <Serie05 />
      break;
    case "/serie06":
      component = <Serie06 />
      break;
    case "/serie07":
      component = <Serie07 />
      break;
    case "/serie08":
      component = <Serie08 />
      break;
    case "/serie09":
      component = <Serie09 />
      break;
    case "/movie01":
      component = <Movie01 />
      break;

  }
  return (
    <>
      <Navbar />
      {component}
    </>
  );
}

export default App;
