import Avatar from '@mui/material/Avatar'
import PropTypes from 'prop-types'

const TweetAvatar = ({ profilePicture }) => {
	return (
		<div className='mr-3 cursor-pointer'>
			<Avatar
				className='hover:brightness-[.85] transition-all'
				sx={{ width: 48, height: 48 }}
				src={profilePicture}
			/>
		</div>
	)
}

TweetAvatar.propTypes = {
	profilePicture: PropTypes.string.isRequired,
}

export default TweetAvatar
