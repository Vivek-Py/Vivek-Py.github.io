export default function NavLinks() {
  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        <li key="about">
          <a className="group flex items-center py-3" href="#about">
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-group-hover:text-[#112A46]:dark:text-[#BCC5D2] dark:text-[#BCC5D2] group-focus-visible:w-16 group-focus-visible:text-[#112A46] motion-reduce:transition-none"></span>
            <div className="nav-text text-xs font-bold uppercase tracking-widest text-[#112A46] group-group-hover:text-[#112A46]:dark:text-[#BCC5D2] dark:text-[#BCC5D2] group-focus-visible:text-[#112A46]">
              About
            </div>
          </a>
        </li>
        <li key="experience">
          <a className="group flex items-center py-3 active" href="#experience">
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-group-hover:text-[#112A46]:dark:text-[#BCC5D2] dark:text-[#BCC5D2] group-focus-visible:w-16 group-focus-visible:text-[#112A46] motion-reduce:transition-none"></span>
            <div className="nav-text text-xs font-bold uppercase tracking-widest text-[#112A46] group-group-hover:text-[#112A46]:dark:text-[#BCC5D2] dark:text-[#BCC5D2] group-focus-visible:text-[#112A46]">
              Experience
            </div>
          </a>
        </li>
        {/* <li key="projects">
          <a className="group flex items-center py-3" href="#projects">
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-group-hover:text-[#112A46]:dark:text-[#BCC5D2] dark:text-[#BCC5D2] group-focus-visible:w-16 group-focus-visible:text-[#112A46] dark:text-[#BCC5D2] motion-reduce:transition-none"></span>
            <div className="nav-text text-xs font-bold uppercase tracking-widest text-[#112A46] dark:text-[#BCC5D2] group-group-hover:text-[#112A46]:dark:text-[#BCC5D2] dark:text-[#BCC5D2] group-focus-visible:text-[#112A46] dark:text-[#BCC5D2]">
              Projects
            </div>
          </a>
        </li> */}
      </ul>
    </nav>
  );
}
