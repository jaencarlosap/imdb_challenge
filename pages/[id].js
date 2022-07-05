import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useQuery } from 'hooks'

const api_images = process.env.NEXT_PUBLIC_API_IMAGE

const Detail = ({ id }) => {
	const [state, setState] = useState({ load: false, temp: 0 })
	const [episodes, setEpisodes] = useState(false)
	const [isActive, setIsActive] = useState(0)
	const [isView, setIsView] = useState()
	const { SendQuery } = useQuery()

	const handleQuery = async () => {
		const { result: data } = await SendQuery({ query: 'tv/' + id })
		setState({ ...state, data: data, load: true })
	}

	const handleDetailSeason = async (season_number) => {
		setIsActive(season_number)
		setIsView(undefined)
		const { result: episodes } = await SendQuery({
			query: `tv/${id}/season/${season_number}`
		})
		setEpisodes(episodes)
	}

	useEffect(() => {
		if (!state.load) handleQuery()
		if (!episodes) handleDetailSeason(1)
	})

	if (!state.load) return 'Cargando...'
	return (
		<div className="detail-content">
			<div className="img-content">
				<Image
					src={api_images + state.data.backdrop_path}
					alt={state.data.original_name}
					layout='responsive'
					width='100'
					height='100'
				/>
				<h1 className="title">{state.data.original_name}</h1>
			</div>
			<div className="season-content">
				<h1 className="title2">SEASONS</h1>
				<div className="div-seasons">
					{state?.data?.seasons?.map((season, index) => (
						<div
							className={
								isActive === season.season_number ? 'season active' : 'season'
							}
							onClick={() => handleDetailSeason(season.season_number)}
							key={'temp_' + season.id}
						>
							{index + 1}
						</div>
					))}
				</div>
				<div className="episodes">
					{!episodes?.episodes && 'Cargando...'}
					{
						episodes?.episodes &&
						episodes?.episodes?.map((episode, index) => (
							<div
								className="episode"
								key={'episode_' + index}
								onClick={() => setIsView(episode.episode_number)}
							>
								<div className="name">
									<p className="text"> {index + 1 + ' ' + episode.name}</p>
									<div
										className={
											isView === episode.episode_number
												? 'isActive active'
												: 'isActive'
										}
									></div>
								</div>
								<div
									className={
										isView === episode.episode_number
											? 'content-episode active'
											: 'content-episode'
									}
								>
									Air on {episode.air_date}
									<br />
									{episode.overview || 'sorry i don`t have an overview :('}
									<br />
									{episode.vote_average + '%'}
								</div>
							</div>
						))
					}
				</div>
			</div>
		</div>
	)
}

export async function getServerSideProps(context) {
	return {
		props: context.query
	}
}

export default Detail
