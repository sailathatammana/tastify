export default function BookingForm() {
  function Book(event) {
    event.preventDefault();
    alert("Your booking request is saved");
  }
  return (
    <form onSubmit={(event) => Book(event)}>
      <h3>Book a table</h3>
      <p>Your Full Name</p>
      <input type="text" placeholder="John" />
      <p>Your Email address</p>
      <input type="email" placeholder="john@gmail.com" />
      <p>Choose date</p>
      <input type="date" name="" id="" />
      <p>Choose time</p>
      <input type="time" />
      <button>Submit</button>
    </form>
  );
}
