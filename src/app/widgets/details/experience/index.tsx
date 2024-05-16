import TechStackBadge from "./tech-stack-badge";
import { getExperienceData, getTechStack } from "./utils";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 md:w-auto">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Experience
        </h2>
      </div>
      <div>
        <ol className="group/list">
          {getExperienceData().map((exp, _idx) => {
            return (
              <li className="mb-12" key={exp.company}>
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <header
                    className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:col-span-2"
                    aria-label={exp.timeline}
                  >
                    {exp.timeline}
                  </header>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200">
                      <div>
                        <a
                          className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                          href={exp.companyWebsite}
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label={`${exp.role} at ${exp.company} (opens in a new tab)`}
                        >
                          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                          <span>
                            {exp.role} ·&nbsp;
                            <span className="inline-block">
                              {exp.company}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </span>
                          </span>
                        </a>
                      </div>
                    </h3>
                    <p className="mt-2 text-sm leading-normal text-[#BCC5D2]">
                      {exp.responsibility}
                    </p>
                    <ul
                      className="mt-2 flex flex-wrap"
                      aria-label="Related links"
                    >
                      {exp?.projectLinks?.map((project) => {
                        return (
                          <li className="mr-4" key={project.name}>
                            <a
                              className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
                              href={project.link}
                              target="_blank"
                              rel="noreferrer noopener"
                              aria-label={project.name}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="mr-1 h-3 w-3"
                                aria-hidden="true"
                              >
                                <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path>
                                <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path>
                              </svg>
                              <span>{project.name}</span>
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                    <ul
                      className="mt-2 flex flex-wrap"
                      aria-label="Technologies used"
                    >
                      {getTechStack(exp.company).map((techStack) => {
                        return (
                          <TechStackBadge
                            key={techStack}
                            techStack={techStack}
                          />
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
        {/* <div className="mt-12">
          <a
            className="inline-flex items-baseline font-medium leading-tight hover:text-teal-300 focus-visible:text-teal-300 text-slate-200 group/link text-base"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="View Full Résumé (opens in a new tab)"
          >
            <span>
              View Full{" "}
              <span className="inline-block">
                Résumé
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </span>
          </a>
        </div> */}
      </div>
    </section>
  );
}
