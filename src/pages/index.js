import React from "react"
import Frontend from "../components/frontend"
import "./style.css"

const IndexPage = () => (
  <div>
    <header style={{ marginLeft: "5%", marginTop: "5%" }}>
      <h1>ISQA_5 - Nasdaq Stock Price Checker</h1>
    </header>
    <div id="userstories" style={{ marginLeft: "5%", marginTop: "5%" }}>
      <h3>User Stories</h3>
      <ol>
        <li>
          I can <b>GET</b> <code>/api/stock-prices</code> with form data
          containing a Nasdaq <i>stock</i> ticker and recieve back an object
          <i>stockData</i>.
        </li>
        <li>
          In <i>stockData</i>, I can see the <i>stock</i>(string, the ticker),
          <i>price</i>(decimal in string format), and <i>likes</i>(int).
        </li>
        <li>
          I can also pass along field <i>like</i> as <b>true</b>(boolean) to
          have my like added to the stock(s). Only 1 like per ip should be
          accepted.
        </li>
        <li>
          If I pass along 2 stocks, the return object will be an array with both
          stock's info but instead of <i>likes</i>, it will display
          <i>rel_likes</i>(the difference between the likes on both) on both.
        </li>
      </ol>
      <h3>Example usage:</h3>
      <code>/api/stock-prices?stock=goog</code>
      <br />
      <code>/api/stock-prices?stock=goog&amp;like=true</code>
      <br />
      <code>/api/stock-prices?stock=goog&amp;stock=msft</code>
      <br />
      <code>/api/stock-prices?stock=goog&amp;stock=msft&amp;like=true</code>
      <br />
      <br />
      <h3>Example return:</h3>
      <code>{'{"stockData":{"stock":"GOOG","price":"786.90","likes":1}}'}</code>
      <br />
      <code>
        {
          '{"stockData":[{"stock":"MSFT","price":"62.30","rel_likes":-1},{"stock":"GOOG","price":"786.90","rel_likes":1}]}'
        }
      </code>
    </div>
    <hr style={{ margin: "50px" }} />

    <p className="border" style={{ padding: "3%" }}>
      <b>
        Try yourself with the endpoint of <br />{" "}
        <code>
          https://flask-stock-price-checker.andrew-horn-portfolio.life/api/stock-prices
        </code>
      </b>
    </p>
    <hr style={{ margin: "50px" }} />
    <Frontend />
    <hr style={{ margin: "50px", marginTop: "200px" }} />
  </div>
)

export default IndexPage
