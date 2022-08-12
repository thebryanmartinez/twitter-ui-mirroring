import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

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

Tooltip.propTypes = {
	children: PropTypes.node.isRequired,
	text: PropTypes.string.isRequired,
	margin: PropTypes.any,
}

export default Tooltip
