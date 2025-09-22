

const Navbar =()=>{
    return(
        <nav className="bg-white shadow flex justify-between px-6 py-4 items-center">
            <h1 className="text-xl font-bold text-indigo-600">E-Comm</h1>
            <ul className="flex gap-6 text-gray-700">
              <li className="hover:text-indigo-600 cursor-pointer">Home</li>
              <li className="hover:text-indigo-600 cursor-pointer">Bags</li>
              <li className="hover:text-indigo-600 cursor-pointer">Sneakers</li>
              <li className="hover:text-indigo-600 cursor-pointer">Belt</li>
              <li className="hover:text-indigo-600 cursor-pointer">Contact</li>
            </ul>
            <div className="hidden md:flex gap-4 items-center">
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNob3BwaW5nLWNhcnQtaWNvbiBsdWNpZGUtc2hvcHBpbmctY2FydCI+PGNpcmNsZSBjeD0iOCIgY3k9IjIxIiByPSIxIi8+PGNpcmNsZSBjeD0iMTkiIGN5PSIyMSIgcj0iMSIvPjxwYXRoIGQ9Ik0yLjA1IDIuMDVoMmwyLjY2IDEyLjQyYTIgMiAwIDAgMCAyIDEuNThoOS43OGEyIDIgMCAwIDAgMS45NS0xLjU3bDEuNjUtNy40M0g1LjEyIi8+PC9zdmc+" 
                alt="cart" className="w-6 h-6"/>
                <span>Item: $0.00</span>
            </div>
        </nav>
    )
};

export default Navbar;