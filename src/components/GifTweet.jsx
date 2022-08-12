// Components: TweetHeader, TweetFooter, TweetAvatar
import TweetFooter from './TweetFooter/TweetFooter'
import TweetHeader from './TweetHeader'
import TweetAvatar from './TweetAvatar'
import PropTypes from 'prop-types'

const GifTweet = ({
	children,
	gif,
	time,
	retweets,
	comments,
	likes,
	name,
	username,
	profilePicture,
}) => {
	return (
		<div className='noSelect tweetContainer'>
			<TweetAvatar profilePicture={profilePicture} />
			<div className='w-full'>
				<TweetHeader name={name} username={username} time={time} />
				<div>{!children ? <p>This is a tweet</p> : children}</div>
				<img className='mt-4 rounded-xl' src={gif} loading='lazy' />
				<TweetFooter retweets={retweets} comments={comments} likes={likes} />
			</div>
		</div>
	)
}

GifTweet.propTypes = {
	username: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired,
	likes: PropTypes.number.isRequired,
	comments: PropTypes.number.isRequired,
	retweets: PropTypes.number.isRequired,
	profilePicture: PropTypes.string.isRequired,
	gif: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
}

export default GifTweet
