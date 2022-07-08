// Icons
import Avatar from '@mui/material/Avatar'
import SparkleIcon from '../assets/images/sparklesIcon.png'

// Image
import profilePicture from '../assets/images/profile.jpg'

import Tooltip from './Tooltip'

const Header = () => {
	return (
		<header className='flex fixed z-10 left-0 top-0 h-[53px] w-full bg-white px-4 items-center'>
			<div className='mr-[21px] cursor-pointer'>
				<Avatar sx={{ width: 32, height: 32 }} src={profilePicture} />
			</div>
			<h1 className='font-bold text-black text-[17px] w-[80%]'>Home</h1>
			<Tooltip text={'Top Tweets'} margin={'mt-[2px] ml-[-10px]'}>
				<div className='hovershadow hover:bg-black hover:bg-opacity-10'>
					<img
						className='w-5 object-contain scale-x-[-1]'
						src={SparkleIcon}
						alt='Top Tweets'
					/>
				</div>
			</Tooltip>
		</header>
	)
}

export default Header
