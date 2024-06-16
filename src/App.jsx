import "./App.css";
import CompaniesTable from "./pages/CompaniesTable";
import LogCard from "./pages/UserLoginRegistration";
import ListOfMedicine from "./pages/ListofmedicinePage";
import NewCreate from "./pages/NewCreate";
import LastCreate from "./pages/CreatePolicyLastPage";
import ListOfDisease from "./pages/ListofDiseasepage";
import SavedPolicyPage from "./pages/SavedPolicyPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="Main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogCard />} />
          <Route path="/companies" element={<CompaniesTable />} />
          <Route path="/disease" element={<ListOfDisease />} />
          <Route path="/medicine" element={<ListOfMedicine />} />

          <Route path="/newpolicy" element={<NewCreate />} />
          <Route path="/lastpolicy" element={<LastCreate />} />

          <Route path="/saved" element={<SavedPolicyPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
