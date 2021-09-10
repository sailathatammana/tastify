import Contact from "../assets/contact.jpg";
import Map from "../assets/map.JPG";

import ContactInfo from "../components/ContactInfo";
import BookingForm from "../components/BookingForm";

export default function ContactPage() {
  return (
    <div className="contact">
      <img
        className="contact-hero"
        src={Contact}
        alt="a young woman and nature"
      />
      <h1>Contact Us</h1>
      <div className="contact-content">
        <ContactInfo />
        <BookingForm />
      </div>
      <div className="contact-map">
        <h3>Map</h3>
        <img src={Map} alt="Restaurant map" />
      </div>
    </div>
  );
}
