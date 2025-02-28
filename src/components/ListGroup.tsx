function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
