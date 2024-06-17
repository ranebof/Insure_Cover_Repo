import Header from "../components/MainHeader/header";
import Footer from "../components/MainFooter/footer";
import LogCard from "../components/LoginCard/logcard";

export default function UserLoginRegistration() {
  return (
    <div
      className="Main"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {/* <RegCard /> */}
      <LogCard />
      <Footer />
    </div>
  );
}
