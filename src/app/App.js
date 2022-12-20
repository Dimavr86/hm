import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Header from '../components/Header/Header';
import HomePage from '../pages/home/HomePage';
import ColPage from '../pages/collection/ColPage';
import ProfilePage from '../pages/profile/ProfilePage';

const App = () => {
    return (
        <div className="App">
            <Header/>
            <main className="main">
                <Routes>
                    <Route element={<HomePage/>} path={'/'}/>
                    <Route element={<ColPage/>} path={'/collection/:collection'}/>
                    <Route element={<ProfilePage/>} path={'/profile'}/>
                </Routes>
            </main>
        </div>
    )
}

export default App;