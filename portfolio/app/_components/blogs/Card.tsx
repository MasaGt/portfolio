const Card = ({
  children,
}: {
  children: { src: string; title: string; content: string };
}) => {
  return (
    <div className="card">
      <img src={children.src} alt={children.title} />
      <div className="blog_title">{children.title}</div>
      <div className="blog_content">{children.content}</div>
      <div className="blog_btn">Read</div>
    </div>
  );
};

export default Card;
