"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-4/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <Link href="/" className="mb-8 inline-block">
                  <Image
                    src="/images/logo/logoLightMode.png"
                    alt="logo"
                    className="w-full dark:hidden"
                    width={140}
                    height={30}
                  />
                  <Image
                    src="/images/logo/logoDarkMode.png"
                    alt="logo"
                    className="hidden w-full dark:block"
                    width={140}
                    height={30}
                  />
                </Link>
                <p className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  We build customized Websites, e-commerce portal, Personal or
                  Business portfolio and management solutions.
                </p>
                <div className="flex items-center">
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=sr.raghib@gmail.com"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000000"
                      width="18px"
                      height="18px"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M32 6v20c0 1.135-0.865 2-2 2h-2v-18.151l-12 8.62-12-8.62v18.151h-2c-1.135 0-2-0.865-2-2v-20c0-0.568 0.214-1.068 0.573-1.422 0.359-0.365 0.859-0.578 1.427-0.578h0.667l13.333 9.667 13.333-9.667h0.667c0.568 0 1.068 0.214 1.427 0.578 0.359 0.354 0.573 0.854 0.573 1.422z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/shahariarraghib"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18px"
                      height="18px"
                      viewBox="0 0 20 20"
                      version="1.1"
                    >
                      <title>github [#142]</title>
                      <desc>Created with Sketch.</desc>
                      <defs></defs>
                      <g
                        id="Page-1"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <g
                          id="Dribbble-Light-Preview"
                          transform="translate(-140.000000, -7559.000000)"
                          fill="#000000"
                        >
                          <g
                            id="icons"
                            transform="translate(56.000000, 160.000000)"
                          >
                            <path
                              d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                              fill="currentColor"
                              id="github-[#142]"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </a>
                  <a
                    href="https://shahariar-bhuiyan.vercel.app/"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000000"
                      width="18px"
                      height="18px"
                      viewBox="0 0 32 32"
                      version="1.1"
                    >
                      <title>link</title>
                      <path
                        d="M11.586 22.135c-0.82 0.783-1.934 1.265-3.16 1.265-1.225 0-2.338-0.481-3.159-1.265l0.002 0.002c-0.807-0.809-1.306-1.926-1.306-3.16s0.499-2.35 1.306-3.16l4.492-4.492c0.808-0.808 1.925-1.308 3.159-1.308 2.467 0 4.467 2 4.467 4.467 0 1.234-0.5 2.351-1.309 3.159v0c-0.226 0.226-0.366 0.539-0.366 0.884 0 0.69 0.56 1.25 1.25 1.25 0.345 0 0.658-0.14 0.884-0.366v0c1.261-1.261 2.041-3.003 2.041-4.927 0-3.848-3.119-6.967-6.967-6.967-1.924 0-3.665 0.78-4.926 2.040l-4.492 4.492c-1.256 1.26-2.033 2.999-2.033 4.919 0 3.848 3.119 6.968 6.968 6.968 1.92 0 3.658-0.776 4.918-2.032l-0 0c0.227-0.226 0.367-0.539 0.367-0.885 0-0.691-0.56-1.251-1.251-1.251-0.345 0-0.658 0.14-0.884 0.366v0zM28.5 8.097c-1.277-1.221-3.013-1.973-4.924-1.973s-3.646 0.752-4.927 1.976l0.003-0.003c-0.226 0.226-0.366 0.539-0.366 0.884 0 0.691 0.56 1.251 1.251 1.251 0.346 0 0.658-0.14 0.885-0.367v0c0.819-0.783 1.931-1.264 3.155-1.264s2.337 0.482 3.157 1.266l-0.002-0.002c0.807 0.808 1.307 1.923 1.307 3.155s-0.499 2.348-1.307 3.155l-4.486 4.487c-0.809 0.816-1.93 1.322-3.17 1.322-2.465 0-4.463-1.998-4.463-4.463 0-1.239 0.505-2.36 1.32-3.168l0-0c0.226-0.226 0.366-0.539 0.366-0.884 0-0.69-0.56-1.25-1.25-1.25-0.345 0-0.658 0.14-0.884 0.366v0c-1.26 1.26-2.039 3.001-2.039 4.923 0 3.846 3.117 6.963 6.963 6.963 1.923 0 3.664-0.779 4.924-2.040l4.488-4.489c1.257-1.261 2.034-3.001 2.034-4.922s-0.778-3.663-2.037-4.924l0 0z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/shahariar-bhuiyan/"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      className="fill-current"
                    >
                      <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Useful Links
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/blog"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      About Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Our Services
                </h2>
                <ul>
                  <li>
                    <Link
                      href="#features"
                      className="mb-4 inline-block text-base lowercase text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      WEB DEVELOPMENT
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#features"
                      className="mb-4 inline-block text-base lowercase text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      GAME DEVELOPMENT
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#features"
                      className="mb-4 inline-block text-base lowercase text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      INVENTORY MANAGEMENT
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#features"
                      className="mb-4 inline-block text-base lowercase text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      ERP
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#features"
                      className="dark:hover:text-primarys mb-4 inline-block text-base lowercase text-body-color duration-300 hover:text-primary dark:text-body-color-dark"
                    >
                      APPLICATION DEVELOPMENT
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#features"
                      className="mb-4 inline-block text-base lowercase text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      CREATIVE MARKETING
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Support & Help
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Career
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Support
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
          <div className="py-8">
            <p className="text-center text-base text-body-color dark:text-white">
              Template by{" "}
              <a
                href="https://shahariar-bhuiyan.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                Shahariar Bhuiyan
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
