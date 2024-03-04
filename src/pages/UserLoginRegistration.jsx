import Header from '../components/MainHeader/header';
import Footer from '../components/MainFooter/footer';
import LogCard from '../components/LoginCard/logcard';
import RegCard from '../components/RegisterCard/regcard';


export default function UserLoginRegistration() {
    return (
        <div className="Main">
            <Header />
            {/* <RegCard /> */}
            <LogCard />
            <Footer />
        </div>
    )
}

