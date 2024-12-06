const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-400 py-4 text-center sm:text-left">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p>&copy; 2024 Foodie. All rights reserved.</p>
          <ul className="flex space-x-4 mt-2 sm:mt-0">
            <li><a href="#" className="hover:text-white">Privacy</a></li>
            <li><a href="#" className="hover:text-white">Terms</a></li>
          </ul>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  