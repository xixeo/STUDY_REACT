import { Link } from "react-router-dom";

export default function RouteHome() {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <h1 className="w-full text-center text-2xl font-bold">RouteHome</h1>
            <div className="w-1/2 grid grid-cols-2 m-10">
                <div className="w-full flex flex-col justify-center items-center text-xl">
                    <h4 className="bg-blue-200 px-8 py-1">Page 1</h4>
                    <ul className="m-4">
                        <li>
                            <Link to="/p1/🍦">🍦</Link>
                        </li>
                        <li>
                            <Link to="/p1/🍰">🍰</Link>
                        </li>
                        <li>
                            <Link to="/p1/🍩">🍩</Link>
                        </li>
                    </ul>
                </div>
                <div className="w-full flex flex-col justify-center items-center text-xl">
                    <h4 className="bg-blue-200 px-8 py-1">Page 2</h4>
                    <ul className="m-4">
                        <li>
                            <Link to="/p2?item=🍰&item2=🍩&item3=🍦">
                                🍰 🍩 🍦
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
