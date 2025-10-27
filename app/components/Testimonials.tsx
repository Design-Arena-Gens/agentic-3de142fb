const testimonials = [
  {
    name: 'Amelia R.',
    text: 'The most luxurious salon experience! My color has never looked better.',
  },
  {
    name: 'Grace L.',
    text: 'Beautiful space, kind stylists, and the softest blowout. I felt pampered.',
  },
  {
    name: 'Hannah M.',
    text: 'They truly listen. My cut grows out so gracefully every time.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" aria-label="Client testimonials" className="py-16 bg-blushPink/10">
      <div className="container-section">
        <h2 className="h2">Testimonials</h2>
        <p className="p mt-3 text-black/70">Words from our beloved clientele.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="rounded-2xl bg-white/70 ring-1 ring-softGray/60 p-6 backdrop-blur transition-transform duration-300 hover:-translate-y-1">
              <p className="p">“{t.text}”</p>
              <footer className="mt-4 font-semibold">— {t.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
