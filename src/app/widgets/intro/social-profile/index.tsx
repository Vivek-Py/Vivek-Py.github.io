"use client";

import { motion } from "framer-motion";

import RubberBand from "./RubberBand";

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.04 * i },
  }),
};
const child = {
  visible: {
    opacity: 1,
    transition: {
      type: "easein",
      damping: 12,
      stiffness: 200,
      duration: 1,
    },
  },
  hidden: { opacity: 0 },
};

export default function SocialProfile() {
  return (
    <div>
      <motion.ul
        className="ml-1 mt-8 flex items-center"
        aria-label="Social media"
        variants={container}
        initial="hidden"
        whileInView="visible"
      >
        <motion.li variants={child} className="mr-5 text-xs" key="github">
          <a
            className="block hover:text-slate-200 text-[#BCC5D2]"
            href="https://github.com/Vivek-Py"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub (opens in a new tab)"
            title="GitHub"
          >
            <span className="sr-only">GitHub</span>
            <RubberBand viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </RubberBand>
          </a>
        </motion.li>
        <motion.li variants={child} className="mr-5 text-xs" key="linkedin">
          <a
            className="block hover:text-slate-200 text-[#BCC5D2]"
            href="https://www.linkedin.com/in/vivekpandey2000/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn (opens in a new tab)"
            title="LinkedIn"
          >
            <span className="sr-only">LinkedIn</span>
            <RubberBand viewBox="0 0 24 24">
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </RubberBand>
          </a>
        </motion.li>
        <motion.li variants={child} className="mr-5 text-xs" key="portfolio">
          <a
            className="block hover:text-slate-200 text-[#BCC5D2]"
            href="https://blog.vivekpandey.live/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Tech Blogs (opens in a new tab)"
            title="Tech Blogs"
          >
            <span className="sr-only">Tech Blogs</span>
            <RubberBand viewBox="0 0 64 64">
              <g id="Layer_86" data-name="Layer 86">
                <path d="M50.31,32.05a2,2,0,0,0-2,2V52.9a3.16,3.16,0,0,1-3.16,3.16H11.4A3.16,3.16,0,0,1,8.24,52.9V19.15A3.16,3.16,0,0,1,11.4,16H30.25a2,2,0,0,0,0-4H11.4a7.17,7.17,0,0,0-7.16,7.16V52.9a7.17,7.17,0,0,0,7.16,7.16H45.15a7.17,7.17,0,0,0,7.16-7.16V34.05A2,2,0,0,0,50.31,32.05Z"></path>
                <path d="M58,6.27h0l-1-.94a5.34,5.34,0,0,0-7.55.37,5.27,5.27,0,0,0-.81,1.23,2,2,0,0,0-.87-.16,2,2,0,0,0-1.38.65L24.91,31.08a2,2,0,0,0-.48,1l-2,9.83A2,2,0,0,0,25,44.17l9.59-2.9a2,2,0,0,0,.9-.57L57,17a2,2,0,0,0,.27-2.29A5.27,5.27,0,0,0,58,6.27ZM52.39,8.38a1.34,1.34,0,0,1,.93-.44h.07a1.34,1.34,0,0,1,.9.35l1,.94a1.34,1.34,0,0,1-.84,2.33,1.38,1.38,0,0,1-1-.34l-.37-.33-.67-.61A1.34,1.34,0,0,1,52.39,8.38ZM32.91,37.6,27,39.37l1.2-6L48,11.59,50.61,14l.21.19h0l1.82,1.65Z"></path>
              </g>
            </RubberBand>
          </a>
        </motion.li>
        <motion.li variants={child} className="mr-5 text-xs" key="twitter">
          <a
            className="block hover:text-slate-200 text-[#BCC5D2]"
            href="https://twitter.com/gobbledgeek?lang=en"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Twitter (opens in a new tab)"
            title="Twitter"
          >
            <span className="sr-only">Twitter</span>
            <RubberBand viewBox="0 0 248 204">
              <path
                id="white_background"
                d="M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04   C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66   c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64   c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76   c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26   c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"
              ></path>
            </RubberBand>
          </a>
        </motion.li>
        <motion.li variants={child} className="mr-5 text-xs" key="podcast">
          <a
            className="block hover:text-slate-200 text-[#BCC5D2]"
            href="https://podcasters.spotify.com/pod/show/vivek-py"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Spotify Podcast (opens in a new tab)"
            title="Spotify Podcast"
          >
            <span className="sr-only">Spotify Podcast</span>
            <RubberBand viewBox="0 0 512 512">
              <path d="m256 0c-140.960938 0-256 115.050781-256 256 0 140.960938 115.050781 256 256 256 140.960938 0 256-115.050781 256-256 0-140.960938-115.050781-256-256-256zm0 482c-124.617188 0-226-101.382812-226-226s101.382812-226 226-226 226 101.382812 226 226-101.382812 226-226 226zm0 0"></path>
              <path d="m99.066406 148.667969 5.195313 29.546875c109.394531-19.234375 220.378906-4.640625 317.398437 37.136718l11.863282-27.550781c-102.253907-44.035156-219.179688-59.402343-334.457032-39.132812zm0 0"></path>
              <path d="m103.832031 239.34375-.765625.152344 5.890625 29.417968.757813-.152343c95.839844-19.128907 197.550781-7.15625 286.394531 33.710937l12.535156-27.253906c-94.550781-43.496094-202.796875-56.238281-304.8125-35.875zm0 0"></path>
              <path d="m129.703125 326.050781 5.277344 29.53125c73.082031-13.058593 147.707031-4.347656 215.808593 25.203125l11.941407-27.523437c-73.539063-31.902344-154.121094-41.3125-233.027344-27.210938zm0 0"></path>
            </RubberBand>
          </a>
        </motion.li>
      </motion.ul>
    </div>
  );
}
