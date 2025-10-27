"use client";
import { useState } from 'react';

export default function ContactBooking() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    setStatus('submitting');
    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      form.reset();
    } catch (e) {
      setStatus('error');
    }
  }

  return (
    <section id="booking" aria-label="Contact and booking" className="py-16">
      <div className="container-section">
        <h2 className="h2">Contact & Booking</h2>
        <p className="p mt-3 text-black/70">We can’t wait to welcome you.</p>

        <div className="mt-10 grid lg:grid-cols-2 gap-10">
          <div>
            <div className="rounded-2xl bg-white/70 ring-1 ring-softGray/60 p-6 backdrop-blur">
              <h3 className="h3">Get in touch</h3>
              <ul className="mt-4 space-y-2">
                <li><span className="font-semibold">Phone:</span> <a className="nav-link" href="tel:+1234567890">(123) 456-7890</a></li>
                <li><span className="font-semibold">Email:</span> <a className="nav-link" href="mailto:hello@aurorasalon.com">hello@aurorasalon.com</a></li>
                <li><span className="font-semibold">Address:</span> 123 Bloom Ave, Suite 2, City</li>
              </ul>
              <div className="mt-6 aspect-video rounded-xl overflow-hidden ring-1 ring-softGray/60">
                <iframe
                  title="Aurora Salon location on Google Maps"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95565131531677!3d-37.81732797975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSalon!5e0!3m2!1sen!2sus!4v1610000000000"
                />
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="rounded-2xl bg-white/70 ring-1 ring-softGray/60 p-6 backdrop-blur" aria-describedby="booking-help">
            <h3 className="h3">Book an appointment</h3>
            <p id="booking-help" className="sr-only">All fields marked with * are required.</p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold" htmlFor="name">Name *</label>
                <input required id="name" name="name" type="text" className="mt-1 w-full rounded-lg border border-softGray/70 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-royalGold" />
              </div>
              <div>
                <label className="block text-sm font-semibold" htmlFor="email">Email *</label>
                <input required id="email" name="email" type="email" className="mt-1 w-full rounded-lg border border-softGray/70 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-royalGold" />
              </div>
              <div>
                <label className="block text-sm font-semibold" htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel" className="mt-1 w-full rounded-lg border border-softGray/70 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-royalGold" />
              </div>
              <div>
                <label className="block text-sm font-semibold" htmlFor="service">Service *</label>
                <select required id="service" name="service" className="mt-1 w-full rounded-lg border border-softGray/70 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-royalGold">
                  <option value="Signature Cut">Signature Cut</option>
                  <option value="Gloss + Toner">Gloss + Toner</option>
                  <option value="Balayage">Balayage</option>
                  <option value="Luxury Blowout">Luxury Blowout</option>
                  <option value="Deep Conditioning">Deep Conditioning</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold" htmlFor="date">Preferred Date *</label>
                <input required id="date" name="date" type="date" className="mt-1 w-full rounded-lg border border-softGray/70 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-royalGold" />
              </div>
              <div>
                <label className="block text-sm font-semibold" htmlFor="time">Preferred Time *</label>
                <input required id="time" name="time" type="time" className="mt-1 w-full rounded-lg border border-softGray/70 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-royalGold" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold" htmlFor="notes">Notes</label>
                <textarea id="notes" name="notes" rows={4} className="mt-1 w-full rounded-lg border border-softGray/70 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-royalGold" />
              </div>
            </div>
            <button type="submit" className="btn-primary mt-6" disabled={status==='submitting'}>
              {status==='submitting' ? 'Booking…' : 'Confirm Booking'}
            </button>
            {status==='success' && <p role="status" className="mt-3 text-green-700">Thank you! We will confirm shortly.</p>}
            {status==='error' && <p role="status" className="mt-3 text-red-700">Something went wrong. Please try again.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
