import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import About from "./About.jsx";
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/tentang-kami",
		element: <About />,
	},
]);

export default router;
