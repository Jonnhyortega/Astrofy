import Routes from "./routes/Routes";
import Footer from "./components/Footer/Footer";
import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/CartComponent";

function App() {
  return (
    <Layout>
      <Navbar />
      <Routes />
      <Cart />
      <Footer />
    </Layout>
  );
}

export default App;
