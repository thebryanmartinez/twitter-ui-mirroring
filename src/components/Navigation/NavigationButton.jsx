import PropTypes from 'prop-types'

const NavigationButton = ({ children }) => {
	return (
		<a href='#' className='w-full h-full flex items-center justify-center'>
			<div className='hovershadow hover:bg-black hover:bg-opacity-10'>
				{children}
			</div>
		</a>
	)
}

NavigationButton.propTypes = {
	children: PropTypes.node.isRequired,
}

export default NavigationButton
