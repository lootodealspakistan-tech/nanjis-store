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
            padding: "10px 18px",
            border: "none",
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
          marginTop: "20px",
          borderRadius: "8px",
          border: "none",
        }}
      />

      <h3 style={{ marginTop: "35px" }}>Categories</h3>

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
