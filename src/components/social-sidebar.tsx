import { FaLinkedin, FaWhatsapp, FaGithub, FaEnvelope } from "react-icons/fa";

const SocialSidebar = () => {
  return (
    <div className="fixed left-0 top-1/3 z-50 flex flex-col space-y-4 bg-black bg-opacity-50 p-3 rounded-r-lg shadow-lg">
      <a
        href="https://linkedin.com/in/your-profile"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-600 transition"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="https://wa.me/your-number"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-green-500 transition"
      >
        <FaWhatsapp size={24} />
      </a>
      <a
        href="https://github.com/your-username"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-400 transition"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="mailto:your-email@example.com"
        className="text-white hover:text-red-500 transition"
      >
        <FaEnvelope size={24} />
      </a>
    </div>
  );
};

export default SocialSidebar;
