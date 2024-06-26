import "./App.css";
import { RiHome3Line } from "react-icons/ri";
import RouteMain from "./12/RouteMain";
// import Festival from "./11/Festival";
// import Gallery from "./10/Gallery";
// import MyRef from "./09/MyRef";
// import Traffic from "./08_1/Traffic";
// import TrafficMain from "./08/TrafficMain";
// import FoodMain from "./07/FoodMain";
// import BoxOffice1 from "./06/BoxOffice_1";
// import BoxOffice from "./06/BoxOffice";
// import Lotto from "./05/Lotto";
// import MyList from "./04/MyList";
// import MyDiv from "./03/MyDiv";
// import MyClock from "./02/MyClock";
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
            <main className="h-screen overflow-y-auto p-4 flex items-center justify-center">
                HOME
               
                {/* <RouteMain/> */}
                {/* <Festival/> */}
                {/* <Gallery/> */}
                {/* <MyRef/> */}
                {/* <Traffic/> */}
                {/* <TrafficMain/> */}
                {/* <FoodMain/> */}
                {/* <BoxOffice1 /> */}
                {/* <BoxOffice/> */}
                {/* <Lotto/> */}
                {/* <MyList /> */}
                {/* <MyDiv /> */}
                {/* <MyClock /> */}
                {/* <div className="flex items-center h-full justify-center"> */}
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
