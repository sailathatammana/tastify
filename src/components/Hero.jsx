import profile from "../assets/about.jpg";

export default function Hero() {
  return (
    <section className="section-hero">
      <div className="slogan">
        <h1>Tastify</h1>
        <h3>Our food is grown, not born!</h3>
      </div>
      <img src={profile} alt="profile" />
    </section>
  );
}
