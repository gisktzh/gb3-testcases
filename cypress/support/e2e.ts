import './commands';

declare global {
  namespace Cypress {
    interface Chainable {
      open_url_with_cordinates(x: string, y: string): Chainable<void>;
      select_topic(name_of_the_topic: string): Chainable<void>;
      click_map_in_the_list(name_of_the_map: string): Chainable<void>;
      click_by_data_test_id(test_id: string): Chainable<void>;
    }
  }
}
