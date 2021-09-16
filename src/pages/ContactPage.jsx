import Contact from "../assets/contact.jpg";
import Map from "../assets/map.JPG";

import ContactInfo from "../components/ContactInfo";
import BookingForm from "../components/BookingForm";

export default function ContactPage() {
  return (
    <article className="contact">
      <section className="hero">
        <img className="image" src={Contact} alt="Product" />
      </section>
      <section className="content-section">
        <ContactInfo />
        <BookingForm />
      </section>
      <div className="contact-map">
        <h3>Map</h3>
        <img src={Map} alt="Restaurant map" />
      </div>
    </article>
  );
}
