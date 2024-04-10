import Header from '../components/MainHeader/header';
import Footer from '../components/MainFooter/footer';
import MedicineList from '../components/ListOfMedicine/listofmedicine';


export default function ListOfMedicinePage() {
    return (
        <div className="Main">
            <Header />
            <MedicineList />
            <Footer />
        </div>
    )
}

