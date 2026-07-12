import { SectionHeading } from "@/components/ui/SectionHeading";

const features = [
  {
    title: "Hall details",
    description:
      "Show capacity, amenities, parking, stage setup, and accessibility.",
  },
  {
    title: "Image gallery",
    description:
      "Present weddings, receptions, and corporate events with rich visuals.",
  },
  {
    title: "Booking workflow",
    description:
      "Allow customers to book dates, add services, and estimate costs.",
  },
  {
    title: "Admin control",
    description:
      "Manage bookings, customers, invoices, availability, and reports.",
  },
  {
    title: "Notifications",
    description: "Send confirmations, reminders, and cancellation updates.",
  },
  {
    title: "Maps + directions",
    description:
      "Help guests find the venue easily with integrated location support.",
  },
];

export function FeaturesSection() {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 sm:p-10">
      <SectionHeading
        eyebrow="Platform Features"
        title="A complete digital ecosystem for event booking and operations"
        description="The product is designed to support both customer-facing booking and internal operations."
      />

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h3 className="text-xl font-semibold text-white">
              {feature.title}
            </h3>
            <p className="mt-3 text-slate-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
