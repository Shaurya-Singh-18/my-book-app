import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-10 max-w-6xl">
      <h2 className="text-3xl font-secondary mb-2 text-gray-800">Contact Us</h2>
      <p className="text-gray-600 mb-8">Please fill up the form below to send us a message. We will contact you very soon.</p>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Left Side - Form */}
        <div className="w-full md:w-2/3">
          <form className="flex flex-col gap-4">
            
            <input 
              type="text" 
              placeholder="Name *" 
              required
              className="border border-blue-200 rounded px-4 py-2 focus:outline-none focus:border-blue-500 bg-blue-50/30 w-full"
            />
            
            <div className="flex flex-col md:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Email *" 
                required
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500 w-full"
              />
              <button 
                type="button"
                className="bg-[#b33939] text-white px-6 py-2 rounded shrink-0 hover:bg-red-800 transition"
              >
                Verify Email
              </button>
            </div>

            <input 
              type="text" 
              placeholder="Address" 
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500 w-full"
            />

            <input 
              type="tel" 
              placeholder="Phone/Mobile" 
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500 w-full"
            />

            <input 
              type="text" 
              placeholder="Subject" 
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500 w-full"
            />

            <select className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500 w-full text-gray-500">
              <option value="">--Select--</option>
              <option value="support">Support</option>
              <option value="sales">Sales</option>
            </select>

            <textarea 
              placeholder="Description *" 
              required
              rows="4"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500 w-full"
            ></textarea>

            {/* Captcha Area */}
            <div className="flex items-center gap-4 mt-2">
              <div className="bg-gray-200 px-6 py-2 tracking-widest font-bold text-2xl strike-through relative overflow-hidden border border-black">
                <span className="relative z-10 text-black mix-blend-difference">C99AH</span>
                <div className="absolute inset-0 bg-noise opacity-50"></div>
                <div className="absolute top-1/2 left-0 w-full h-px bg-black transform -rotate-12"></div>
                <div className="absolute top-1/3 left-0 w-full h-px bg-black transform rotate-6"></div>
              </div>
              <input 
                type="text" 
                className="border border-gray-400 w-24 px-2 py-1"
                placeholder=""
              />
              <button type="button" className="text-red-500 hover:text-red-700">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                 </svg>
              </button>
            </div>

            <button 
              type="submit"
              disabled
              className="bg-gray-400 text-white w-40 py-2 mt-4 cursor-not-allowed uppercase font-semibold"
            >
              Submit
            </button>

          </form>
        </div>

        {/* Right Side - Info */}
        <div className="w-full md:w-1/3 bg-white p-6 flex flex-col items-center">
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/contact-us-3483604-2912020.png" alt="Contact Support Illustration" className="w-full max-w-sm mb-8" />
          
          <div className="text-sm text-gray-700 space-y-4 text-left w-full pl-4 md:pl-10">
            <div>
              <p className="font-semibold text-gray-800">SR Ecommerce Factory Pvt. Ltd.,</p>
              <p>2/14, Ansari road,</p>
              <p>Daryaganj Delhi 110002</p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[#e17055]">✉</span>
              <a href="mailto:customerservice@bookswagon.com" className="text-[#e17055] hover:underline">customerservice@bookswagon.com</a>
            </div>

            <div className="flex items-start gap-2">
              <span className="text-[#e17055] mt-0.5">📞</span>
              <div>
                <p className="text-[#e17055]">011-41521153, Closed on Sundays and Public Holidays.</p>
                <p className="text-[#e17055] flex items-center gap-1"><span className="text-[#e17055]">🕔</span> 9:00 am to 6:00 pm</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact;
