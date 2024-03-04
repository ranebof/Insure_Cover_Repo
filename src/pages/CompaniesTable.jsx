import Header from './components/MainHeader/header';
import Footer from './components/MainFooter/footer';
import Table from './components/CompaniesTable/table';


export default function CompaniesTable() {
    return (
        <div className="Main">
            <Header />
            <Table />
            <Footer />
        </div>
    )
}

