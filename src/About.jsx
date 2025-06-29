import Header from "./components/Header";
import Footer from "./components/Footer";
import ButtonUp from "./components/ButtonUp";

function About() {
	return (
		<>
			<Header />
			<div className="lg:m-8 lg:p-8 m-4 p-4">
				<div className="lg:px-12 lg:mx-8 mx-4">
					<p className="mb-8 text-center text-3xl pt-serif">Tentang Kami</p>
					<p className="lg:mx-12 lg:px-16 mulish">
						PT Mitra Bisnis Logistik adalah perusahaan jasa pengiriman kargo
						yang berlokasi di Teluk Naga, Kabupaten Tangerang. Kami hadir
						sebagai mitra terpercaya, berinovasi untuk menghadirkan pelayanan
						ramah, kualitas kerja terbaik, serta jasa pengiriman kargo udara,
						darat, dan laut yang efisien. Dengan perencanaan matang dan program
						terarah, kami membangun kemitraan kokoh dan berkelanjutan. Komitmen
						kami adalah memberikan kontribusi nyata bagi seluruh klien dan
						masyarakat global, baik untuk kebutuhan pengiriman domestik maupun
						internasional, melalui setiap layanan yang kami sediakan.
					</p>
				</div>
				<div className="lg:mt-12 mt-6">
					<img
						src="https://ik.imagekit.io/5mtwtegkx/mitra-bisnis-logistik-assets/aboutus-1.jpg?updatedAt=1751141831709"
						alt="about-us"
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
					<div className=" lg:p-8 p-4">
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
			<ButtonUp />
		</>
	);
}

export default About;
