import {
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
    </div>
  );
};

export default Home;
