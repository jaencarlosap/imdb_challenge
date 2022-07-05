export const Query = (params) => {
	return fetch(params).then(res => res.json()).then(res => res)
}