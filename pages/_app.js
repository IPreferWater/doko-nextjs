
import '../styles/index.css'
import Layout from "../components/layout";
import '@brainhubeu/react-carousel/lib/style.css';
import 'leaflet/dist/leaflet.css'
export default function MyApp({ Component, pageProps }) {
  return <Layout>
    <Component {...pageProps} />
  </Layout>
}
