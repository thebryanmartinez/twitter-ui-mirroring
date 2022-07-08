// Components: TweetHeader, TweetFooter, TweetAvatar
import TweetFooter from './TweetFooter/TweetFooter'
import TweetHeader from './TweetHeader'
import TweetAvatar from './TweetAvatar'

const ImageTweet = ({
	children,
	image,
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
				<img className='mt-4 rounded-2xl' src={image} loading='lazy' />
				<TweetFooter retweets={retweets} comments={comments} likes={likes} />
			</div>
		</div>
	)
}

export default ImageTweet
