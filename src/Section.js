function Section({ name, info, price, image, leftBtn, rightBtn }) {
  const bgImage = {
    backgroundImage: `url(${image})`
  };
  return (
    <>
      <div className="sec" style={bgImage}>
        <div className="carName">
          <h1>{name}</h1>
          <p>{price ? price : ""}</p>
          <p>{info}</p>
        </div>
        <div className="cta">
          <div className="buttons">
            <button className={leftBtn === "Demo Drive" ? "demo" : "leftBtn"}>
              {leftBtn}
            </button>
            {rightBtn ? <button className="rightBtn">{rightBtn}</button> : ""}
          </div>
        </div>
      </div>
    </>
  );
}

export default Section;
