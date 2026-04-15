import { FAQAccordion } from "@/components/FAQAccordion";

export default function FAQPage() {
  return (
    <div className="pb-20">
      <section className="hero" style={{ minHeight: "250px", display: "flex", alignItems: "center" }}>
        <div className="container-xl">
          <h1 className="hero-title">Common <span>Questions</span></h1>
          <p className="hero-sub">Find answers to the most frequently asked questions about our clinic and treatments.</p>
        </div>
      </section>

      <div style={{ marginTop: "-2rem" }}>
        <FAQAccordion />
      </div>

      <section className="section">
        <div className="container-xl">
          <div className="bg-navy-900 rounded-2xl p-8 text-center text-white" style={{ background: "#0a1628" }}>
            <h2 className="text-heading text-white" style={{ fontSize: "1.6rem" }}>Still Have Questions?</h2>
            <p className="mt-4" style={{ color: "rgba(255,255,255,0.7)", maxWidth: 600, margin: "1rem auto" }}>
              Our support team is available to help you with any queries regarding appointments, treatments, or online consultations.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <a href="tel:+919936604444" className="btn-book" style={{ background: "#fff", color: "#dc2626" }}>Call Us Now</a>
              <a href="https://wa.me/919936604444" className="btn-book">WhatsApp Us</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
