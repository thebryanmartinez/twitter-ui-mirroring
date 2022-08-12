// Components: TweetHeader, TweetFooter, TweetAvatar
import TweetFooter from './TweetFooter/TweetFooter'
import TweetHeader from './TweetHeader'
import TweetAvatar from './TweetAvatar'
import PropTypes from 'prop-types'

const TextTweet = ({
	children,
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
				<div>{!children ? <p>This is a tweet</p> : <p>{children}</p>}</div>
				<TweetFooter retweets={retweets} comments={comments} likes={likes} />
			</div>
		</div>
	)
}

TextTweet.propTypes = {
	username: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired,
	likes: PropTypes.number.isRequired,
	comments: PropTypes.number.isRequired,
	retweets: PropTypes.number.isRequired,
	profilePicture: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
}

export default TextTweet
