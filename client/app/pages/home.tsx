import {
  FAQSection,
  Footer,
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
      <Footer />
    </div>
  );
};

export default Home;
