import React from "react"

const Frontend = () => {
  return (
    <div id="testui" style={{ marginLeft: "5%" }}>
      <h2 style={{ textAlign: "left" }}>Front-End:</h2>
      <h3>Get single price and total likes</h3>
      <form action="" method="" id="testForm2" className="border">
        <input
          type="text"
          name="stock"
          placeholder="goog"
          style={{ width: "100px" }}
          required=""
        />
        <input type="checkbox" name="like" value="true" /> Like?
        <br />
        <button type="submit">Get Price!</button>
      </form>
      <h3>Compare and get relative likes</h3>
      <form
        action="/api/stock-prices"
        method="GET"
        id="testForm"
        className="border"
      >
        <input
          type="text"
          name="stock"
          placeholder="goog"
          style={{ width: "100px" }}
          required=""
        />
        <input
          type="text"
          name="stock"
          placeholder="msft"
          style={{ width: "100px" }}
          required=""
        />
        <input type="checkbox" name="like" value="true" /> Like both?
        <br />
        <button type="submit">Get Price!</button>
      </form>
      <code id="jsonResult"></code>
    </div>
  )
}
export default Frontend
