import PropTypes from 'prop-types'

const TweetFooterButton = ({ children, color, number }) => {
	if (number >= 1000 && number < 10000) {
		number = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
	}
	if (number >= 10000) {
		number = `${(number / 10000).toFixed(1)}k`
	}

	return (
		<div
			className={`flex items-center hover:cursor-pointer hover:text-${color} transition-all`}>
			<div
				className={`hovershadow hover:text-${color} hover:bg-opacity-10 transition-all`}>
				{children}
			</div>
			<span>{number}</span>
		</div>
	)
}

TweetFooterButton.propTypes = {
	children: PropTypes.node.isRequired,
	color: PropTypes.string.isRequired,
	number: PropTypes.number,
}

export default TweetFooterButton
