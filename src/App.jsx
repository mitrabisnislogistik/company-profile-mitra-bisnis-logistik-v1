import "./App.css";
import Card from "./components/Card";
import CardDetail from "./components/CardDetail";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import ButtonUp from "./components/ButtonUp";

function App() {
	return (
		<>
			<Header />
			<div className="lg:grid lg:grid-cols-2 soft-blue lg:px-28">
				<div className="lg:m-8 lg:p-8 m-4 p-4 max-h-full align-middle">
					<p className="text-2xl text-true-red font-semibold pt-serif">
						Kemitraan Kuat, Kualitas Terbaik, Pengiriman Optimal.
					</p>
					<p className="mt-4 mulish">
						Kami adalah mitra terpercaya yang selalu berinovasi untuk
						menghadirkan pelayanan dan kualitas kerja terbaik dalam jasa
						pengiriman kargo udara, darat, dan laut, baik untuk pengiriman
						domestik maupun internasional. Dengan perencanaan matang dan program
						yang terarah, kami membangun kemitraan kokoh dan berkelanjutan yang
						tak hanya memastikan profitabilitas jangka panjang, tapi juga
						memberikan kontribusi nyata bagi seluruh klien dan masyarakat
						global.
					</p>
				</div>
				<div className="lg:m-8 p-8 pt-0">
					<img
						src="https://ik.imagekit.io/5mtwtegkx/mitra-bisnis-logistik-assets/landing-1.jpg?updatedAt=1751141637243"
						alt="cargo-landing"
						className="lg:rounded-3xl rounded-2xl max-h-96"
					/>
				</div>
			</div>

			{/* LAYANAN KAMI */}
			<div id="layanan" className="mb-16">
				<div className="lg:m-8 lg:p-8 m-4 p-4">
					<p className="text-center font-bold pt-serif text-4xl">
						Layanan Kami
					</p>
				</div>
				<div className="px-8 flex flex-col lg:flex-row items-center justify-center text-center lg:gap-4">
					<Card
						src="https://ik.imagekit.io/5mtwtegkx/mitra-bisnis-logistik-assets/plane2.png?updatedAt=1750852408115"
						alt="plane"
						title="Kargo Udara"
					/>
					<Card
						src="https://ik.imagekit.io/5mtwtegkx/mitra-bisnis-logistik-assets/truck.png?updatedAt=1750852594450"
						alt="truck"
						title="Kargo Darat"
					/>
					<Card
						src="https://ik.imagekit.io/5mtwtegkx/mitra-bisnis-logistik-assets/ship.png?updatedAt=1750852594527"
						alt="ship"
						title="Kargo Laut"
					/>
				</div>
			</div>

			<CardDetail
				title="Kargo Udara"
				desc="Solusi pengiriman tercepat untuk barang-barang mendesak, perishable,
						atau bernilai tinggi. Kami bekerja sama dengan maskapai terkemuka,
						menawarkan jadwal fleksibel dan rute optimal. Layanan ini mencakup
						door-to-door, airport-to-airport, dan dukungan bea cukai
						komprehensif dengan pengawasan real-time."
			/>
			<CardDetail
				title="Kargo Darat"
				desc="Jaringan transportasi darat yang luas dan terintegrasi melalui truk (FTL
				& LTL) dan kereta api. Ideal untuk pengiriman lokal maupun antar
				kota/provinsi, berfungsi sebagai penghubung penting dalam rantai pasok.
				Didukung armada terawat, pengemudi profesional, dan pelacakan real-time
				untuk pengiriman aman dan tepat waktu."
			/>
			<p></p>
			<CardDetail
				title="Kargo Laut"
				desc="Pilihan ekonomis untuk volume besar atau non-urgensi. Kami menawarkan
				solusi FCL (Full Container Load) dan LCL (Less than Container Load).
				Dengan jaringan global dan kemitraan pelayaran terkemuka, kami menjamin
				rute efisien, penanganan aman, dan kepatuhan regulasi internasional.
				Ideal untuk impor-ekspor lintas benua, lengkap dengan layanan kepabeanan
				dan dokumen pelabuhan."
			/>

			<div id="kontak" className="lg:m-8 lg:p-8 m-4 p-4">
				<p className="text-center pt-serif text-3xl">Hubungi Kami</p>
			</div>

			<div className="soft-blue lg:p-16 pt-8 ">
				<div className="lg:grid lg:grid-cols-2 m-4 p-4 text-center">
					<Contact
						src="https://ik.imagekit.io/5mtwtegkx/mitra-bisnis-logistik-assets/whatsapp.png?updatedAt=1750857381155"
						alt="whatsapp"
						contact="+62 812 9262 9298"
						buttonTitle="Chat"
						href="https://wa.me/6281292629298"
					/>
					<Contact
						src="https://ik.imagekit.io/5mtwtegkx/mitra-bisnis-logistik-assets/gmail.png?updatedAt=1750857380979"
						alt="email"
						contact="mitrabisnislogistik@gmail.com"
						buttonTitle="Send Email"
						href="mailto:mitrabisnislogistik@gmail.com"
					/>
				</div>
			</div>
			<Footer />
			<ButtonUp />
		</>
	);
}

export default App;
