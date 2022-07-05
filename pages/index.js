import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import InfiniteScroll from 'react-infinite-scroll-component'

const api_images = process.env.NEXT_PUBLIC_API_IMAGE

const Main = ({ results, handleQuerys, page, query }) => {
	const dataLength = results?.length || 0

	const handleNext = () => {
		if (query === 'tv/popular') {
			handleQuerys({ page: page + 1 }, false)
		}
	}

	useEffect(() => {
		if (dataLength === 0) handleQuerys({ page: 1 })
	}, [dataLength, handleQuerys])

	if (dataLength === 0) return 'Loading...'

	return (
		<InfiniteScroll
			dataLength={dataLength}
			next={handleNext}
			hasMore={true}
			loader={<h4>Loading...</h4>}
		>
			<div className="films">
				{results?.length > 0 ? (
					results?.map((item, index) => (
						<Link
							href={`/${item.id}`}
							key={'detail_' + item.id + '_' + index}
						>
							<div className={'card'}>
								<div className="card-inner">
									<div className="card-front">
										<Image
											src={api_images + item.poster_path}
											alt={item.original_title}
											layout='responsive'
											width="100"
											height="100"
										/>
										<div className="title">{item.original_name}</div>
									</div>
									<div className="card-back">
										{item.rating !== undefined ? (
											<>
												<p>Rating : {item.rating[0]?.rating} </p>
												<p>Actores: </p>
												<ul>
													<li>{item.cast[0]?.character}</li>
													<li>{item.cast[1]?.character}</li>
													<li>{item.cast[2]?.character}</li>
												</ul>
											</>
										) : (
											<p>Cargando...</p>
										)}
									</div>
								</div>
							</div>
						</Link>
					))
				) : (
					<div>Sin resultados</div>
				)}
			</div>
		</InfiniteScroll >
	)
}

export default Main
