import React from 'react'

const Footer=()=> {
  return (
     <footer className="bg-blue-100 text-gray-700 py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-14">
     
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
              0
            </div>
            <h2 className="font-bold text-lg">E-Comm</h2>
          </div>
          <p className="text-sm leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer.
          </p>
        </div>

       
        <div>
          <h3 className="font-bold text-lg mb-3">Follow Us</h3>
          <p className="text-sm mb-3">
            Since the 1500s, when an unknown printer took a galley of type and scrambled.
          </p>
          <div className="flex gap-3 text-blue-600 text-xl">
            <a href="#"><img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWZhY2Vib29rLWljb24gbHVjaWRlLWZhY2Vib29rIj48cGF0aCBkPSJNMTggMmgtM2E1IDUgMCAwIDAtNSA1djNIN3Y0aDN2OGg0di04aDNsMS00aC00VjdhMSAxIDAgMCAxIDEtMWgzeiIvPjwvc3ZnPg==' /></a>
            <a href="#"><img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXR3aXR0ZXItaWNvbiBsdWNpZGUtdHdpdHRlciI+PHBhdGggZD0iTTIyIDRzLS43IDIuMS0yIDMuNGMxLjYgMTAtOS40IDE3LjMtMTggMTEuNiAyLjIuMSA0LjQtLjYgNi0yQzMgMTUuNS41IDkuNiAzIDVjMi4yIDIuNiA1LjYgNC4xIDkgNC0uOS00LjIgNC02LjYgNy0zLjggMS4xIDAgMy0xLjIgMy0xLjJ6Ii8+PC9zdmc+' /></a>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-3">Contact Us</h3>
          <p className="text-sm">
            E-Comm, 4578 <br />
            Marmora Road, <br />
            Glasgow D04 89GR
          </p>
        </div>
      </div>

      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 text-sm">
        <div>
          <h4 className="font-bold mb-2">Information</h4>
          <ul className="space-y-1">
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Service</h4>
          <ul className="space-y-1">
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">My Account</h4>
          <ul className="space-y-1">
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Our Offers</h4>
          <ul className="space-y-1">
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>

     
      <div className="border-t border-white mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>© 2018 Ecommerce theme by www.bisenbaev.com</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <img src="/img/Western-union.png" alt="Visa" className="h-6" />
          <img src="/img/images.png" alt="Mastercard" className="h-6" />
          <img src="/img/pay-pal-logo-2-250x150.png" alt="PayPal" className="h-6" />
          <img src="/img/VISA-Logo-1992.png" alt="Visa" className="h-6" />
        </div>
      </div>
    </footer>
  )
}

export default Footer