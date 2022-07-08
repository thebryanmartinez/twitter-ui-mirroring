import { useEffect, useState } from 'react'

let opacity = 'opacity-0'
const Tooltip = ({ children, text, margin }) => {
	const [isHovering, setIsHovering] = useState(false)

	const hoverMouseEnter = () => {
		setIsHovering(true)
	}
	const hoverMouseLeave = () => {
		setIsHovering(false)
	}

	useEffect(() => {
		isHovering ? (opacity = 'opacity-0') : (opacity = 'opacity-100 delay-700')
	}, [isHovering])

	return (
		<div onMouseEnter={hoverMouseEnter} onMouseLeave={hoverMouseLeave}>
			{children}
			{/* <p
				className={`${opacity} absolute bg-[#0A1419] bg-opacity-70 whitespace-pre text-white text-[10px] rounded-sm ${margin} p-[2px] `}>
				{text}
			</p> */}
		</div>
	)
}

export default Tooltip
