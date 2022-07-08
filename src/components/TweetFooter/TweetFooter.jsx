// Icons
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined'

// Component: TweetFooterButton
import TweetFooterButton from './TweetFooterButton'
import Tooltip from '../Tooltip'

const TweetFooter = ({ comments, likes, retweets }) => {
	return (
		<div className='flex items-center my-2 w-full justify-between text-[13px]'>
			<Tooltip text={'Reply'} margin={'mt-[-8px] ml-[2px]'}>
				<TweetFooterButton color={'blue'} number={comments}>
					<ModeCommentOutlinedIcon sx={{ width: 18.75, height: 18.75 }} />
				</TweetFooterButton>
			</Tooltip>
			<Tooltip text={'Retweet'} margin={'mt-[-8px] ml-[2px]'}>
				<TweetFooterButton color={'[#00ba7c]'} number={retweets}>
					<LoopOutlinedIcon sx={{ width: 18.75, height: 18.75 }} />
				</TweetFooterButton>
			</Tooltip>
			<Tooltip text={'Like'} margin={'mt-[-8px] ml-[2px]'}>
				<TweetFooterButton color={'[#f91881]'} number={likes}>
					<FavoriteBorderOutlinedIcon sx={{ width: 18.75, height: 18.75 }} />
				</TweetFooterButton>
			</Tooltip>
			<Tooltip text={'Share'} margin={'mt-[-8px] ml-[2px]'}>
				<TweetFooterButton color={'blue'}>
					<FileUploadOutlinedIcon sx={{ width: 18.75, height: 18.75 }} />
				</TweetFooterButton>
			</Tooltip>
		</div>
	)
}

export default TweetFooter
