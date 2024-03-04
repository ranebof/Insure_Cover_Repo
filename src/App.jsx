import './App.css';
import CompaniesTable from './pages/CompaniesTable';
import UserLoginRegistration from './pages/UserLoginRegistration';

export default function App() {
  return (
    <div className="Main">
      <CompaniesTable />
      <UserLoginRegistration />
    </div>
  )
}

