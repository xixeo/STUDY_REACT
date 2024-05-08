import "./App.css";
import { RiHome3Line } from "react-icons/ri";
import Lotto from "./05/Lotto";
// import MyList from "./04/MyList";
// import MyDiv from "./03/MyDiv";
// import logo from "./logo.svg";

function App() {
    return (
        <div className="App flex flex-col w-full h-screen overflow-y-auto ">
            <header className="flex justify-between items-center text-3xl font-bold h-20 bg-cyan-500 text-teal-50 p-8 ">
                <div className="w-full max-w-screen-xl">리액트 실습</div>
                <div>
                    <RiHome3Line className="text-teal-50" />
                </div>
            </header>
            <main className="h-screen p-4 flex items-center justify-center">
                <Lotto/>
                {/* <MyList /> */}
                {/* <div className="flex items-center h-full justify-center"> */}
                {/* <MyDiv /> */}
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                {/* </div> */}
            </main>
            <footer className="bg-black text-gray-50 p-2 text-xs">
                FOOTER
            </footer>
        </div>
    );
}

export default App;
