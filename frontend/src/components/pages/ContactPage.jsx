function ContactPage() {
  return (
    <section className="contact_page">
      <hgroup>
        <h3>Contact us, geez ! 😛</h3>
        <p>"Having a family doesn’t mean that you stop being an individual. You know the best thing you can do for the people that depend on you? Be honest with them, even if it means setting them free." — Mr. Meeseeks</p>
      </hgroup>
      <form>
        <label htmlFor="name">Your name:</label>
          <input type="text" id="name" autoComplete="off" />
        <label htmlFor="message">Your message:</label>
        <textarea id="message" type="text" autoComplete="off" />
        <button type="submit">Send</button>
      </form>
    </section>
  )
}

export default ContactPage;