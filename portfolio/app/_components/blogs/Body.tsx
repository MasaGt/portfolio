import Card from "./Card";

const Body = () => {
  let blogs = [
    { src: "blog_img.png", title: "Blog1", content: "This is blog1" },
    { src: "blog_img.png", title: "Blog2", content: "This is blog2" },
    { src: "blog_img.png", title: "Blog3", content: "This is blog3" },
    { src: "blog_img.png", title: "Blog4", content: "This is blog4" },
  ];
  return (
    <div className="blogs">
      <div className="blogs_grid">
        {blogs.map((data) => (
          <Card children={data} />
        ))}
      </div>
    </div>
  );
};

export default Body;
