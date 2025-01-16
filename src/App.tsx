import { FeedbackForm } from "./components/feedback-form";
import { Products } from "./components/products";
import { Tab, TabContent, TabList, Tabs } from "./components/tabs";

export const App = () => (
  <div className="page">
    <div className="page__container">
      <div className="page__mobile-view">
        <Tabs>
          <TabList>
            <Tab index={0} label="Products" />
            <Tab index={1} label="Feedback" />
          </TabList>
          <TabContent index={0}>
            <Products />
          </TabContent>
          <TabContent index={1}>
            <FeedbackForm />
          </TabContent>
        </Tabs>
      </div>
      <div className="page__desktop-view">
        <div className="page__header-item">Products</div>
        <div className="page__header-item page__header-item--feedback">
          Feedback
        </div>
        <Products />
        <FeedbackForm />
      </div>
    </div>
  </div>
);
