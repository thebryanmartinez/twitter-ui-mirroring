const NavigationButton = ({ children }) => {
	return (
		<a href='#' className='w-full h-full flex items-center justify-center'>
			<div className='hovershadow hover:bg-black hover:bg-opacity-10'>
				{children}
			</div>
		</a>
	)
}

export default NavigationButton
