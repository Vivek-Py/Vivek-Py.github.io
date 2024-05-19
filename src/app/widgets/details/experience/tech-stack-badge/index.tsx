const TechStackBadge = ({ techStack }: { techStack: string }) => {
  return (
    <li className="mr-1.5 mt-2">
      <div className="flex items-center rounded-full bg-teal-400/40 px-3 py-1 text-xs font-medium leading-5 text-[#112A46] dark:text-[#BCC5D2]">
        {techStack}
      </div>
    </li>
  );
};

export default TechStackBadge;
