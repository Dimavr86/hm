import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Header from '../components/Header/Header';
import HomePage from '../pages/home/HomePage';
import ColPage from '../pages/collection/ColPage';
import ProfilePage from '../pages/profile/ProfilePage';
import Navbar from '../components/Navbar/Navbar';
import MainSearch from '../components/MainSearch/MainSearch';
import { useState } from 'react';
import ProductPage from '../pages/product/ProductPage';
const App = () => {
    const [search, setSearch] = useState(false)
    


    return (
        <div className="App">
            <Header/>
            <div className={"ms-wrap" + (search ? ' show ' : '')}>
                <MainSearch focus={search} closeSearch={setSearch}/>
            </div>
            <main className="main">
                <Routes>
                    <Route element={<HomePage/>} path={'/'}/>
                    <Route element={<ColPage/>} path={'/collection/:collection'}/>
                    <Route element={<ProfilePage/>} path={'/profile'}/>
                    <Route element={<ProductPage/>} path={'/product/:productName'}/>
                </Routes>
            </main>
            <Navbar
                search={search}
                toggleSearch={setSearch}
                />
        </div>
    )
}

export default App;