import { useEffect, useState } from "react"
import "../index.css"
import { PokemonCards } from "./PokemonCards"
import Spinner from "./Spinner"

export const Pokemon = () => {
	const [pokemon, setPokemon] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
	const [search, setSearch] = useState("")

	const API = "https://pokeapi.co/api/v2/pokemon"
	const TOTAL_POKEMON = 1302
	const BATCH_SIZE = 200

	const fetchPokemon = async () => {
		try {
			let allPokemon = []
			let offset = 0

			while (offset < TOTAL_POKEMON) {
				const res = await fetch(`${API}?limit=${BATCH_SIZE}&offset=${offset}`)
				const data = await res.json()
				allPokemon = allPokemon.concat(data.results)
				offset += BATCH_SIZE
			}

			const detailedPokemonData = allPokemon.map(async (curPokemon) => {
				const res = await fetch(curPokemon.url)
				const data = await res.json()
				return data
			})

			const detailedResponses = await Promise.all(detailedPokemonData)
			console.log("Fetched Pokemon Data:", detailedResponses)
			setPokemon(detailedResponses)
			setLoading(false)
		} catch (error) {
			console.error("Error fetching Pokemon:", error)
			setLoading(false)
			setError(error)
		}
	}

	useEffect(() => {
		fetchPokemon()
	}, [])

	const searchData = pokemon.filter((curPokemon) => curPokemon.name.toLowerCase().includes(search.toLowerCase()))

	// if (error) {
	// 	return (
	// 		<div>
	// 			<h1>{error.message}</h1>
	// 		</div>
	// 	)
	// }

	return (
		<>
			<section className='container'>
				<header>
					<h1> Let's Catch Pokémon</h1>
				</header>
				<div className='pokemon-search'>
					<input type='text' placeholder='search Pokemon' value={search} onChange={(e) => setSearch(e.target.value)} />
				</div>
				{loading ? (
					<Spinner />
				) : (
					<div>
						<ul className='cards'>
							{searchData.slice(0, 40).map((curPokemon) => {
								return <PokemonCards key={curPokemon.id} pokemonData={curPokemon} />
							})}
						</ul>
					</div>
				)}
			</section>
		</>
	)
}
