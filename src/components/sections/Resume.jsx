import '@react-pdf-viewer/core/lib/styles/index.css';
import resume from '../E2K21104393_Shubham_Pandharpatte_Resume.pdf';
import React, { useState } from 'react';
import Modal from '../Modal';
import { IoIosArrowForward } from "react-icons/io";

function Resume() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'Shubham_Pandharpatte_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="resume-section py-8 px-4 items-center">
      <h2 className="text-2xl text-white font-bold mb-4 text-center">My Resume</h2>
      <div className="flex gap-2 mt-6 items-center justify-center p-4 text-center">
              <button
                
                className="px-6 py-3 text-zinc-900 dark:text-zinc-100 border border-black hover:bg-red-800 hover:text-zinc-100 hover:border-red-800 dark:border-white font-medium transition-all duration-300"
                onClick={openModal}
              >
                Preview
              </button>
              <button   
                className="px-6 py-3 text-zinc-900 dark:text-zinc-100 hover:text-red-800 dark:hover:text-red-500 transition-all duration-300 flex gap-3 hover:gap-4"
                onClick={handleDownload}
              >
                <span className="self-center font-medium">Download</span>
                <IoIosArrowForward className="self-center" />

                
              </button>
            </div>
      <Modal isOpen={isOpen} closeModal={closeModal} fileUrl={resume} />
    </div>
  );
}

export default Resume;
