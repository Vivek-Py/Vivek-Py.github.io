export default function AboutMe() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-24 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 md:w-auto">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <div>
        <p className="mb-4 text-slate-400">
          I build new projects just to tickle my brain and love teaching others
          how they&apos;re made. While I keep busy learning, I still take
          interviews in search of a great team & projects that interest me.
        </p>
        <p className="text-slate-400">
          I&apos;ve had the privilege of building software for a{" "}
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="#about"
            rel="noreferrer noopener"
            aria-label="web agency (remains in the same page)"
          >
            web agency
          </a>
          ,{" "}
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="#about"
            rel="noreferrer noopener"
            aria-label="start-up (remains in the same page)"
          >
            start-up
          </a>
          , and a{" "}
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="#about"
            rel="noreferrer noopener"
            aria-label="huge corportaion (remains in the same page)"
          >
            huge corporation
          </a>
          .
        </p>
      </div>
    </section>
  );
}
