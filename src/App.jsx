import './App.css';
import CompaniesTable from './pages/CompaniesTable';
import LogCard from './pages/UserLoginRegistration';
import CreatePolicyForm from './pages/CreatePolicyForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className="Main">
      <BrowserRouter>
        <Routes>
          <Route path='/create' element={<CreatePolicyForm />} />
          <Route path='/' element={<LogCard />} />
          <Route path='/companies' element={<CompaniesTable />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

