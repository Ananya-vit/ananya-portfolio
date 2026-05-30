function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-8 max-w-5xl mx-auto text-center"
    >
      <h2 className="text-4xl font-bold mb-6">
        Contact Me
      </h2>

      <p className="text-gray-400 mb-8">
        Feel free to reach out for collaborations or opportunities.
      </p>

      <a
        href="mailto:your-email@example.com"
        className="px-6 py-3 bg-white text-black rounded-xl font-semibold"
      >
        Send Email
      </a>
    </section>
  );
}

export default Contact;