import { useState } from 'react'
import { Navbar } from 'components'
import { useQuery } from 'hooks'
import '../assets/css/general.css'

const MyApp = ({ Component, pageProps }) => {
	const [films, setFilms] = useState({
		results: [],
		page: 1
	})
	const { SendQuery } = useQuery()

	const handleQuerys = async (params, reset = false) => {
		const query_select = !params.query || params.query == '' ? 'tv/popular' : 'search/tv'
		const paramsQuery = { query: query_select, params }

		const { result: resultTv } = await SendQuery(paramsQuery)
		let Films = [...films.results]

		if (reset) Films = []

		for (const tvShow of resultTv.results) {
			const { result: credits } = await SendQuery({ query: `tv/${tvShow.id}/credits` })
			tvShow.cast = credits.cast

			const { result: rating } = await SendQuery({ query: `tv/${tvShow.id}/content_ratings` })
			tvShow.rating = rating.results

			Films.push(tvShow)
		}

		setFilms({
			results: Films,
			page: resultTv.page
		})
	}

	const handleSearch = name => {
		handleQuerys({ query: name, page: 1 }, true)
	}

	return (
		<>
			<Navbar handleSearch={handleSearch} />
			<Component {...{ ...pageProps, ...films, handleQuerys }} />
		</>
	)
}

export default MyApp