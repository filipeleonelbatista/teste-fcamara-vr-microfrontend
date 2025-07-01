const Footer = () => {
  return (
    <footer className="w-full bg-green-300 text-black px-4 py-6">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
        <div>
          <h4 className="font-bold mb-2">ABOUT</h4>
          <ul>
            <li>Who we are?</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">HELP</h4>
          <ul>
            <li>Support</li>
            <li>Help Center</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">CONTACT</h4>
          <ul>
            <li>Terms & Condition</li>
            <li>Return & Exchange Policy</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">FOLLOW US</h4>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
      <div className="w-full text-center mt-6">
        <span className="text-xs text-gray-700">© 2025 Green Cart Haven</span>
      </div>
    </footer>
  );
};

export default Footer;