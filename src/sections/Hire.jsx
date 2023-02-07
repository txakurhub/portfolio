import emailjs from "emailjs-com";
import { useState } from "react";
const Swal = require("sweetalert2");

const Hire = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const sendMessage = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ew0zxeg",
        "template_u0xvu1k",
        e.target,
        "_9wk7jfdyVQ2D1HNw"
      )
      .then((res) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Message sent successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(res);
        setState({
          name: "",
          email: "",
          message: "",
        });
      });
  };

  return (
    <div class="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full xl:ml-8">
      <section class="w-full">
        <h2 class="secondary-title">Send me a message</h2>
        <p id="contact" class="section-paragraph">
          Feel free to to contact me any time, through any method below.
        </p>

        <div class="w-full grid lg:grid-cols-2 gap-4 lg:gap-32 mt-18">
          <form class="space-y-8" onSubmit={sendMessage}>
            <div>
              <label class="text-white block mb-2 text-xl font-bold">
                Name
              </label>
              <input
                class="w-full border border-input-border bg-input px-3 py-2"
                type="text"
                name="name"
                onChange={handleChange}
                value={state.name}
              />
            </div>
            <div>
              <label class="text-white block mb-2 text-xl font-bold">
                Email
              </label>
              <input
                type="email"
                name="email"
                class="w-full border border-input-border bg-input px-3 py-2"
                onChange={handleChange}
                value={state.email}
              />
            </div>
            <div>
              <label class="text-white block mb-2 text-xl font-bold">
                Message
              </label>
              <textarea
                type="text"
                name="message"
                class="w-full border border-input-border bg-input px-3 py-2 h-56 resize-none"
                onChange={handleChange}
                value={state.message}
              ></textarea>
            </div>
            <button
              class="px-6 py-2 bg-theme text-white font-bold"
              type="sumbit"
            >
              Send it!
            </button>
          </form>

          <div class="mt-12">
            {/* <!-- Contact info --> */}
            <p class="text-secondary">Email me!</p>
            <a
              href="mailto:me.leandrop@gmail.com"
              class="text-secondary underline mt-3 block"
            >
              me.leandrop@gmail.com
            </a>

            {/* <!-- Socials --> */}
            <div class="flex mt-20 space-x-6">
              {/* <!-- Linkedin --> */}
              <a
                href="https://www.linkedin.com/in/leandro-pereyra/"
                class="hover:opacity-50 hover:duration-500"
              >
                <svg class="w-8 h-8  lg:w-12 lg:h-12" viewBox="0 0 128 128">
                  <path
                    fill="#0076b2"
                    d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"
                  ></path>
                </svg>
              </a>
              {/* <!-- Github --> */}
              <a
                href="https://www.github.com/txakurhub"
                class="hover:opacity-50 hover:duration-500"
              >
                <i class="devicon-github-original text-white text-5xl"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hire;
