import { Link } from "react-router-dom"

export const PokemonCards = ({ pokemonData }) => {
	const typeColors = {
		fire: "bg-[#FF5859]",
		grass: "bg-[#00BA75]",
		electric: "bg-[#FFC500]",
		water: "bg-[#00C1ED]",
		poison: "bg-[#30306D]",
		dragon: "bg-[#9B54FF]",
		dark: "bg-[#4A4A4A]",
		psychic: "bg-[#00BD9C]",
		earth: "bg-[#A26432]",
		bug: "bg-[#00EE9C]",
		normal: "bg-[#DDE7EA]",
		steel: "bg-[#7A8D8E]",
		fairy: "bg-[#FFB9B9]",
		ground: "bg-[#BC7121]",
		rock: "bg-[#521103]",
		ice: "bg-[#00D2E7]",
		fighting: "bg-[#FF9416]",
		ghost: "bg-[#6B298C]",
		flying: "bg-[#007680]",
	}
	return (
		<Link to={`/pokemon/${pokemonData?.name}`} className='pokemon-card rounded-3xl border-white border-[1px] border-solid'>
			<figure>
				<img
					src={
						// pokemonData.sprites.other.dream_world.front_default === null
						// 	? pokemonData.sprites.other.home.front_default
						// 	: pokemonData.sprites.other.dream_world.front_default
						pokemonData?.sprites?.other?.home?.front_default
					}
					alt={pokemonData?.name}
					className='pokemon-image'
				/>
			</figure>
			<h1 className='pokemon-name'>{pokemonData?.name}</h1>
			<div className='pokemon-info pokemon-highlight gap-4'>
				{/* <p className={pokemonData.types.map((curType) => typeColors[curType.type.name] || "bg-green-500").join(" ")}>
					{pokemonData.types.map((curType) => curType.type.name).join(", ")}
				</p> */}
				{pokemonData?.types.map((curType, index) => (
					<p key={index} className={typeColors[curType.type.name] || "bg-green-500"}>
						{curType.type.name}
					</p>
				))}
			</div>

			<div className='grid-two-cols'>
				<p className='pokemon-info'>
					<span> Height:</span> {pokemonData?.height / 10} m
				</p>
				<p className='pokemon-info'>
					<span> Weight:</span> {pokemonData?.weight / 10} kg
				</p>
				<p className='pokemon-info'>
					<span> speed:</span> {pokemonData?.stats[5].base_stat}
				</p>
			</div>

			{/* <div className='grid-three-cols'>
				<div className='pokemon-info'>
					<p>{pokemonData.base_experience}</p>
					<span> Experience:</span>
				</div>
				<div className='pokemon-info'>
					<p>{pokemonData.stats[1].base_stat}</p>
					<span>Attack:</span>
				</div>
				<div className='pokemon-info'>
					<p>
						{pokemonData.abilities
							.map((abilityInfo) => abilityInfo.ability.name)
							.slice(0, 1)
							.join(", ")}
					</p>
					<span> Abilities: </span>
				</div>
			</div> */}
		</Link>
	)
}
