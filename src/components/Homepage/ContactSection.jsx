import React from "react";

const ContactSection = () => {
  return (
    <section className="section contact flex justify-center items-center bg-[#161616]">
      <div>
        <h2 className="text-white text-[1.75rem] font-bold max-w-[366px] text-center mb-[3.3125rem]">
          Take A Coffee & Chat With Me.
        </h2>
        <button className="text-[#FF5925] hover:text-white hover:bg-[#FF5925] transition-all border border-[#FF5925] w-[135px] h-[55px] flex items-center justify-center text-sm mx-auto">
          Email Me
        </button>
      </div>
    </section>
  );
};

export default ContactSection;
