import SectionHeading from "@/components/SectionHeading";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { Reveal } from "@/hooks/use-scroll-reveal";
import beforeLabImg from "@/assets/before-lab.jpg";
import afterLabImg from "@/assets/after-lab.jpg";

const BeforeAfterSection = () => (
  <section className="py-24 lg:py-32 bg-card">
    <div className="container mx-auto px-4 lg:px-8">
      <Reveal>
        <SectionHeading badge="Transformation" title="See the Difference" subtitle="From empty space to fully equipped laboratory — our turnkey installation results" />
      </Reveal>
      <div className="max-w-3xl mx-auto">
        <Reveal delay={200}>
          <BeforeAfterSlider
            before={beforeLabImg}
            after={afterLabImg}
            beforeLabel="Before Installation"
            afterLabel="After Installation"
          />
        </Reveal>
        <Reveal delay={400}>
          <p className="text-center text-muted-foreground text-sm mt-6">
            Drag the slider to compare — complete lab setup by I-Lab Engineering
          </p>
        </Reveal>
      </div>
    </div>
  </section>
);

export default BeforeAfterSection;
