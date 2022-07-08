const ImageContainer = ({ image1, image2, image3, image4 }) => {
	const images = { image1: '', image2: '', image3: '', image4: '' }

	if (image1) images.image1 = 'w-full row-span-2 col-span-2'
	if (image1 && image2) {
		images.image1 = 'w-full row-span-2'
		images.image2 = 'w-full row-span-2'
	}

	if (image1 && image2 && image3) {
		images.image1 = 'w-full h-full object-none row-span-2'
		images.image2 = 'w-full row-span-1'
		images.image3 = 'w-full row-span-1'
	}

	if (image1 && image2 && image3 && image4) {
		images.image1 = images.image2 = images.image3 = images.image4 = ''
	}

	return (
		<div className='rounded-2xl bg-red-200 overflow-y-auto mt-2'>
			<div className='grid grid-cols-2 grid-rows-2 gap-[2px] place-items-center'>
				<img className={images.image1} src={image1} />
				{image2 && <img className={images.image2} src={image2} />}
				{image3 && <img className={images.image3} src={image3} />}
				{image4 && <img className={images.image4} src={image4} />}
			</div>
		</div>
	)
}

export default ImageContainer
