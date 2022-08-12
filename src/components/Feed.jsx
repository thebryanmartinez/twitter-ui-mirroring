import PropTypes from 'prop-types'

const Feed = ({ children }) => {
	return (
		<div className='w-full z-0 my-[53px] text-[15px] text-black leading-5'>
			{children}
		</div>
	)
}

Feed.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Feed
