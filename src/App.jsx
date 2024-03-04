import './App.css';
import Header from './components/MainHeader/header';
import Footer from './components/MainFooter/footer';
import CompaniesTable from './pages/CompaniesTable';
import LogCard from './pages/UserLoginRegistration';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


export default function App() {
  return (
    <div className="Main">
      <BrowserRouter>
        <Routes>
          <Route path='/companies' element={<CompaniesTable />} />
          <Route path='/login' element={<LogCard />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

