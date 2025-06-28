import Header from "./components/Header";
import Footer from "./components/Footer";

function About() {
	return (
		<>
			<Header />
			<div className="lg:m-8 lg:p-8 m-4 p-4">
				<div className="lg:px-12 lg:mx-8 mx-4">
					<p className="mb-8 text-center text-3xl pt-serif">Tentang Kami</p>
					<p className="lg:mx-12 lg:px-16 mulish">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a
						lacus odio. Aliquam nec erat vitae turpis dapibus fermentum. Nulla
						commodo pharetra facilisis. Proin pretium nisl sed dolor iaculis
						pharetra. Proin ac magna velit. Morbi et egestas felis. Integer
						lobortis dignissim tortor id tempus. Proin nunc justo, auctor eu est
						a, posuere commodo dui. Nullam ipsum libero, tempus quis velit sed,
						euismod lacinia tellus. Curabitur sagittis eros nec accumsan
						bibendum. Morbi at ipsum diam. Morbi dictum, libero non congue
						pulvinar, ligula sapien vestibulum elit, in posuere turpis tellus
						bibendum velit. Etiam tristique dignissim est ut pharetra. Nunc est
						tortor, malesuada at pretium vel, accumsan sed ante.
					</p>
				</div>
				<div className="lg:mt-12 mt-6">
					<img
						src="https://ik.imagekit.io/5mtwtegkx/mitra-bisnis-logistik-assets/cargo-landing.jpg?updatedAt=1750852028023"
						alt=""
						className="max-h-80 mx-auto rounded-3xl"
					/>
				</div>
			</div>

			<div className="soft-blue lg:py-12 lg:px-4 mb-8">
				<div className="lg:max-w-5xl mx-auto lg:grid lg:grid-cols-2">
					{/* Visi */}
					<div className="lg:border-r lg:border-red-700 lg:p-8 p-4">
						<h2 className="text-center text-3xl font-bold text-true-red mb-4">
							Visi
						</h2>
						<p className="mx-4 px-4 mulish">
							Di dalam dinamika pembangunan ekonomi, sosial dan budaya secara
							global kami memandang adanya persaingan yang sangat ketat dalam
							dunia usaha, kami hadir dengan terobosan inovatif, mengutamakan
							pelayanan dan kualitas kerja terbaik, didukung program terencana
							untuk kontribusi maksimal bagi pengguna jasa dan kemitraan yang
							kokoh serta berkelanjutan.
						</p>
					</div>

					{/* Misi */}
					<div className="lg:p-8 p-4 pt-0 lg:pt-4">
						<h2 className="text-center text-3xl font-bold text-true-red mb-4">
							Misi
						</h2>
						<p className="mx-4 px-4 mulish">
							Kemitraan yang kuat, kokoh dan berkelanjutan merupakan pondasi
							dasar yang kami harapkan sehingga akan memberikan profit yang
							berkelanjutan dalam menjaga keberlangsungan usaha dan mampu
							memberikan kontribusi dalam pembangunan ekonomi, sosial, budaya
							dan sumber daya manusia baik di dalam perusahaan maupun dalam
							masyarakat global.
						</p>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
}

export default About;
