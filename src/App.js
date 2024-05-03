import "./App.css";
import { RiHome3Line } from "react-icons/ri";
import logo from "./logo.svg";

function App() {
    return (
        <div className="App flex flex-col w-full h-screen overflow-y-auto bg-slate-100">
            <header className="flex justify-between items-center text-3xl font-bold h-20 bg-black text-gray-50 p-8 ">
                <div>리액트 실습</div>
                <div>
                    <RiHome3Line className="text-gray-50" />
                </div>
            </header>
            <main className="w-full max-w-screen-xl mx-auto h-screen bg-white">
                <div className="flex items-center h-full justify-center">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
            </main>
            <footer className="bg-black text-gray-50 p-2 text-xs">
                FOOTER
            </footer>
        </div>
    );
}

export default App;
