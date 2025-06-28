import { useState } from "react";

function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<header className="bg-white">
			<div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-28">
				<div className="flex h-20 items-center justify-between">
					<div className="lg:flex-1 flex items-center space-x-2 md:items-center md:gap-6">
						<div className="block text-teal-600">
							<span className="sr-only">Home</span>
							<img
								src="https://ik.imagekit.io/5mtwtegkx/mitra-bisnis-logistik-assets/pt%20mitra%20bisnis%20logistik.png?updatedAt=1750859192046"
								alt="logo"
								className="max-h-12"
							/>
						</div>
						<p className="pt-serif font-semibold text-true-blue">
							PT. Mitra Bisnis Logistik
						</p>
					</div>

					<div className="md:flex md:items-center md:gap-12">
						<nav aria-label="Global" className="hidden md:block">
							<ul className="flex flex-end items-center gap-6 text-md mulish">
								<li>
									<a
										className="text-black transition hover:text-blue-800"
										href="/">
										Beranda
									</a>
								</li>

								<li>
									<a
										className="text-black transition hover:text-blue-800"
										href="/#layanan">
										Layanan
									</a>
								</li>

								<li>
									<a
										className="text-black transition hover:text-blue-800"
										href="/#kontak">
										Kontak
									</a>
								</li>
								<li>
									<a
										className="text-black transition hover:text-blue-800"
										href="/tentang-kami">
										Tentang Kami
									</a>
								</li>
							</ul>
						</nav>

						<div className="flex items-center gap-4">
							<div className="block md:hidden">
								<button
									onClick={() => setIsMenuOpen(!isMenuOpen)}
									className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="size-5"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth="2">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			{isMenuOpen && (
				<div
					className="lg:hidden absolute right-4 top-20 z-10 mt-2 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg mulish"
					role="menu">
					<div className="p-2">
						<a
							href="/"
							className="block rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
							role="menuitem">
							Beranda
						</a>
						<a
							href="#layanan"
							className="block rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
							role="menuitem">
							Layanan
						</a>
						<a
							href="#kontak"
							className="block rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
							role="menuitem">
							Kontak
						</a>
						<a
							href="/tentang-kami"
							className="block rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
							role="menuitem">
							Tentang Kami
						</a>
					</div>
				</div>
			)}
		</header>
	);
}

export default Header;
