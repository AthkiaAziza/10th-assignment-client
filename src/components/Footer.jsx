import { SiFacebook } from "react-icons/si";
import { AiFillTwitterCircle } from "react-icons/ai";
import { GrLinkedin } from "react-icons/gr";

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-blue-900 text-white">
                <div>
                    <div className="flex gap-4 text-3xl">
                        <SiFacebook></SiFacebook>
                        <AiFillTwitterCircle></AiFillTwitterCircle>
                        <GrLinkedin></GrLinkedin>
                    </div>
                    <p>Adventure Industries Ltd.<br />Providing reliable services since 1992</p>
                </div>
                <nav>
                    <h6 className="footer-title">Information</h6>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Explore</a>
                    <a className="link link-hover">Travel</a>
                    <a className="link link-hover">Blog</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Helpful Links</h6>
                    <a className="link link-hover">Destinations</a>
                    <a className="link link-hover">Supports</a>
                    <a className="link link-hover">Terms & Conditions</a>
                    <a className="link link-hover">Privacy</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Contact</h6>
                    <a className="link link-hover">+ 62 21 65 4171</a>
                    <a className="link link-hover">hellobesnik@.com</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;