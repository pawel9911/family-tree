import {
  FAQSection,
  HeroSection,
  HowItWorksSection,
  TestimonialsSection,
  WhyUsSection,
} from "~/features/landing";

const Home = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <WhyUsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FAQSection />
    </div>
  );
};

export default Home;
