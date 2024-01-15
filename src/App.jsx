import './App.css';
import Header from './components/MainHeader/header';
import Footer from './components/MainFooter/footer';
import LogCard from './components/LoginCard/logcard';
import RegCard from './components/RegisterCard/regcard';


export default function App() {
  return (
    <div className="Main">
      <Header />
      <LogCard />
      <Footer />
    </div>
  )
}

