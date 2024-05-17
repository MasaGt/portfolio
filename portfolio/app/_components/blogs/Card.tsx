const Card = ({
  children,
}: {
  children: { title: string; content: string; date: string };
}) => {
  return (
    <div className="card">
      <div className="card_title">{children.title}</div>
      <div className="card_content">{children.content}</div>
      <div className="card_date">{children.date}</div>
      <div className="card_btn">read more</div>
    </div>
  );
};

export default Card;
