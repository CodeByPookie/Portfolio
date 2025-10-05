const Footer = () => {
  return (
   <footer>
      <div className="bg-[#262626] text-white py-4">
        <div className="container mx-auto text-center">
          <p>
            © {new Date().getFullYear()} Selva — Made with ❤️ by{" "}
            <a
              href="https://github.com/CodeByPookie"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-white hover:text-[#fd2f78] underline hover:no-underline"
            >
              CodeByPookie
            </a>
          </p>
        </div>
      </div>
   </footer>
  );
};

export default Footer;