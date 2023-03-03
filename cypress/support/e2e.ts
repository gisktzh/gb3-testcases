import './commands';


declare global {
  namespace Cypress {
    interface Chainable {
      open_url_with_cordinates(): Chainable<void>;
      select_topic(name_of_the_topic: string): Chainable<void>;
      click_map_in_the_list(name_of_the_map: string): Chainable<void>;
    }
  }
}
