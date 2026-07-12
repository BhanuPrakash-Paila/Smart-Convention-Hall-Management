import { SectionHeading } from "@/components/ui/SectionHeading";

const benefits = [
  {
    title: "Real-time booking",
    description:
      "Customers see availability instantly and avoid manual back-and-forth.",
  },
  {
    title: "Fewer errors",
    description:
      "Centralized records reduce double-booking and scheduling mistakes.",
  },
  {
    title: "Faster confirmations",
    description:
      "Automated reminders and alerts improve communication and trust.",
  },
  {
    title: "Scalable operations",
    description:
      "Built to grow into a full business management platform over time.",
  },
];

export function BenefitsSection() {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 sm:p-10">
      <SectionHeading
        eyebrow="Business Benefits"
        title="A practical digital solution for hall owners and customers"
        description="This platform turns a traditional booking process into a reliable, modern experience."
      />

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {benefits.map((benefit) => (
          <div
            key={benefit.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h3 className="text-xl font-semibold text-white">
              {benefit.title}
            </h3>
            <p className="mt-3 text-slate-300">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
