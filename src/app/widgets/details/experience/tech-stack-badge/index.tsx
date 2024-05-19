const TechStackBadge = ({ techStack }: { techStack: string }) => {
  return (
    <li className="mr-1.5 mt-2">
      <div className="flex items-center rounded-full bg-teal-400/40 dark:teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-[#112A46] dark:text-slate-200">
        {techStack}
      </div>
    </li>
  );
};

export default TechStackBadge;
