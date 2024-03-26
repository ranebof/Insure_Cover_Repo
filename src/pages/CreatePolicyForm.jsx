import CreatePolicy from "../components/CreatePolicy/createPolicy"
import Header from '../components/MainHeader/header';
import Footer from '../components/MainFooter/footer';

export default function CreatePolicyForm() {
    return (
        <div className="Main">
            <Header />
            <CreatePolicy />
            <Footer />
        </div>
    )
}

