export default function List({props, fn}) {


  return (
    <>
      <ul>
        Names
        {props.map((item) => (
          <li
            id={item.id}
            key={item.id}
            onClick={fn}
            className="list-item"
          >
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
}
