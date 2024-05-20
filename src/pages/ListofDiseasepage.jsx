import Header from "../components/MainHeader/header";
import Footer from "../components/MainFooter/footer";
import DiseaseList from "../components/ListOfDisease/listofdisease";

export default function ListOfDiseasePage() {
  return (
    <div className="Main">
      <Header />
      <DiseaseList />
      <Footer />
    </div>
  );
}
