import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Header from '../components/Header/Header';
import HomePage from '../pages/home/HomePage';
import ColPage from '../pages/collection/ColPage';
import ProfilePage from '../pages/profile/ProfilePage';
import Navbar from '../components/Navbar/Navbar';
import MainSearch from '../components/MainSearch/MainSearch';
import { useState, useEffect } from 'react';
import ProductPage from '../pages/product/ProductPage';
import Nots from '../components/Nots/Nots';
import Reg from '../components/Reg/Reg';
import Auth from '../components/Auth/Auth';
import { useLocation } from 'react-router-dom';
import ResultPage from '../pages/result/ResultPage';

const App = () => {
    const location = useLocation();
    const [search, setSearch] = useState(false)
    const [nots, setNots] = useState(false)
    const [reg, setReg] = useState(false)
    const [auth, setAuth] = useState(false)


    const openReg = () => setReg(true)
    const closeReg = () => setReg(false)
    const openAuth = () => setAuth(true)
    const closeAuth = () => setAuth(false)

    const openNots = () => {
        setNots(true)
    }

    const closeNots = () => {
        setNots(false)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])


    return (
        <div className="App">
            <Auth
                open={auth}
                close={closeAuth}
                toggle={openReg}
                />
            <Reg
                open={reg}
                close={closeReg}
                toggle={openAuth}
                />
            <Header openAuth={openAuth} openNots={openNots}/>
            <div className={"ms-wrap" + (search ? ' show ' : '')}>
                <MainSearch focus={search} closeSearch={setSearch}/>
            </div>
            <main className="main">
                <Routes>
                    <Route element={<HomePage/>} path={'/'}/>
                    <Route element={<ColPage/>} path={'/collection/:collection'}/>
                    <Route element={<ProfilePage/>} path={'/profile'}/>
                    <Route element={<ProductPage/>} path={'/product/:productName'}/>
                    <Route element={<ResultPage/>} path={'/search-result'}/>
                </Routes>
            </main>
            <Navbar
                search={search}
                toggleSearch={setSearch}
                openNots={openNots}
                openAuth={openAuth}
                />
            <Nots
                open={nots}
                close={closeNots}
                
                />
        </div>
    )
}

export default App;