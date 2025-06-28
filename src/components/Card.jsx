function Card(props) {
	const { src, alt, title } = props;
	return (
		<div className="lg:h-96 h-80 w-72 lg:mb-0 mb-4 bg-blue-900 rounded-3xl shadow-md shadow-gray-600 transition-colors duration-300 hover:bg-red-800">
			<div className="m-8 py-4">
				<img src={src} alt={alt} className="max-h-32 mx-auto m-4" />
				<p className="pt-serif text-2xl text-white mx-auto">{title}</p>
			</div>
		</div>
	);
}

export default Card;
