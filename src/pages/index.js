import React from "react"

const IndexPage = () => (
  <div>
    <header style={{ marginLeft: "5%", marginTop: "5%" }}>
      <h1>ISQA_5 - Nasdaq Stock Price Checker</h1>
    </header>
    <div id="userstories" style={{ marginLeft: "5%", marginTop: "5%" }}>
      <h3>User Stories</h3>
      <ol>
        <li>
          Set the content security policies to only allow loading of scripts and
          css from your server.
        </li>
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
        <li>
          A good way to receive current price is the following external
          API(replacing 'GOOG' with your stock):
          <code>https://finance.google.com/finance/info?q=NASDAQ%3aGOOG</code>
        </li>
        <li>All 5 functional tests are complete and passing.</li>
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
    <div id="testui" style={{ marginLeft: "5%" }}>
      <h2 style={{ textAlign: "left" }}>Front-End:</h2>
      <h3>Get single price and total likes</h3>
      <form
        action="/api/stock-prices"
        method="GET"
        id="testForm2"
        className="border"
      >
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
    <hr style={{ margin: "50px", marginTop: "200px" }} />
  </div>
)

export default IndexPage
