import './App.css';
import CompaniesTable from './pages/CompaniesTable';
import LogCard from './pages/UserLoginRegistration';
import CreatePolicyForm from './pages/CreatePolicyForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SelectInputWithModal from './components/CreatePolicy/test';


export default function App() {
  return (
    <div className="Main">
      <BrowserRouter>
        <Routes>
          <Route path='/companies' element={<CompaniesTable />} />
          <Route path='/create' element={<CreatePolicyForm />} />
          <Route path='/test' element={<SelectInputWithModal />} />

          <Route path='/' element={<LogCard />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

