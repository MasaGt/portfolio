import Card from "./Card";

const Body = () => {
  const content =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";
  let blogs = [
    { title: "Blog1", content, date: "2024/05/17" },
    { title: "Blog2", content, date: "2024/05/16" },
    { title: "Blog3", content, date: "2024/05/15" },
    { title: "Blog4", content, date: "2024/05/14" },
  ];
  return (
    <div className="blogs">
      <div className="blogs_grid">
        {blogs.map((data, i) => (
          <Card key={i} children={data} />
        ))}
      </div>
    </div>
  );
};

export default Body;
