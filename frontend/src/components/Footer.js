import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-yellow-400">BRIGHT</span> GYM
          </h2>

          <p className="text-gray-400 leading-7">
            Transform your body and mind at our state of the art fitness facility.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Quick Links</h3>

          <ul className="space-y-3 text-gray-400">

            <li>
              <Link to="/" className="hover:text-yellow-400 transition">
                Home
              </Link>
            </li>

            <li>
              <Link to="/services" className="hover:text-yellow-400 transition">
                Services
              </Link>
            </li>

            <li>
              <Link to="/plans" className="hover:text-yellow-400 transition">
                Plans
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-yellow-400 transition">
                Contact
              </Link>
            </li>

          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Opening Hours</h3>

          <ul className="space-y-3 text-gray-400">
            <li>Mon - Fri: 5AM - 11PM</li>
            <li>Sat - Sun: 6AM - 10PM</li>
            <li className="text-yellow-400 font-medium">24/7 For Premium Members</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Contact</h3>

          <ul className="space-y-3 text-gray-400">
            <li>Adama, Ethiopia</li>
            <li>+251 911 491 277</li>
            <li>info@brightgym.com</li>
          </ul>
        </div>

      </div>

      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500">
        © 2026 Bright Gym. All rights reserved.
      </div>
    </footer>
  );
}