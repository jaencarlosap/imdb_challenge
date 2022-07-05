import { Query } from 'libs/query'

const url_base = 'https://api.themoviedb.org/3/'
const api_key = `?api_key=${process.env.NEXT_PUBLIC_API_KEY}`

export const useQuery = () => {

	const SendQuery = async ({ query, params }) => {
		const paramsToSend = new URLSearchParams(params)
		const result = await Query(url_base + query + api_key + '&' + paramsToSend)

		return { result }
	}

	return { SendQuery }
}
