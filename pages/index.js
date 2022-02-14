import Footer from "../components/Footer"
import Home from "../components/Home"
import Nav from "../components/Nav"
import Head from "next/head"

const Index = () => (
  <>
    <Head>
        <title>Health Explore</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Nav />
    <Home />
    <Footer />
  </>
)
export default Index
