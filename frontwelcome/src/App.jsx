import React from 'react';
import './App.css'; // Assuming you want to add custom styles

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Wanderlust Travel</h1>
        <p>Your adventure starts here. Explore the world with us!</p>
        <button className="explore-btn">Start Exploring</button>
      </header>
      <section className="welcome-section">
        <h2>Popular Destinations</h2>
        <div className="destination-cards">
          <div className="destination-card">
            <img src="data:image/jpeg;base64,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" alt="Paris" />
            <h3>Paris</h3>
          </div>
          <div className="destination-card">
            <img src="https://image.newyorkcity.ca/wp-content/uploads/2020/03/New-York-Helicopter-Tour-2.eric_both.bottom_right.jpg.webp" alt="New York" />
            <h3>New York</h3>
          </div>
          <div className="destination-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt_Ux1WF34znI7ysn8ZHlWiZTC0y-WvQCi-w&s" alt="Tokyo" />
            <h3>Tokyo</h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
