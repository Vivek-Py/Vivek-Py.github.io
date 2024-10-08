import RenderPlanet from "../canvas/RenderPlanet";

export default function Bio() {
  return (
    <div>
      <h1 className="text-4xl font-bold tracking-tight text-[#112A46] dark:text-[#BCC5D2] sm:text-5xl">
        Vivek Pandey
      </h1>
      <h2 className="mt-3 text-lg font-medium tracking-tight text-[#112A46] dark:text-[#BCC5D2] sm:text-xl">
        Software Engineer at Flipkart
      </h2>
      <p className="mt-4 max-w-xs leading-normal text-[#112A46] dark:text-[#BCC5D2]">
        Web developer who loves to build apps which&apos;ll help millions, if
        not billions.
      </p>
    </div>
  );
}
