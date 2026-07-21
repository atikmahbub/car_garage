export const siteConfig = {
  name: "A & R Garage",
  phone: {
    e164: "+447899261546",
    display: "+44 7899 261546",
    whatsappUrl: "https://wa.me/447899261546",
  },
  email: "bookings@argarage.uk",
  address: {
    locality: "Nottingham",
    country: "United Kingdom",
    countryCode: "GB",
  },
  hours: [
    {
      label: "Mon – Fri",
      shortLabel: "Mon–Fri",
      opens: "08:00",
      closes: "18:00",
      schemaDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    },
    {
      label: "Saturday",
      shortLabel: "Sat",
      opens: "08:30",
      closes: "16:00",
      schemaDays: ["Saturday"],
    },
  ],
  services: [
    "Short Service",
    "Full Service",
    "MOT Testing",
    "Brakes",
    "Suspension",
    "Electrical",
    "Transmission & Clutch",
    "Lighting",
  ],
} as const;

export function formatHour(t: string) {
  return t.replace(/^0/, "");
}
