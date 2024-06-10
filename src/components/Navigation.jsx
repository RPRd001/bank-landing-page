import logo from "../images/logo.svg"

const Navigation = () => {
	return (
		<header className="flex flex-row items-center justify-around py-5 fixed top-0 left-0 w-full bg-white">
			<img src={logo} alt="easybank logo" />

			<nav>
				<ul className="flex flex-row items-center gap-4 text-[#b3b2b8]">
					<li>Home</li>
					<li>About</li>
					<li>Contact</li>
					<li>Blog</li>
					<li>Careers</li>
				</ul>
			</nav>

			<button className="px-7 py-3 font-bold bg-gradient-to-r from-[#30ce69] to-[#2bb8c8] rounded-full text-white text-sm">Request Invite</button>
		</header>
	);
};

export default Navigation;
