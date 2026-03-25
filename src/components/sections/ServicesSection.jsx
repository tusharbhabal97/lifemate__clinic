import DotCluster from "../shared/DotCluster";

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 20.5s-7.5-4.4-9.5-8.6C.8 8.3 2.3 5.4 5 4.6c2-.6 4.1.2 5.2 1.8C11.3 4.8 13.4 4 15.4 4.6c2.7.8 4.2 3.7 2.5 7.3-2 4.2-9.5 8.6-9.5 8.6z" />
  </svg>
);

const VascularIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 4c2 1.4 3.5 3.2 4 5.5.7 3.1-1.4 5.2-1.4 7.6 0 1.6 1 2.9 2.4 3.9" />
    <path d="M14 4c-2 1.4-3.5 3.2-4 5.5-.7 3.1 1.4 5.2 1.4 7.6 0 1.6-1 2.9-2.4 3.9" />
    <path d="M17.5 7.5c1.8 2.2 2.2 4.6 1.1 7.2-1.1 2.6-3.2 3.9-5.6 4.8" />
  </svg>
);

const DiabetesIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2c2.5 3 6 6.1 6 10a6 6 0 1 1-12 0c0-3.9 3.5-7 6-10z" />
    <path d="M9.5 13.2c.8 1.3 2.2 2.1 3.7 2.1" />
  </svg>
);

const GeneralIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 12h7" />
    <path d="M9 7v10" />
    <path d="M14.5 8.5a2.5 2.5 0 1 1 3 3l-2.5 2.5a2.5 2.5 0 1 1-3-3z" />
  </svg>
);

const categories = [
  {
    title: "Cardiac Care",
    icon: HeartIcon,
    services: [
      {
        title: "ECG (Electrocardiogram)",
        text: "Resting ECG for rhythm assessment, chest pain evaluation, and baseline cardiac screening.",
      },
      {
        title: "2D Echo",
        text: "Ultrasound-based assessment of heart structure, valve function, and pumping efficiency.",
      },
      {
        title: "Stress Test (TMT)",
        text: "Treadmill exercise testing to evaluate effort tolerance and ischemia-related symptoms.",
      },
      {
        title: "Hypertension Management",
        text: "Personalized blood pressure control plans with medication review and lifestyle guidance.",
      },
      {
        title: "Heart Failure Management",
        text: "Symptom monitoring, medication optimization, and follow-up care for chronic heart failure.",
      },
      {
        title: "Preventive Cardiology",
        text: "Risk assessment for cholesterol, diabetes, and family history with prevention strategies.",
      },
    ],
  },
  {
    title: "Vascular Care",
    icon: VascularIcon,
    services: [
      {
        title: "Varicose Vein Evaluation",
        text: "Clinical assessment for visible veins, heaviness, cramps, and skin changes.",
      },
      {
        title: "Endovenous Laser Therapy (EVLT)",
        text: "Minimally invasive laser treatment to close diseased veins and improve circulation.",
      },
      {
        title: "Sclerotherapy",
        text: "Injection treatment for small varicose and spider veins to reduce appearance and symptoms.",
      },
      {
        title: "Venous Doppler Ultrasound",
        text: "Imaging to map vein reflux and guide treatment planning for venous disease.",
      },
      {
        title: "Leg Swelling & Pain Management",
        text: "Evaluation for venous insufficiency with compression and symptom relief plans.",
      },
      {
        title: "Spider Vein Treatment",
        text: "Targeted care for superficial veins with cosmetic and comfort-focused outcomes.",
      },
    ],
  },
  {
    title: "Diabetic Care",
    icon: DiabetesIcon,
    services: [
      {
        title: "Diabetes Diagnosis & Monitoring",
        text: "Evaluation with HbA1c, fasting, and post-meal glucose to guide treatment.",
      },
      {
        title: "Blood Sugar Management",
        text: "Medication planning, glucose targets, and follow-up tracking for safe control.",
      },
      {
        title: "Diabetic Neuropathy Care",
        text: "Assessment of tingling, numbness, and pain with symptom-directed care.",
      },
      {
        title: "Diabetic Foot Care",
        text: "Foot screening, wound prevention, and referral support for ulcers when needed.",
      },
      {
        title: "Diet & Lifestyle Counseling",
        text: "Personalized nutrition, activity, and weight guidance to support glucose control.",
      },
    ],
  },
  {
    title: "General Medicine",
    icon: GeneralIcon,
    services: [
      {
        title: "General Physician Consultation",
        text: "Comprehensive evaluation for day-to-day medical concerns and chronic conditions.",
      },
      {
        title: "Fever & Infection Treatment",
        text: "Assessment and treatment for acute infections, viral illness, and fever care.",
      },
      {
        title: "Blood Pressure Monitoring",
        text: "Routine checks, tracking, and counseling for lifestyle and medication adherence.",
      },
      {
        title: "Preventive Health Checkups",
        text: "Age- and risk-based screenings to identify health issues early.",
      },
      {
        title: "Routine Blood Tests",
        text: "Lab coordination for CBC, lipid profile, sugar testing, and basic metabolic panels.",
      },
      {
        title: "Vaccination Services",
        text: "Adult immunizations and preventive vaccine guidance based on age and risk.",
      },
    ],
  },
];

function ServiceCard({ title, text, Icon }) {
  return (
    <article className="rounded-[22px] border-2 border-[#9ed9fa] bg-[#f3f8fc] p-7 shadow-[0_12px_24px_rgba(0,0,0,0.05)]">
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#deefff] text-[#0084d4]">
        <Icon />
      </div>
      <h4 className="text-[22px] font-semibold leading-snug text-[#0069ab]">{title}</h4>
      <p className="mt-3 text-[15px] leading-7 text-[#5d5d5d]">{text}</p>
    </article>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="relative bg-[#edf3f7] py-20">
      <DotCluster className="absolute left-20 top-20" />
      <div className="mx-auto w-full max-w-[1320px] px-5 lg:px-6">
        <h3 className="text-center text-[36px] font-bold text-[#3d3d3d] md:text-[46px] lg:text-[56px]">
          Multi-specialty <span className="text-[#2cbeff]">clinical services</span> we offer
        </h3>
        <p className="mx-auto mt-6 max-w-[960px] text-center text-[16px] leading-8 text-[#888888]">
          Lifemate Clinic provides coordinated cardiac, vascular, diabetic, and general medical services for patients in JM Road, Deccan Gymkhana, and nearby Pune areas.
        </p>

        <div className="mt-12 space-y-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.title}>
                <div className="flex items-center justify-center gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#deefff] text-[#0084d4]">
                    <Icon />
                  </span>
                  <h4 className="text-center text-[26px] font-semibold text-[#0069ab] md:text-[32px]">{category.title}</h4>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {category.services.map((service) => (
                    <ServiceCard key={service.title} {...service} Icon={Icon} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
