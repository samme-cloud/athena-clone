import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Love = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-grow section-padding">
        <div className="athena-container text-center">
          <h1 className="font-display text-display-2 mb-6 text-white">
            Athena Love ❤️
          </h1>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            This section will showcase testimonials, case studies, or other content demonstrating the positive impact of Athena. Content coming soon!
          </p>
          {/* You can add relevant components or content here later */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Love; 