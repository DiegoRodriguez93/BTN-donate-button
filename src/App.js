import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>Bitcoin Donation</h2>
      <form action="https://btcpayjungle.com/api/v1/invoices" method="POST">
        <input type="hidden" name="currency" value="USD" />
        <input
          type="hidden"
          name="storeId"
          value="ApNzMGhbBz6QU9CgXLGnkufEyA17t2KH3hyyCmpX6KiV"
        />
        <input name="price" type="number" step="0.00001" placeholder="amount" />
        <button type="submit">Donate</button>
      </form>
    </div>
  );
}

export default App;
