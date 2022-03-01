import '././App';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Bonus from '../components/Blog/Blog';
import Posts from '../components/Posts/Posts';
import Post from '../components/Post/Post';
import Home from '../pages/Home';
import Navigation from '../components/Navigation/Navigation';
import Projects from '../components/AboutUs/AboutUs';
import Footer from '../components/Footer/Footer';
import NotFound from '../pages/NotFound';
import Main from '../pages/Main';





function App() {
  return (
    <div className="App">
      <Main>
      <Router>

        <Navigation />

        <Routes>
          
          <Route path="/" element={<Home />} />
          
          <Route path="/projects" element={<Projects />} />
          <Route path="/bonus" element={<Bonus />}>
            <Route path="" element={<Posts />} />
            <Route path=":postSlug" element={<Post />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
      </Main>
    </div>
  );
}

export default App;
