import logo from "../images/logo.svg"

const Navigation = () => {

    const linkText = ["Home", "About", "Contact", "Blog", "Careers"]

    const linkStyles = 'flex items-center border-b-4 border-transparent hover:border-b-4 hover:border-[#30cd74] h-[100%] hover:cursor-pointer hover:text-[#3f424c]'

	return (
		<header className="flex flex-row items-center justify-around h-[60px] max-h-[60px] fixed top-0 left-0 w-full bg-white">
			<img src={logo} alt="easybank logo" />

			<nav className="h-full">
				<ul className="flex flex-row items-center gap-4 text-[#b3b2b8] h-full">
					{linkText.map((link, i) => {
                        return (<li key={i} className={linkStyles}>{link}</li>)
                    })}
				</ul>
			</nav>

			<button className="px-7 py-3 font-bold bg-gradient-to-r from-[#30ce69] to-[#2bb8c8] rounded-full text-white text-sm hover:opacity-60">Request Invite</button>
		</header>
	);
};

export default Navigation;
