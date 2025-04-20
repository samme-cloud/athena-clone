
const CTA = () => {
  return (
    <section className="py-16 bg-athena-700">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to transform your healthcare practice?
          </h2>
          <p className="text-lg text-athena-100 mb-8 max-w-2xl mx-auto">
            Join thousands of healthcare providers who have streamlined their operations, improved patient care, and increased revenue with Athena Health.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-athena-700 px-6 py-3 rounded-full font-medium hover:bg-athena-50 transition">
              Request a demo
            </button>
            <button className="bg-transparent text-white border border-white px-6 py-3 rounded-full font-medium hover:bg-athena-600 transition">
              Contact sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
