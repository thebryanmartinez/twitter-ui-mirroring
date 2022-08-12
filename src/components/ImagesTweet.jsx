// Components: TweetHeader, TweetFooter, TweetAvatar
import TweetFooter from './TweetFooter/TweetFooter'
import TweetHeader from './TweetHeader'
import TweetAvatar from './TweetAvatar'
import ImageContainer from './ImageContainer'
import PropTypes from 'prop-types'

const ImagesTweet = ({
	children,
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
				<ImageContainer
					image1={image1}
					image2={image2}
					image3={image3}
					image4={image4}
				/>
				<TweetFooter retweets={retweets} comments={comments} likes={likes} />
			</div>
		</div>
	)
}

ImagesTweet.propTypes = {
	username: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired,
	likes: PropTypes.number.isRequired,
	comments: PropTypes.number.isRequired,
	retweets: PropTypes.number.isRequired,
	profilePicture: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	image1: PropTypes.string,
	image2: PropTypes.string,
	image3: PropTypes.string,
	image4: PropTypes.string,
}

export default ImagesTweet
