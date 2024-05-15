import Bio from "./bio";
import RenderPlanet from "./canvas/RenderPlanet";
import NavLinks from "./nav-links";
import SocialProfile from "./social-profile";

export default function Intro() {
  return (
    <section className="lg:sticky lg:top-20">
      <Bio />
      <RenderPlanet />
      <NavLinks />
      <SocialProfile />
    </section>
  );
}
