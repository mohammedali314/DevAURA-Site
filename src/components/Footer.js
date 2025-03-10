import React from "react";
import Logo from "../assest/Logo.png";

const MarketingFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full">
      <footer className="bg-gray-50 pt-16 pb-8 px-4 shadow-md">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <img src={Logo} alt="Company Logo" className="h-12 w-auto mb-4" loading="lazy" />
            <p className="text-gray-600">
              At <strong>DevAURA</strong>, we strive to provide cutting-edge solutions that help businesses grow and succeed.
            </p>
          </div>

          {/* About Us Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Who We Are</h3>
            <p className="text-gray-600">
              We are a passionate team of professionals dedicated to delivering high-quality services tailored to your business needs.
            </p>
          </div>

          {/* What We Do */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">What We Do</h3>
            <p className="text-gray-600">
              Our expertise lies in building robust, scalable, and efficient solutions for businesses of all sizes.
            </p>
          </div>

          {/* Quick Contact */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
            <p className="text-gray-600"><strong>Email:</strong>devaura.pages.dev@gmail.com</p>
            <p className="text-gray-600"><strong>Phone:</strong> 03325122666</p>
            <p className="text-gray-600"><strong>Address:</strong>Butt Car Stand Plaza,  Jalalpur Jatan Road , Karianwala, Gujrat</p>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            © {currentYear} DevAURA. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MarketingFooter;
