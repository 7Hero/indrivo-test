import { FeedbackForm } from "./components/feedback-form";
import { Products } from "./components/products";
import { Tab, TabContent, Tabs } from "./components/tabs";
import { TabList } from "./components/tabs/tabs";

export const App = () => (
  <div className="page">
    <div className="page__container">
      {/* Mobile/Tablet view */}
      <div className="page__mobile-view">
        <Tabs>
          <TabList>
            <Tab index={0} label="Products" />
            <Tab index={1} label="Feedback" />
          </TabList>
          <div className="page__content">
            <TabContent index={0}>
              <Products />
            </TabContent>
            <TabContent index={1}>
              <FeedbackForm />
            </TabContent>
          </div>
        </Tabs>
      </div>
      {/* Desktop view */}
      <div className="page__desktop-view">
        <div className="header__item">Products</div>
        <div className="header__item header__item--right">Feedback</div>
        <div className="page__content">
          <Products />
        </div>
        <div className="page__content page__content--right">
          <FeedbackForm />
        </div>
      </div>
    </div>
  </div>
);
