import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home.jsx';
import QuemSomos from './pages/QuemSomos/QuemSomos.jsx';
import FaleConosco from './pages/FaleConosco/FaleConosco.jsx';
import ScrollToTop from './ScrollToTop.jsx';

const RoutesConfig = () => {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Quem-Somos" element={<QuemSomos />} />
                <Route path="/Fale-Conosco" element={<FaleConosco />} />
            </Routes>
        </Router>
    );
};

export default RoutesConfig;