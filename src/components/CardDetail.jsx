function CardDetail(props) {
	const { title, desc, id } = props;
	return (
		<div id={id} className="lg:mx-16 lg:px-8 lg:mb-8 mb-8">
			<div className="lg:mx-32 lg:p-16 mx-8 p-8 soft-blue rounded-3xl shadow-md shadow-gray-600">
				<p className="text-2xl font-semibold pt-serif text-true-red flex lg:flex-col">
					{title}
				</p>
				<p className="mt-4">{desc}</p>
			</div>
		</div>
	);
}

export default CardDetail;
