import { useState } from 'react'
import Link from 'next/link'

import { Settigns, Search } from 'assets/icons'
import { useRouter } from 'next/router'

export const Navbar = ({ handleSearch }) => {
	const router = useRouter()
	const [value, setValue] = useState('')

	return (
		<div className="nav">
			<div className="header">
				{router.pathname != '/' && (
					<Link href="/">
						<div className="back">
							<div className="arrow"></div>Back
						</div>
					</Link>
				)}
				<Link href="/">
					<h1>SHOWS</h1>
				</Link>
			</div>
			<div>
				<input
					className="search"
					type="text"
					value={value}
					onChange={e => setValue(e.target.value)}
				/>
			</div>
			<div className="options">
				<div onClick={() => alert('Hello, i am settings')}>
					<Settigns />
				</div>
				<div onClick={() => handleSearch(value)}>
					<Search />
				</div>
			</div>
		</div >
	)
}
