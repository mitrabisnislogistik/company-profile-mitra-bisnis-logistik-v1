function Contact(props) {
	const { src, alt, contact, buttonTitle, href } = props;
	return (
		<div className="flex flex-col justify-center mb-12 lg:mb-0">
			<img
				src={src}
				alt={alt}
				className="lg:max-h-40 max-h-24 max-w-fit mx-auto"
			/>
			<p className="text-true-blue pt-serif lg:text-2xl text-lg lg:my-8 my-4">
				{contact}
			</p>
			<a
				className="h-10 w-32 mx-auto rounded-full mulish true-blue px-4 py-3 text-sm font-medium text-white transition hover:scale-110 hover:rotate-2 focus:ring-3 focus:outline-hidden"
				href={href}
				target="_blank">
				{buttonTitle}
			</a>
		</div>
	);
}

export default Contact;
