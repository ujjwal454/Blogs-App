import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { auth } from "./firebase/firebaseConfig";
import { setUser } from "./redux/actions/action";
import Create from "./components/Create";
import Feeds from "./components/Feeds";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SingleFeed from "./components/SingleFeed";
function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				dispatch(setUser(authUser));
			} else {
				dispatch(setUser(null));
			}
		});
	}, [dispatch]);
	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route element={<ProtectedRoute />}>
						<Route
							path="/"
							element={
								<>
									<Navbar />
									<Sidebar />
									<Feeds />
								</>
							}
						/>
						<Route
							path="/create"
							element={
								<>
									{" "}
									<Navbar />
									<Sidebar />
									<Create />
								</>
							}
						/>
						<Route
							path="/detail/:id"
							element={
								<>
									{" "}
									<Navbar />
									<Sidebar />
									<SingleFeed />
								</>
							}
						/>
					</Route>

					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route
						path="*"
						element={
							<div>
								404 Not Found <br />
								<Link to="/">Go to home</Link>
							</div>
						}
					/>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
