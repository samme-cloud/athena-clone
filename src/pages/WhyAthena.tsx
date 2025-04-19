import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// Placeholder for company logos mentioned in text
const CompanyLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-athena-green hover:underline">
    {children}
  </a>
);

const WhyAthena = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-grow section-padding">
        <div className="athena-container max-w-3xl mx-auto">
          {/* Page Title */}
          <h1 className="font-display text-display-2 text-center mb-12 text-white">
            Why Athena
          </h1>
          
          {/* Content Area */}
          <div className="prose prose-invert prose-lg max-w-none space-y-6 text-gray-300">
            {/* Use prose utilities for nice text formatting */}
            <p>
              Hi, this is Robert and Jonathan, co-founders of Athena. Over the last decade, we've helped build <CompanyLink href="#">Thumbtack</CompanyLink> and <CompanyLink href="#">TaskUs</CompanyLink> to teams of 25,000 people and $6B in marketplace volume.
            </p>
            <p>
              Having been through every stage of a startup, we can tell you that the people who appear most successful are the ones best at leveraging the talents of an extraordinary team.
            </p>
            <p>
              Athena is yours.
            </p>
            <p>
              Our secret weapon in growing companies was developing a deep partnership with Jam and Marni, our Executive Assistants. They don't just save us time; they gives us massive leverage. They help recruit talent, manage our inboxes, build deeper relationships with friends, hit our work and personal goals. In short, our assistants help us win – both work and life.
            </p>
            
            <h3 className="text-heading-3 text-white pt-6">Why Athena?</h3>
            <p>
              Athena is a decade's worth of learning on how to delegate for 10x leverage. We offer:
            </p>
            
            <ol className="list-decimal list-outside space-y-4 pl-5">
              <li>
                <strong className="text-white">Recruiting:</strong> We have interviewed over 500,000 assistants from around the world and have developed a best in class recruiting process and matching algorithm. We find people with raw potential rather than people who simply have experience. We source assistants who are excited to build a long-term relationship, and we only want clients who are equally long-term focused.
              </li>
              {/* Add points 2 and 3 here if available */}
              {/* Example:
              <li>
                <strong className="text-white">Training:</strong> We provide extensive training...
              </li>
              <li>
                <strong className="text-white">AI Integration:</strong> We leverage AI...
              </li>
              */}
            </ol>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WhyAthena; 