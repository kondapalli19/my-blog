import { FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa';
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-0 mb-5 text-slate-400">
      <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
      <div className="flex space-x-4">
        {/* Twitter */}
        <a href="https://twitter.com/KoyalKondapalli" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={40} />
        </a>
        
        {/* GitHub */}
        <a href="https://github.com/kondapalli19" target="_blank" rel="noopener noreferrer">
          <FaGithub size={40} />
        </a>
        
        {/* Email */}
        <a href="mailto:kkoyal19599@gmail.com">
          <FaEnvelope size={40} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
