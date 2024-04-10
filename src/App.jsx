import './App.css';
import CompaniesTable from './pages/CompaniesTable';
import LogCard from './pages/UserLoginRegistration';
import CreatePolicyForm from './pages/CreatePolicyForm';
import ListOfMedicine from './pages/ListofmedicinePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className="Main">
      <BrowserRouter>
        <Routes>
          <Route path='/create' element={<CreatePolicyForm />} />
          <Route path='/' element={<LogCard />} />
          <Route path='/companies' element={<CompaniesTable />} />
          <Route path='/listofmedicine' element={<ListOfMedicine />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

