import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>

      <p className="text-lg text-center mb-6">
        Welcome to <span className="font-semibold">Croissant Shop</span>! This
        is a demo shopping cart project built as part of{" "}
        <a
          href="https://www.theodinproject.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          The Odin Project
        </a>
        . It’s designed to simulate a real online shopping experience.
      </p>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Features</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Browse a selection of amazing products.</li>
          <li>Add and remove items from your cart.</li>
          <li>Dynamic price calculation.</li>
          <li>Responsive design for mobile and desktop.</li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Technologies Used</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-semibold">React</span> - Frontend framework
          </li>
          <li>
            <span className="font-semibold">Vite</span> - Fast build tool
          </li>
          <li>
            <span className="font-semibold">Tailwind CSS</span> - Styling
          </li>
          <li>
            <span className="font-semibold">React Router</span> - Page
            navigation
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-3">About the Developer</h2>
        <p>
          Hi, I'm <span className="font-semibold">Zirix</span>, a web developer
          learning full-stack development through The Odin Project. This project
          helped me practice working with React, state management, and routing.
        </p>
      </div>

      <div className="text-center">
        <a
          href="https://github.com/ImZirix/shopping-cart"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          View on GitHub
        </a>
      </div>

      <div className="text-center mt-6">
        <Link to="/" className="text-blue-500 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default About;
