import { Heart, Phone, Mail } from "lucide-react";
import Image from "next/image";
import payment_icons from "../../../public/payment-icons.png"
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#2d2d2d] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary-foreground fill-current" />
              </div>
              <div className="text-xl font-bold text-white">DENTAL MART</div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Farooque Dental Mart is Pakistan&apos;s First & Largest Online Dental Store and is the pioneer in its category.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              The company is by default the largest manufacturer, exporter and importer of Dental Materials and Products in Pakistan. We also proudly own sole distributions of some globally well-reputed Dental Brands & Products.
            </p>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white border-b border-primary pb-2">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-300 text-sm">(+92) 0316 3439 290</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-300 text-sm">sales@alfarooquedental.com</span>
              </div>
            </div>
          </div>

          {/* Site Map */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white border-b border-primary pb-2">Site Map</h3>
            <div className="space-y-2">
              {[
                "Home",
                "Privacy Policies", 
                "Refunds & Returns",
                "Terms & Conditions",
                "Order Tracking",
                "Contact Us",
                "About Us"
              ].map((link) => (
                <a 
                  key={link}
                  href="#" 
                  className="block text-gray-300 text-sm hover:text-gray-50 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Timings & Payment */}
          <div className="space-y-6">
            {/* Timings */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white border-b border-primary pb-2">Timings</h3>
              <p className="text-gray-300 text-sm">Available 24/7</p>
            </div>

            {/* Payment Methods */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white border-b border-primary pb-2">Payment Methods</h3>
              <div className="flex flex-wrap gap-2">
                <Image src={payment_icons} alt="Visa" width={280} height={30} className="object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 text-center">
          <p className="text-white text-sm">Copyright © {new Date().getFullYear()} <Link href="/" className="underline">FAROOQUE DENTAL MART</Link>. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;