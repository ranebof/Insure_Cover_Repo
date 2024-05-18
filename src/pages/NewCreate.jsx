import NewCreatePolicyForm from "../components/NewCreatePolicyForm/NewCreatePolicyForm";
import Header from "../components/MainHeader/header";
import Footer from "../components/MainFooter/footer";

export default function NewCreate() {
    return (
        <div className="Main">
            <Header/>
            <NewCreatePolicyForm/>
            <Footer/>
        </div>
    )
}
