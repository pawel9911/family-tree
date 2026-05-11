import {
  FAQSection,
  Footer,
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
      <Footer />
    </div>
  );
};

export default Home;
