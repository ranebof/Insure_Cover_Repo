import './App.css';
import Header from './components/MainHeader/header';
import Footer from './components/MainFooter/footer';
import Card from './components/LoginCard/logcard';

export default function App() {
  return (
    <div className="Main">
      <Header />
      <Card />
      <Footer />
    </div>
  )
}

