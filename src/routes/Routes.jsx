import { createBrowserRouter } from "react-router-dom"
import { App } from "../App"
import PokemonDetails from "../components/PokemonDetails"

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		// errorElement: <ErrorPage />,
	},
	{
		path: "/pokemon/:name",
		element: <PokemonDetails />,
	},
])
