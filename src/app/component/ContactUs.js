
export const ContactUs = ()=>{
  const contactInfo = [
    { label: "Address :", value: "110, 16th Road, Chembur, Mumbai – 400071" },
    { label: "Phone :", value: "+91 22 25208822" },
    { label: "Email :", value: "info@supremegroup.co.in" },
  ];

  const formFields = [
    { id: "fullname", label: "Full name", type: "text" },
    { id: "email", label: "E-mail", type: "email" },
    { id: "subject", label: "Subject", type: "text" },
  ];

  return (
    <div className="w-full min-h-screen bg-[#0067b1] flex items-center justify-center p-4 md:p-8">
      <div className="w-full ml- bg-[#0067b1] rounded-[10px]">
        <div className="py-8 px-6 md:py-16 lg:py-[88px] md:px-12 lg:px-[132px]">
          <div className="flex flex-col justify-center lg:flex-row gap-8 md:gap-12 lg:gap-[150px]">
            <div className="flex flex-col  w-full lg:w-[418px] gap-6 md:gap-8 lg:gap-10">
              <div className="flex flex-col gap-3 md:gap-5">
                <h1 className="font-['Manrope',Helvetica] font-semibold text-white text-3xl md:text-4xl lg:text-5xl leading-tight lg:leading-[38px]">
                  Get in touch
                </h1>
              </div>

              <div className="w-12 h-[3px] bg-white"></div>

              <div className="flex flex-col gap-6 md:gap-8 lg:gap-10">
                <h2 className="font-['Manrope',Helvetica] font-normal  text-slate-200 text-lg md:text-xl lg:text-2xl leading-6 lg:leading-7">
                  For general enquiries
                </h2>

                <div className="flex flex-col gap-6 md:gap-4 lg:gap-[30px]">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex flex-col gap-2 md:gap-2 lg:gap-[15px]">
                      <span className="font-['Manrope',Helvetica] font-semibold text-white text-base md:text-lg lg:text-xl leading-4">
                        {item.label}
                      </span>
                      <span className="font-['Manrope',Helvetica] font-normal text-slate-200 text-base md:text-lg lg:text-xl leading-5 lg:leading-4 break-words">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8 md:gap-10 lg:gap-[49px] w-full lg:w-auto">
              <div className="flex flex-col gap-8 md:gap-12 lg:gap-[30px]">
                {formFields.map((field, index) => (
                  <div key={index} className="flex flex-col gap-3 md:gap-4 lg:gap-[15px]">
                    <label
                      htmlFor={field.id}
                      className="font-['Manrope',Helvetica] font-semibold text-white text-base md:text-lg lg:text-xl leading-4"
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      className="w-full max-w-full lg:w-[551px] bg-transparent border-0 border-b border-slate-200 focus:border-white focus:outline-none px-0 py-2 text-white placeholder:text-white/70 text-base md:text-lg lg:text-xl font-['Manrope',Helvetica]"
                    />
                  </div>
                ))}

                <div className="flex flex-col gap-3 md:gap-4 lg:gap-[15px]">
                  <label
                    htmlFor="message"
                    className="font-['Manrope',Helvetica] font-semibold text-white text-base md:text-lg lg:text-xl leading-4"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={1}
                    className="w-full max-w-full lg:w-[551px] bg-transparent border-0 border-b border-white focus:border-white focus:outline-none px-0 py-2 resize-none text-white placeholder:text-white/70 text-base md:text-lg lg:text-xl font-['Manrope',Helvetica]"
                  />
                </div>
              </div>

              <button className="w-full max-w-[200px] md:max-w-[141px] h-[50px] bg-white text-black rounded-[100px] border border-solid border-[#00bfff] hover:bg-white/90 font-medium transition-colors duration-200 font-['Manrope',Helvetica]">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};