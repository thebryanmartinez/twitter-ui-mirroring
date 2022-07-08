// Components: TweetHeader, TweetFooter, TweetAvatar
import TweetFooter from './TweetFooter/TweetFooter'
import TweetHeader from './TweetHeader'
import TweetAvatar from './TweetAvatar'
import ImageContainer from './ImageContainer'

const ImagesTweet = ({
	children,
	image,
	time,
	retweets,
	comments,
	likes,
	name,
	username,
	profilePicture,
	image1,
	image2,
	image3,
	image4,
}) => {
	return (
		<div className='noSelect tweetContainer'>
			<TweetAvatar profilePicture={profilePicture} />
			<div className='w-full'>
				<TweetHeader name={name} username={username} time={time} />
				<div>{!children ? <p>This is a tweet</p> : children}</div>
				<ImageContainer image1={image1} image2={image2} image3={image3} image4={image4} />
				<TweetFooter retweets={retweets} comments={comments} likes={likes} />
			</div>
		</div>
	)
}

export default ImagesTweet
