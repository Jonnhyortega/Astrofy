import Routes from "./routes/Routes";
import Footer from "./components/Footer/Footer";
import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navbar/Navbar";
import { CallToAction } from "./components/WhatSappCalltoAction/CallToAction";
import { GlobalStyles } from "./styles/GlobalStyles";
function App() {
  return (
    <Layout>
      <GlobalStyles />
      <Navbar />
      <Routes />
      <Footer />
      <CallToAction />
    </Layout>
  );
}

export default App;
