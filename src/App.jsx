import './App.css';
import Header from './components/MainHeader/header';
import Footer from './components/MainFooter/footer';
import LogCard from './components/LoginCard/logcard';
import Table from './components/CompaniesTable/table';
// import RegCard from './components/RegisterCard/regcard';
import { BrowserRouter, Routes, Router, Route } from 'react-router-dom';


export default function App() {
  return (
    <div className="Main">
      <BrowserRouter>
        <Routes>
        {/* <Header />
          
          <Table />
          <Footer /> */}
        <Route path='/logincard' element={<LogCard />} />
          
        </Routes> 
      </BrowserRouter>
    </div>
  )
}

