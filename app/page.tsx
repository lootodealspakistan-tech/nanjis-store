export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <h1 style={{ color: "#38bdf8" }}>🛍️ Nanji's</h1>

        <button
          style={{
            background: "#38bdf8",
            color: "#000",
            border: "none",
            padding: "10px 16px",
            borderRadius: "8px",
            fontWeight: "bold",
          }}
        >
          Become a Seller
        </button>
      </header>

      <h2>Welcome to Nanji's Marketplace 🚀</h2>
      <p>Buy & Sell products from anywhere.</p>

      <input
        type="text"
        placeholder="🔍 Search products..."
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "8px",
          border: "none",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      />
      <h3>Categories</h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "10px",
        }}
      >
        <button>📱 Electronics</button>
        <button>👕 Fashion</button>
        <button>🏠 Home</button>
        <button>💄 Beauty</button>
        <button>🎮 Gaming</button>
        <button>🚗 Automotive</button>
      </div>

      <h3 style={{ marginTop: "40px" }}>Featured Products</h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "15px",
        }}
      >
        <div style={{ background: "#1e293b", padding: "15px", borderRadius: "12px" }}>
          <h4>🥤 Electric Shake Cup</h4>
          <p>PKR 2,500</p>
          <button>🛒 Add to Cart</button>
        </div>

        <div style={{ background: "#1e293b", padding: "15px", borderRadius: "12px" }}>
          <h4>☕ Smart Thermos</h4>
          <p>PKR 4,599</p>
          <button>🛒 Add to Cart</button>
        </div>

        <div style={{ background: "#1e293b", padding: "15px", borderRadius: "12px" }}>
          <h4>🌡️ Coffee Cup</h4>
          <p>PKR 1,399</p>
          <button>🛒 Add to Cart</button>
        </div>

        <div style={{ background: "#1e293b", padding: "15px", borderRadius: "12px" }}>
          <h4>💄 Makeup Bag</h4>
          <p>PKR 1,500</p>
          <button>🛒 Add to Cart</button>
        </div>
      </div>
      <div
        style={{
          marginTop: "40px",
          padding: "20px",
          background: "#1e293b",
          borderRadius: "12px",
        }}
      >
        <h3>Why Choose Nanji's?</h3>
        <p>🚚 Free Delivery</p>
        <p>💵 Cash on Delivery (COD)</p>
        <p>🔒 Secure Payments</p>
        <p>↩️ Easy Returns</p>
      </div>

      <footer
        style={{
          marginTop: "50px",
          textAlign: "center",
          color: "#94a3b8",
        }}
      >
        © 2026 Nanji's. All Rights Reserved.
      </footer>
    </main>
  );
}
