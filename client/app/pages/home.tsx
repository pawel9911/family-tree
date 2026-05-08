import {
  FAQSection,
  HeroSection,
  HowItWorksSection,
  TestimonialsSection,
} from "~/features/landing";

const Home = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FAQSection />
    </div>
  );
};

export default Home;
