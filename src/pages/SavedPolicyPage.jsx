import SavedPolicy from "../components/SavedPolicies/SavedPolicy";
import Header from "../components/MainHeader/header";
import Footer from "../components/MainFooter/footer";

export default function NewCreate() {
  return (
    <div className="Main">
      <Header />
      <SavedPolicy />
      <Footer />
    </div>
  );
}
