// Components: Header, Navigation, Feed, TextTweet, ImageTweet, GifTweet, ImagesTweet
import Header from './components/Header'
import Navigation from './components/Navigation/Navigation'
import Feed from './components/Feed'
import TextTweet from './components/TextTweet'
import ImageTweet from './components/ImageTweet'
import GifTweet from './components/GifTweet'
import ImagesTweet from './components/ImagesTweet'

// Images
import profilePicture from './assets/images/profile.jpg'
import sampleImageHorizontal from './assets/images/sampleImageHorizontal.jpg'
import sampleImagePortrait from './assets/images/sampleImagePortrait.jpg'
import sampleGif from './assets/images/sampleGif.gif'
import sampleAvatar1 from './assets/images/sampleAvatar1.jpg'
import sampleAvatar2 from './assets/images/sampleAvatar2.jpg'
import sampleAvatar3 from './assets/images/sampleAvatar3.jpg'
import sampleImageHorizontal2 from './assets/images/sampleImageHorizontal2.jpg'

const App = () => {
	return (
		<>
			<Header />
			<Navigation />
			<Feed>
				<TextTweet
					profilePicture={profilePicture}
					name={'Bryan Martínez'}
					username={'thebryanmartz'}
					time={'7w'}
					likes={700699}
					comments={675401}
					retweets={78252}>
					Lorem #ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
					commodi animi, laboriosam voluptatum adipisci illum?
				</TextTweet>
				<TextTweet
					profilePicture={sampleAvatar1}
					name={'Jeanie Sullivan'}
					username={'jsully840'}
					time={'23h'}
					likes={2870}
					comments={101251}
					retweets={329297}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
					voluptates repudiandae eius recusandae illo quae.
				</TextTweet>
				<ImageTweet
					profilePicture={sampleAvatar2}
					name={'Walker Fritz'}
					username={'walkerfrights7'}
					time={'1y'}
					likes={824954}
					comments={14607}
					retweets={652049}
					image={sampleImagePortrait}>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
					odio optio tempora recusandae, dolore dignissimos?
				</ImageTweet>
				<GifTweet
					profilePicture={sampleAvatar3}
					name={'Alicia Cooley'}
					username={'aliceinwonderland'}
					time={'18d'}
					likes={514843}
					comments={367409}
					retweets={99366}
					gif={sampleGif}>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores quam
					numquam nostrum molestias vitae perspiciatis impedit.
				</GifTweet>
				<ImagesTweet
					profilePicture={profilePicture}
					name={'Bryan Martínez'}
					username={'thebryanmartz'}
					time={'27s'}
					likes={819654}
					comments={859543}
					retweets={781}
					image1={sampleImageHorizontal}
					image2={sampleImageHorizontal}
					image3={sampleImageHorizontal}
					image4={sampleImageHorizontal}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
					blanditiis.
				</ImagesTweet>
				<ImagesTweet
					profilePicture={sampleAvatar1}
					name={'Jeanie Sullivan'}
					username={'jsully840'}
					time={'27s'}
					likes={819654}
					comments={859543}
					retweets={781}
					image1={sampleImageHorizontal}
					image2={sampleImageHorizontal2}
					image3={sampleImageHorizontal2}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
					blanditiis.
				</ImagesTweet>
			</Feed>
		</>
	)
}

export default App
