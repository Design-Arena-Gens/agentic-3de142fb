import Image from 'next/image';

const images = [
  { src: '/images/gallery1.svg', alt: 'Soft waves with glossy finish' },
  { src: '/images/gallery2.svg', alt: 'Textured bob with subtle highlights' },
  { src: '/images/gallery3.svg', alt: 'Elegant updo with gold accessory' },
  { src: '/images/gallery4.svg', alt: 'Lived-in blonde balayage' },
  { src: '/images/gallery5.svg', alt: 'Sleek ponytail with shine' },
  { src: '/images/gallery6.svg', alt: 'Romantic curls and volume' },
];

export default function Gallery() {
  return (
    <section id="gallery" aria-label="Gallery of salon work" className="py-16">
      <div className="container-section">
        <h2 className="h2">Gallery</h2>
        <p className="p mt-3 text-black/70">A glimpse of our favorite looks.</p>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img) => (
            <div key={img.src} className="relative aspect-square rounded-xl overflow-hidden bg-softGray/30">
              <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
