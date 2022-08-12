// Icons
import CircleIcon from '@mui/icons-material/Circle'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import PropTypes from 'prop-types'

import Tooltip from './Tooltip'

const TweetHeader = ({ name, username, time }) => {
	return (
		<div className='w-full flex items-center mt-[-8px] justify-between'>
			<div>
				<span className='name hover:underline decoration-[1.5px] hover:cursor-pointer mr-1'>
					{name}
				</span>
				<span className='username'>@{username}</span>
				<span className='text-gray mx-2'>
					<CircleIcon sx={{ fontSize: 3 }}></CircleIcon>
				</span>
				<span className='text-gray hover:underline decoration-1'>{time}</span>
			</div>
			<Tooltip text={'More'} margin={'ml-[2px]'}>
				<div className='hovershadow hover:text-blue hover:bg-blue hover:bg-opacity-10'>
					<MoreHorizIcon />
				</div>
			</Tooltip>
		</div>
	)
}

TweetHeader.propTypes = {
	name: PropTypes.string.isRequired,
	username: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired,
}

export default TweetHeader
