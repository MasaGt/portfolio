const Body = () => {
  return (
    <div className="contact">
      <form className="contact_form backdrop-blur-xs">
        <div className="form_unit">
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="bg-transparent border-b"
            />
          </div>

          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="bg-transparent border-b"
            />
          </div>
        </div>

        <div>
          <label>Message:</label>
          <textarea
            name="message"
            id="message"
            required
            className="bg-transparent border w-full h-40"
          ></textarea>
        </div>

        <div className="form_button">
          <button type="submit" className="w-fit border rounded-3xl px-4 py-1">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Body;
