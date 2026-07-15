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
          margin: "20px 0",
          borderRadius: "8px",
          border: "none",
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
     
