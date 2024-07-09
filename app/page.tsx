import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import data from './data';

const HomePage = () => {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-4xl font-bold text-emerald mb-4">{data.companyName}</h1>
      <h2 className="text-2xl text-antiqueGold mb-4">{data.ownerName}</h2>
      <p className="text-lg text-gray-800 mb-4">{data.description}</p>
      <div className="flex justify-center space-x-4 mb-4">
        <a
          href={data.socialLinks.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-charcoal hover:text-pink-500 transition duration-300 transform hover:scale-125"
        >
          <FaInstagram className="h-8 w-8" />
        </a>
        <a
          href={data.socialLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="text-charcoal hover:text-blue-600 transition duration-300 transform hover:scale-125"
        >
          <FaFacebook className="h-8 w-8" />
        </a>
        <a
          href={data.socialLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="text-charcoal hover:text-green-500 transition duration-300 transform hover:scale-125"
        >
          <FaWhatsapp className="h-8 w-8" />
        </a>
      </div>
      <p className="text-lg text-gray-800">Contacto: {data.phone}</p>
      <p className="text-lg text-gray-800">Email: {data.email}</p>
      <p className="text-lg text-gray-800">{data.address}</p>
      <img src="/logo3.png" alt="Logo Guarakay" className="mt-4 mx-auto h-24" />
      <div className="flex justify-center space-x-4 mt-8">
        <img src="/Logo_Artesanias_1.png" alt="Artesanías Logo 1" className="h-24" />
        </div>
      <div className="flex justify-center space-x-4 mt-8">
      <img src="/lazona.png" alt="La Zona" className="h-24" />
      <img src="/ict-footer.png" alt="ICT Footer" className="h-24" />
      </div>
    </div>
  );
};

export default HomePage;
