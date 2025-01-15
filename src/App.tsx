function App() {
  return (
    <div className="page">
      <div className="page__container">
        {/* Mobile view */}
        <div className="page__mobile-view"></div>

        {/* Desktop view */}
        <div className="page__desktop-view">
          <div className="header__item">Products</div>
          <div className="header__item">Feedback</div>
          <div className="page__content">Products Content</div>
          <div className="page__content"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
