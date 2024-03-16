import c from "./Details.module.css";

const Details = (p) => {
  return (
    <div className={c.container}>
      <div className={c.title}>
        <div className={c.line}></div>
        <h3>{p.title}</h3>
      </div>
    </div>
  );
};

export default Details;