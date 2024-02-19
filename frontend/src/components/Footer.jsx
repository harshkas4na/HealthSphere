import React from 'react';
// import logo from '../assets/logo.png'; // Assuming you have the logo image imported

const Footer = () => {
  const footerLinks = [
    {
      title: "About",
      links: [
        { name: "About Us" },
        { name: "Our Team" },
        { name: "Contact Us" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Disease Awareness" },
        { name: "Community" },
        { name: "Diet Planner" },
      ],
    },
    // Add more sections as needed
  ];

  const socialMedia = [
    { id: "facebook", icon: "facebook-icon.png", link: "#" },
    { id: "twitter", icon: "twitter-icon.png", link: "#" },
    { id: "instagram", icon: "instagram-icon.png", link: "#" },
    // Add more social media icons as needed
  ];

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="flex-shrink-0">
            <img src="" alt="HealthAware" className="w-48 h-auto" />
            <p className="mt-4 max-w-[312px]">
              A new way to make health management easy, reliable, and accessible.
            </p>
          </div>
          <div className="flex flex-wrap mt-6 md:mt-0">
            {footerLinks.map((footerlink) => (
              <div key={footerlink.title} className="w-full md:w-1/4 lg:w-1/6 mr-8">
                <h4 className="font-medium text-lg mb-4">{footerlink.title}</h4>
                <ul className="list-none">
                  {footerlink.links.map((link, index) => (
                    <li key={link.name} className="mb-2">
                      <a href="#" className="hover:text-blue-500">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center border-t border-gray-700 pt-6">
          <p className="text-sm">&copy; 2024 HealthAware. All rights reserved.</p>
          <div className="flex">
            {socialMedia.map((social, index) => (
              <img
                key={social.id}
                src={social.icon}
                alt={social.id}
                className={`w-6 h-6 mr-4 cursor-pointer`}
                onClick={() => window.open(social.link)}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
