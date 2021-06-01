import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import MyJumbotrom from './components/MyJumbotron'
import MyJumbotron from './components/MyJumbotron';

function App() {
  return (
    <div>
      <MyNav />
      <MyJumbotron />
      <MyFooter />
    </div>
  )
}

export default App;
