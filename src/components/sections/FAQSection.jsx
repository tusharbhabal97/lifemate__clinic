const faqs = [
  {
    q: "Where is Lifemate Clinic located in Pune?",
    a: "Lifemate Clinic is located at Flat No.104, Samadhan Apartments, Good Luck Square, beside The Oakwood Hotel, Deccan Gymkhana, Bhandarkar Road, Pune 411004.",
  },
  {
    q: "Who is the specialist at Lifemate Clinic?",
    a: "Dr. Swapnil Mate, Interventional Cardiologist, consults at Lifemate Clinic for preventive heart care and cardiac risk management.",
  },
  {
    q: "How can I book an appointment at Lifemate Clinic?",
    a: "You can request an appointment by phone on +91 84596 12363, through the website form, or by contacting the clinic help desk.",
  },
  {
    q: "What services are available at Lifemate Clinic?",
    a: "Core services include cardiology consultation, preventive heart check-ups, hypertension management, ECG/rhythm guidance, and cholesterol risk care.",
  },
];

export default function FAQSection() {
  return (
    <section className="bg-[#edf3f7] py-20" id="faq">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-6">
        <h2 className="text-center text-[56px] font-bold text-[#3d3d3d]">
          Frequently Asked <span className="text-[#2cbeff]">Questions</span>
        </h2>
        <p className="mx-auto mt-5 max-w-[900px] text-center text-[16px] leading-8 text-[#888888]">
          Common patient queries about location, appointments, and cardiac consultation at Lifemate Clinic.
        </p>

        <div className="mt-10 grid gap-5">
          {faqs.map((item) => (
            <article key={item.q} className="rounded-2xl border-2 border-[#9ed9fa] bg-[#f3f8fc] p-6">
              <h3 className="text-[24px] font-semibold text-[#0069ab]">{item.q}</h3>
              <p className="mt-3 text-[16px] leading-8 text-[#5d5d5d]">{item.a}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
