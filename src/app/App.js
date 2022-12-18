import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Header from '../components/Header/Header';
import HomePage from '../pages/home/HomePage';

const App = () => {
    return (
        <div className="App">
            <Header/>
            <main className="main">
                <Routes>
                    <Route element={<HomePage/>} path={'/'}/>
                </Routes>
            </main>
        </div>
    )
}

export default App;