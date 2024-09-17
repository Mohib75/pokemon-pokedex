import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const PokemonDetails = () => {
	const { name } = useParams()

	const [pokemon, setPokemon] = useState([])
	const [species, setSpecies] = useState([])

	const POKEMON_API = "https://pokeapi.co/api/v2/pokemon"
	const POKEMON_SPECIES_API = "https://pokeapi.co/api/v2/pokemon-species"

	const fetchPokemonInfo = async () => {
		try {
			const res = await fetch(`${POKEMON_API}/${name}`)
			const data = await res.json()
			setPokemon(data)
			console.log(`pokemon:`, pokemon)
			return data
		} catch (error) {
			console.error("Error fetching Pokemon:", error)
		}
	}

	const fetchPokemonSpecies = async () => {
		try {
			const res = await fetch(`${POKEMON_SPECIES_API}/${name}`)
			const data = await res.json()
			setSpecies(data)
			console.log(`Species:`, species)
			return data
		} catch (error) {
			console.error("Error fetching Pokemon:", error)
		}
	}

	useEffect(() => {
		fetchPokemonInfo()
	}, [])

	useEffect(() => {
		fetchPokemonSpecies()
	}, [])

	return (
		<div className='container w-full'>
			<div className='w-full bg-[#F8F8F8] rounded-[4rem] h-[800px]'></div>
		</div>
	)
}

export default PokemonDetails
