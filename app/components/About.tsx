import Image from 'next/image';

const stylists = [
  {
    name: 'Sophia Chen',
    role: 'Master Stylist',
    bio: 'Specializes in precision cuts and soft dimensional color.',
    photo: '/images/stylist1.svg',
  },
  {
    name: 'Elena Rossi',
    role: 'Color Specialist',
    bio: 'Expert in balayage, lived-in blondes, and glossing.',
    photo: '/images/stylist2.svg',
  },
  {
    name: 'Maya Patel',
    role: 'Texture Artist',
    bio: 'Loves curls, waves, and healthy hair treatments.',
    photo: '/images/stylist3.svg',
  },
];

export default function About() {
  return (
    <section id="about" aria-label="About Aurora Salon" className="py-16 bg-blushPink/10">
      <div className="container-section">
        <h2 className="h2">About Us</h2>
        <p className="p mt-3 max-w-3xl">
          Our mission is to celebrate feminine elegance through thoughtful artistry and intentional care. We value inclusivity, sustainability, and the confidence that comes from feeling your best.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {stylists.map((s) => (
            <article key={s.name} className="rounded-2xl bg-white/70 ring-1 ring-softGray/60 p-6 backdrop-blur">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image src={s.photo} alt={`${s.name}, ${s.role}`} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
              </div>
              <h3 className="h3 mt-4">{s.name}</h3>
              <p className="font-semibold text-black/80">{s.role}</p>
              <p className="p mt-2 text-sm">{s.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
