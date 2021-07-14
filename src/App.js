import './App.css';
import Header from './components/Header/Header';
import ProfileImage from './components/ProfileImage/ProfileImage';
import MyProject from './components/MyProjects/MyProjects';
import Attention from './components/Attention/Attention';
import Footer from './components/Footer/Footer'
function App() {
  return (
    <section>
      <Header></Header>
      <ProfileImage></ProfileImage>
      <MyProject></MyProject>
      <Attention></Attention>
      <Footer></Footer>
    </section>
  );
}

export default App;
