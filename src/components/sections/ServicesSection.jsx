import DotCluster from "../shared/DotCluster";

const services = [
  {
    title: "Cardiology Consultation",
    text: "Detailed heart health evaluation for symptoms like chest discomfort, breathlessness, palpitations, and fatigue.",
  },
  {
    title: "Preventive Heart Check-ups",
    text: "Risk-focused screening for blood pressure, cholesterol, diabetes, lifestyle, and family history to prevent cardiac events.",
  },
  {
    title: "Hypertension Management",
    text: "Structured blood pressure care plans with medication optimization, follow-up tracking, and long-term control guidance.",
  },
  {
    title: "ECG & Rhythm Guidance",
    text: "Clinical interpretation support for ECG and rhythm-related concerns with treatment planning for safer heart monitoring.",
  },
  {
    title: "Cholesterol & Risk Care",
    text: "Evidence-based lipid and cardiovascular risk reduction programs for patients with diabetes or high-risk profiles.",
  },
];

function ServiceCard({ title, text, twoCol = false }) {
  return (
    <article className="rounded-[24px] border-2 border-[#9ed9fa] bg-[#f3f8fc] p-10 shadow-[0_12px_24px_rgba(0,0,0,0.05)]">
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#deefff] text-[#0084d4]">▣</div>
      <h4 className={`${twoCol ? "text-[38px]" : "text-[40px]"} font-semibold leading-tight text-[#0069ab]`}>{title}</h4>
      <p className="mt-4 text-[16px] leading-8 text-[#5d5d5d]">{text}</p>
    </article>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="relative bg-[#edf3f7] py-20">
      <DotCluster className="absolute left-20 top-20" />
      <div className="mx-auto w-full max-w-[1320px] px-5 lg:px-6">
        <h3 className="text-center text-[36px] font-bold text-[#3d3d3d] md:text-[46px] lg:text-[56px]">
          Top <span className="text-[#2cbeff]">cardiac services</span> we offer
        </h3>
        <p className="mx-auto mt-6 max-w-[900px] text-center text-[16px] leading-8 text-[#888888]">
          Lifemate Clinic provides focused cardiology and preventive healthcare services for patients in JM Road, Deccan Gymkhana, and nearby Pune areas.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-7 lg:grid-cols-2">
          {services.slice(0, 2).map((s) => (
            <ServiceCard key={s.title} {...s} twoCol />
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(2).map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
