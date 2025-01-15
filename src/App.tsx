function App() {
  return (
    <div className="page">
      <div className="page__container">
        {/* Mobile view */}
        <div className="page__mobile-view"></div>

        {/* Desktop view */}
        <div className="page__desktop-view">
          <div className="header__item">Products</div>
          <div className="header__item header__item--right">Feedback</div>
          <div className="page__content">Products Content</div>
          <div className="page__content page__content--right">Form</div>
        </div>
      </div>
    </div>
  );
}

export default App;
