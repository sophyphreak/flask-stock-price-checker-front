import React, { useState } from "react"
import axios from "axios"

const Frontend = () => {
  const [singleStock, setSingleStock] = useState("")
  const [singleLike, setSingleLike] = useState(false)
  const [singleResponse, setSingleResponse] = useState("")

  const [stockOne, setStockOne] = useState("")
  const [stockTwo, setStockTwo] = useState("")
  const [multiLike, setMultiLike] = useState(false)
  const [multiResponse, setMultiResponse] = useState("")

  const handleGetSingle = async (e) => {
    e.preventDefault()
    let response = {}
    try {
      response = await axios.get(
        `https://flask-stock-price-checker.andrew-horn-portfolio.life/api/stock-prices?stock=${singleStock}${
          singleLike ? "&like=true" : ""
        }`
      )
    } catch (e) {
      console.log(e)
    }
    setSingleResponse(JSON.stringify(response.data))
    setSingleStock("")
    setSingleLike(false)
  }

  const handleGetMulti = async (e) => {
    e.preventDefault()
    let response = {}
    try {
      response = await axios.get(
        `https://flask-stock-price-checker.andrew-horn-portfolio.life/api/stock-prices?stock=${stockOne}&stock=${stockTwo}${
          multiLike ? "&like=true" : ""
        }`
      )
    } catch (e) {
      console.log(e)
    }
    setMultiResponse(JSON.stringify(response.data))
    setStockOne("")
    setStockTwo("")
    setMultiLike(false)
  }

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
          value={singleStock}
          onChange={({ target: { value } }) =>
            value.length <= 4 && setSingleStock(value)
          }
        />
        <input
          type="checkbox"
          name="like"
          checked={singleLike}
          onChange={() => setSingleLike((prev) => !prev)}
        />{" "}
        Like?
        <br />
        <button type="submit" onClick={handleGetSingle}>
          Get Price!
        </button>
      </form>
      <p>
        <code>{singleResponse}</code>
      </p>
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
          value={stockOne}
          onChange={({ target: { value } }) =>
            value.length <= 4 && setStockOne(value)
          }
        />
        <input
          type="text"
          name="stock"
          placeholder="msft"
          style={{ width: "100px" }}
          required=""
          value={stockTwo}
          onChange={({ target: { value } }) =>
            value.length <= 4 && setStockTwo(value)
          }
        />
        <input
          type="checkbox"
          name="like"
          checked={multiLike}
          onChange={() => setMultiLike((prev) => !prev)}
        />{" "}
        Like both?
        <br />
        <button type="submit" onClick={handleGetMulti}>
          Get Price!
        </button>
      </form>
      <p>
        <code>{multiResponse}</code>
      </p>
    </div>
  )
}
export default Frontend
