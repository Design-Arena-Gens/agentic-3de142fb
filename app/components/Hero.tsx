import Image from 'next/image';

export default function Hero() {
  return (
    <section aria-label="Introduction" className="relative">
      <div className="absolute inset-0 bg-blushPink/20" aria-hidden></div>
      <div className="container-section relative pt-16 md:pt-24 pb-12 md:pb-20 grid md:grid-cols-2 gap-10 items-center">
        <div className="animate-fadeUp">
          <h1 className="h1">
            Timeless, feminine elegance
            <span className="block text-royalGold">crafted just for you</span>
          </h1>
          <p className="p mt-5 max-w-prose">
            Experience luxury hair care in an intimate, welcoming space. From precision cuts to luminous color, our stylists elevate your everyday.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#booking" className="btn-primary" aria-label="Book an appointment">
              Book Appointment
            </a>
            <a href="#services" className="nav-link font-semibold" aria-label="View services and prices">
              View Services
            </a>
          </div>
        </div>
        <div className="relative aspect-[4/3] md:aspect-[5/4] rounded-3xl overflow-hidden shadow-lg ring-1 ring-softGray/60">
          <Image
            src="/images/hero.svg"
            alt="Close-up of a stylish haircut with soft waves and shine"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
