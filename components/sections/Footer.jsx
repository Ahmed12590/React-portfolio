import Link from "next/link";
import { GitHub, Instagram, Linkedin } from "react-feather";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer
        id="footer"
        className="container mt-12 lg:mb-8 bg-gray-800 p-12 rounded"
      >
        <div className="flex flex-col items-center">
          <Link href="/">
            <a>
              <Image
                src="/logo.svg"
                alt="Muhammad Ahmed"
                width={250}
                height={40}
              />
            </a>
          </Link>
          <blockquote>
            <p className="text-gray-200 text-2xl font-bold text-center mt-2">
              "The computer was born to solve problems <br /> that did not{" "}
              <span className="text-sky-400 border-b-2 border-sky-400">
                exist before.
              </span>
              "
            </p>
          </blockquote>
          <div className="grid lg:grid-cols-2 mt-24 border-t-2 border-gray-400/10 pt-14">
            <div className="grid lg:grid-cols-2 gap-y-2 justify-between pr-12">
              <Link href="tel:03174723764">
                <a className="flex flex-col gap-2">
                  <small>CALL</small>
                  <p className="text-sky-400 lg:text-xl">+92 3174723764</p>
                </a>
              </Link>
              <Link
                href="mailto:muhammadahmed2525@gmail.com
"
              >
                <a className="flex flex-col gap-2">
                  <small>EMAIL</small>
                  <p className="text-sky-400 lg:text-xl">
                    muhammadahmed2525@gmail.com
                  </p>
                </a>
              </Link>
            </div>

            <ul className="flex gap-x-8 lg:mt-1 mt-4 lg:justify-self-end self-end">
              <li>
                <Link href="https://github.com/Ahmed12590/">
                  <a
                    target="_blank"
                    className="text-sky-400 hover:text-gray-200"
                  >
                    <GitHub size={24} />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/in/ahmed-waseem-184a15177/">
                  <a
                    target="_blank"
                    className="text-sky-400 hover:text-gray-200"
                  >
                    <Linkedin size={24} />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/ahmed_waseem5/">
                  <a
                    target="_blank"
                    className="text-sky-400 hover:text-gray-200"
                  >
                    <Instagram size={24} />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
