import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-dark-brown text-white p-4 sm:p-6 lg:px-10 flex flex-col sm:flex-row justify-between items-center md:text-lg lg:text-xl">
            <div className="space-x-4 mb-4 sm:mb-0">
                <a href="/about" className="hover:text-light-gray">
                    About
                </a>
                <a href="/contact" className="hover:text-light-gray">
                    Contact
                </a>
                <a href="/faq" className="hover:text-light-gray">
                    FAQ
                </a>
            </div>
            <div className="space-x-4 flex">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-light-gray">
                    <FaFacebook />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-light-gray">
                    <FaTwitter />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-light-gray">
                    <FaInstagram />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-light-gray">
                    <FaLinkedin />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
