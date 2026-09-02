import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
export default function App() { return <><div className="noise" /><Navbar /><main><Hero /><About /><Projects /><section className="credentials section"><p className="section-label">03 / CREDENTIALS</p><div className="credential-list"><a href="https://certificates.ccbp.in/intensive/react-js?id=LDABCAHRSK" target="_blank"><span>01</span><strong>React JS Certification</strong><em>View certificate ↗</em></a><a href="https://certificates.ccbp.in/intensive/node-js?id=MBEGLIXKBQ" target="_blank"><span>02</span><strong>Node JS Certification</strong><em>View certificate ↗</em></a></div></section><Contact /></main><footer>© 2026 TEJA GANDAMALA <span>DESIGNED &amp; BUILT WITH INTENT</span></footer></>; }
