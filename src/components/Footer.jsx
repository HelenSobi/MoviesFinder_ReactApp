const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Text Description */}
          <p className="text-center text-sm md:text-left mb-4">
            Discover a wide range of popular and diverse movies on our website, catering to all your entertainment needs.
          </p>

          {/* Copyright Notice */}
          <p className="text-center text-gray-300 text-sm md:text-left">
            &copy; {new Date().getFullYear()}. MoviesFinder
            <span className="text-gray-600 text-center text-sm ml-4"> Coded by Helen</span>
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
