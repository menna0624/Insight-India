import React from "react";

const ads = [
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", 
    title: "Apple - Think Different",
    description: "Discover the latest iPhones, MacBooks, and more from Apple.",
    link: "https://www.apple.com/",
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    title: "Microsoft - Empowering Every Person",
    description: "Explore Surface, Windows, and the latest AI tools from Microsoft.",
    link: "https://www.microsoft.com/",
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    title: "Amazon - Shop Everything",
    description: "Get amazing deals on electronics, books, and groceries on Amazon.",
    link: "https://www.amazon.com/",
  }
];

const AdComponent = () => {
  return (
    <div style={styles.container}>
      {ads.map((ad, index) => (
        <a key={index} href={ad.link} target="_blank" rel="noopener noreferrer" style={styles.adBox}>
          <img src={ad.image} alt={ad.title} style={styles.image} />
          <div style={styles.textContainer}>
            <h3 style={styles.title}>{ad.title}</h3>
            <p style={styles.description}>{ad.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
    padding: "20px",
    maxWidth: "1000px",
    margin: "auto",
    justifyContent: "center",
  },
  adBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    textDecoration: "none",
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    transition: "transform 0.3s ease-in-out",
    minHeight: "250px",
    justifyContent: "space-between",
  },
  image: {
    width: "80px",
    height: "80px",
    objectFit: "contain",
    marginBottom: "10px",
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#333",
    margin: "0 0 5px 0",
  },
  description: {
    fontSize: "14px",
    color: "#666",
    margin: 0,
  },
};

export default AdComponent;
