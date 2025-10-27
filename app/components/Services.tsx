import { LuScissors, LuPalette, LuWind, LuFlower2 } from 'react-icons/lu';

const services = [
  {
    icon: LuScissors,
    title: 'Haircuts',
    items: [
      { name: 'Signature Cut + Blowout', price: 85, description: 'Personalized consultation, precision cut, luxury blowout.' },
      { name: 'Bang Trim', price: 20, description: 'Quick refresh between appointments.' },
      { name: 'Gentlemen’s Cut', price: 55, description: 'Classic or modern tailored cut.' },
    ],
  },
  {
    icon: LuPalette,
    title: 'Coloring',
    items: [
      { name: 'Gloss + Toner', price: 95, description: 'Enhance shine and refine tone.' },
      { name: 'Balayage', price: 195, description: 'Sun-kissed dimension with soft, seamless blends.' },
      { name: 'Root Touch-Up', price: 120, description: 'Refresh regrowth and maintain vibrancy.' },
    ],
  },
  {
    icon: LuWind,
    title: 'Styling',
    items: [
      { name: 'Luxury Blowout', price: 65, description: 'Smooth, bouncy finish for any occasion.' },
      { name: 'Event Updo', price: 110, description: 'Elegant styling for special moments.' },
      { name: 'Curls + Waves', price: 80, description: 'Soft, romantic texture with hold.' },
    ],
  },
  {
    icon: LuFlower2,
    title: 'Treatments',
    items: [
      { name: 'Deep Conditioning Ritual', price: 45, description: 'Hydrate and restore softness and shine.' },
      { name: 'Scalp Detox', price: 55, description: 'Purify and balance for healthier growth.' },
      { name: 'Bond Repair', price: 75, description: 'Strengthen and protect compromised hair.' },
    ],
  },
];

export default function Services() {
  return (
    <section id="services" aria-label="Services and pricing" className="py-16">
      <div className="container-section">
        <h2 className="h2">Services</h2>
        <p className="p mt-3 text-black/70">Thoughtfully designed experiences for healthy, beautiful hair.</p>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((category) => (
            <div key={category.title} className="rounded-2xl bg-white/70 ring-1 ring-softGray/60 p-6 backdrop-blur">
              <div className="flex items-center gap-3">
                <category.icon aria-hidden className="text-royalGold text-2xl" />
                <h3 className="h3">{category.title}</h3>
              </div>
              <ul className="mt-4 space-y-3">
                {category.items.map((item) => (
                  <li key={item.name} className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-black/70">{item.description}</p>
                    </div>
                    <span className="shrink-0 font-semibold text-black">${item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
